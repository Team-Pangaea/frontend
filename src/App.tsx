import React, {useCallback, useEffect, useState} from 'react';
import {web3Accounts, web3Enable, web3FromSource} from "@polkadot/extension-dapp";
import {InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import {useAccountStore} from "src/modules/AccountStore";
import {useNavigate} from "react-router-dom";
import {ApiPromise, WsProvider} from "@polkadot/api";
import { BN } from "@polkadot/util";
import {MARKETPLACE_ADDRESS_SHIBUYA, RPC_URL_SHIBUYA, TOKEN_ADDRESS_SHIBUYA} from "./assets/constants";
import tokenABI from "./contracts/token.json";
import { ContractPromise } from '@polkadot/api-contract';

function App() {
  const [allAccounts, setAllAccounts] = useState<InjectedAccountWithMeta[]>([]);
  
  const account = useAccountStore(state => state.account);
  const setAccount = useAccountStore(state => state.setAccount);
  
  const nftContract = useAccountStore(state => state.nftContract);
  const setNftContract = useAccountStore(state => state.setNftContract);
  
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  
  const walletInit = useCallback(async () => {
    const allInjected = await web3Enable("toyota-pangaea");

    if (allInjected.length === 0) {
        alert("Please install Polkadot{.js} extension first");
        window.open("https://polkadot.js.org/extension/", "_blank");
        return;
    }
    
    const temp = await web3Accounts();
    setAllAccounts(temp);
  }, []);

  function readOnlyGasLimit(api: ApiPromise) {
    const MAX_CALL_WEIGHT = new BN(5_000_000_000_000);
  
    try {
      const ret = api?.registry?.createType("WeightV2", {
        refTime: new BN(1_000_000_000_000),
        proofSize: MAX_CALL_WEIGHT,
      });
  
      return ret;
    } catch (error) {
      console.log("error", error);
    }
  }
  
  const setUp = async () => {
    if (account) {
      setLoading(true);

      const wsProvider = new WsProvider(RPC_URL_SHIBUYA);
      const api = await ApiPromise.create({ provider: wsProvider });
      await api.isReady;
      const tokenContract = new ContractPromise(
          api,
          tokenABI,
          TOKEN_ADDRESS_SHIBUYA
      );
      
      setNftContract(
          tokenContract
      );

      const ret = readOnlyGasLimit(api);
      console.log(ret)
      

      const {result, output} = await tokenContract.query["psp34::ownerOf"](account.address, {
      }, { u64: 1 });
      
      console.log(result.toHuman())

      if (result.isOk) {
        // output the return value
        console.log('Success', output?.toHuman());
      } else {
        console.log('Error', result.asErr);
      }
      
      setLoading(false);
    }
  };
  
  useEffect(() => {
    walletInit();
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    
    if (allAccounts.length && !account) {
      setAccount(allAccounts[0]);
      // timeoutId = setTimeout(() => {
      //   navigate("/explore");
      // }, 3500);
      setLoading(false);
    }
    
    return () => {
      if(timeoutId)
        clearTimeout(timeoutId);
    }
  }, [allAccounts]);
  
  return (
      <div
          className={"container mx-auto flex flex-col"}
      >
    <div
      className={"mt-[180px] flex flex-col items-center space-y-[36px]"}
    >
        <>
          <img
              src={"/toyota-logo.svg"}
          />
          <div
              className={"flex flex-col items-center space-y-[64px]"}
          >
            <div
                className={"flex flex-col items-center space-y-[28px]"}
            >
              <p
                  className={"text-[36px] leading-[45px] text-black text-center"}
              >
                Welcome! <br />
                Start Your Impossible
              </p>
              <p
                  className={"text-[18px] leading-[23px] text-mono-500"}
              >
                Pangaea supports polkadot network only
              </p>
            </div>
            {
              loading ? (
                  <div role="status">
                    <svg aria-hidden="true"
                         className="w-[44px] h-[45px] mr-2 text-[#282828] animate-spin dark:text-gray-600 fill-[#B0B1B7]"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
              ) : (
                  <button
                      className={
                          "bg-black text-white text-[14px] px-[24px] py-[12px] " +
                          "rounded-[18px] w-[358px] flex flex-row items-center " +
                          "justify-center space-x-[12px] rounded-lg"}
                      onClick={() => setUp()}
                  >
                    <img
                        src={"/polkadot-js.svg"}
                    />
                    <p
                        className={"text-[18px] leading-[23px] text-mono-white"}
                    >
                      Polkadot.Js
                    </p>
                  </button>
              )
            }
          </div>
        </>
    </div>
      </div>
  );
}

export default App;
