import React, {useEffect} from "react";
import {CircleCard} from "src/routes/components/CircleCard";
import tokenABI from "../contracts/token.json";
import daomanagerABI from "../contracts/daomanager.json";
import {ContractPromise} from "@polkadot/api-contract";
import {DAOMANAGER_ADDRESS_SHIBUYA, RPC_URL_SHIBUYA, TOKEN_ADDRESS_SHIBUYA} from "src/assets/constants";
import {ApiPromise, WsProvider} from "@polkadot/api";
import {WeightV2} from "@polkadot/types/interfaces";
import {useAccountStore} from "src/modules/AccountStore";
import {MAX_CALL_WEIGHT, PROOFSIZE, storageDepositLimit} from "src/App";

export const Explore = () => {
    const account = useAccountStore(state => state.account);
    
    const test = async () => {
        const wsProvider = new WsProvider(RPC_URL_SHIBUYA);
        const api = await ApiPromise.create({provider: wsProvider});
        await api.isReady;
        
        const daomanagerContract = new ContractPromise(
            api,
            daomanagerABI,
            DAOMANAGER_ADDRESS_SHIBUYA
        );

        const isMember = await daomanagerContract.query["daoManager::checkMembership"](account!.address, {
            gasLimit: api?.registry.createType('WeightV2', {
                refTime: MAX_CALL_WEIGHT,
                proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
        }, account!.address);
        
        console.log(isMember.output?.toHuman());
    }
    
    useEffect(() => {
        test()
    }, []);
    
    return (
        <>
            <div
                style={{
                    backgroundImage: "url(/explore-background.svg)"
                }}
                className={`min-h-[200px] w-full ` +
                    "flex flex-col items-center justify-center bg-cover"}
            >
                <p
                    className={"text-[36px] leading-[48px] text-mono-white text-center font-bold"}
                >
                    Welcome,<br />
                    Explore Circles within Pangaea
                </p>
            </div>
            <div
                className={"container mx-auto flex flex-col"}
            >
                
                <div
                    className={"mt-[36px] grid grid-cols-3 gap-[19px]"}
                >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                        <CircleCard />
                    ))
                }
                </div>
            </div>
        </>
    );
}