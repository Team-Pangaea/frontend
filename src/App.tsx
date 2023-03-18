import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {web3Accounts, web3Enable, web3FromSource} from "@polkadot/extension-dapp";
import {InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import {useAccountStore} from "src/modules/AccountStore";
import {ApiPromise, WsProvider} from "@polkadot/api";
import type { WeightV2 } from '@polkadot/types/interfaces';
import { BN, BN_ONE } from "@polkadot/util";
import {
  DAOMANAGER_ADDRESS_SHIBUYA,
  RPC_URL_SHIBUYA,
  TOKEN_ADDRESS_SHIBUYA
} from "./assets/constants";
import tokenABI from "./contracts/token.json";
import { ContractPromise } from '@polkadot/api-contract';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Profile} from "src/routes/App/Profile";

const proofSize = 131072;
const refTime = 6219235328;
const storageDepositLimit = null;

const MAX_CALL_WEIGHT = new BN(5_000_000_000_000).isub(BN_ONE);
const PROOFSIZE = new BN(1_000_000);

function App() {
  const [allAccounts, setAllAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [minting, setMinting] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [ipfsUploading, setIpfsUploading] = useState(false);
  
  const [input, setInput] = useState<{
    username: string;
    image: string | null;
  }>({
    username: "",
    image: null,
  });
  
  const account = useAccountStore(state => state.account);
  const setAccount = useAccountStore(state => state.setAccount);
  
  const nftContract = useAccountStore(state => state.nftContract);
  const setNftContract = useAccountStore(state => state.setNftContract);
  
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const navigate = useNavigate();

  const sendFileToIPFS = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if(!e.target.files)
        return;
      setIpfsUploading(true);
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      setInput(prev => ({
        ...prev,
        image: resFile.data.IpfsHash,
      }));

      setIpfsUploading(false);
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };
  
  const handleMint = async () => {
    setLoading(true);
    
    const wsProvider = new WsProvider(RPC_URL_SHIBUYA);
    const api = await ApiPromise.create({provider: wsProvider});
    await api.isReady;
    
    let gasLimit = api?.registry.createType('WeightV2', {
      refTime: MAX_CALL_WEIGHT,
      proofSize: PROOFSIZE,
    }) as WeightV2

    const ImgHash = JSON.stringify(`ipfs://${input.image}`);
    console.log(ImgHash);

    const accountSigner = await web3FromSource(
        account!.meta.source
    );
    
    const { gasRequired } = await nftContract!.query["customMint::mint"](
        account!.address,
        {
          gasLimit,
          storageDepositLimit,
        },
        account!.address,
        ImgHash,
        DAOMANAGER_ADDRESS_SHIBUYA
    )

    gasLimit = api?.registry.createType('WeightV2', gasRequired) as WeightV2

    await nftContract!.tx["customMint::mint"](
        {
          gasLimit,
          storageDepositLimit,
        },
        account!.address,
        ImgHash,
        DAOMANAGER_ADDRESS_SHIBUYA
    ).signAndSend(account!.address, {
      signer: accountSigner.signer
    }, async (res) => {
      if (res.status.isInBlock) {
        console.log('in a block')
      } else if (res.status.isFinalized) {
        console.log('finalized')
        setLoading(false);
        setLoggedIn(true);
      }
    });

  }
  
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
      
      console.log(tokenContract);

      const {result, output} = await tokenContract.query["psp34::balanceOf"](account.address, {
        gasLimit: api?.registry.createType('WeightV2', {
          refTime: MAX_CALL_WEIGHT,
          proofSize: PROOFSIZE,
        }) as WeightV2,
        storageDepositLimit,
      }, account.address);

      if (result.isOk) {
        // output the return value
        if(output!.eq(0))
          setMinting(true);
        else
          setLoggedIn(true);
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

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (loggedIn) {
      timeoutId = setTimeout(() => {
        navigate("/explore");
      }, 3500);
    }

    return () => {
      if(timeoutId)
        clearTimeout(timeoutId);
    }
  }, [loggedIn]);
  
  if(imageUploading) {
    return (
        <div
            className={"container mx-auto flex flex-col"}
        >
          <div
              className={"mt-[232px] flex flex-col items-center"}
          >
            <div
                className={"flex flex-col"}
            >
              <p
                  className={"text-[24px] leading-[30px] text-mono-black font-bold"}
              >
                It’s last step. <br /> 
                How do you look like?
              </p>
              {
                input.image ? (
                    loading ? (
                        <div
                          className={"flex flex-col items-center justify-center w-[526px] h-[73px] mt-[36px] "}
                        >
                          <div role="status">
                            <svg aria-hidden="true"
                                 className="w-[44px] h-[45px] mr-2 text-[#282828] animate-spin dark:text-gray-600 fill-[#B0B1B7]"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                    ) : (
                    <p
                        className={"w-[526px] text-[20px] text-center " +
                            "leading-[25px] text-mono-black font-medium bg-mono-white rounded-[16px] mt-[36px] " +
                            "border border-[#859EF8] p-[24px] break-all"}
                    >
                      {input.image}
                    </p>
                    )
                ) : (ipfsUploading ? (
                    <div
                        className={"flex flex-col items-center justify-center w-[526px] h-[73px] mt-[36px] "}
                    >
                      <div role="status">
                        <svg aria-hidden="true"
                             className="w-[44px] mt-[36px] h-[45px] mr-2 text-[#282828] animate-spin dark:text-gray-600 fill-[#B0B1B7]"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file"
                             className={"w-[526px] text-[20px] text-center cursor-pointer " +
                                 "leading-[25px] text-finegray font-medium bg-mono-white rounded-[16px] mt-[36px] " +
                                 "border border-[#7E7F89] p-[24px] border-dashed"}>
                        + Upload your pic
                        <input id="dropzone-file" type="file" className="hidden" onChange={sendFileToIPFS}/>
                      </label>
                    </div>
                ))
              }
              <button
                  className={"mt-[58px] text-[18px] leading-[23px] font-medium w-[164px] rounded-[4px] px-[20px] py-[8px]" +
                      " disabled:bg-mono-gray disabled:text-finegray disabled:cursor-not-allowed bg-blue-400 text-mono-white self-center"}
                  disabled={!input.image}
                  onClick={() => handleMint()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
    )
  }
  
  if(minting) {
    return (
        <div
            className={"container mx-auto flex flex-col"}
        >
          <div
              className={"mt-[232px] flex flex-col items-center"}
          >
            <div
                className={"flex flex-col"}
            >
              <p
                  className={"text-[24px] leading-[30px] text-mono-black font-bold"}
              >
                First,<br />
                Introduce yourself.
              </p>
              <input
                  name="floating_email"
                  id="floating_email"
                  className="block py-[8px] px-0 w-[526px] text-mono-black bg-transparent border-0 border-b-2 
                 border-finegray appearance-none focus:outline-none mt-[42px]"
                  placeholder="How should we call you?"
                  onChange={(e) => setInput({...input, username: e.target.value})}
                  required
              />
              <button
                  className={"mt-[58px] text-[18px] leading-[23px] font-medium w-[164px] rounded-[4px] px-[20px] py-[8px]" +
                      " disabled:bg-mono-gray disabled:text-finegray disabled:cursor-not-allowed bg-blue-400 text-mono-white self-center"}
                  disabled={!input.username}
                  onClick={() => setImageUploading(true)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
    )
  }
  
  return (
      <div
          className={"container mx-auto flex flex-col"}
      >
    <div
      className={"mt-[180px] flex flex-col items-center space-y-[36px]"}
    >
      {
        loggedIn ? (
            <Profile username={account?.meta.name} />
        ) : (
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
        )
      }
        
    </div>
      </div>
  );
}

export default App;
