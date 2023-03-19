import React, {useEffect} from "react";
import {CircleCard} from "src/routes/components/CircleCard";
import {WeightV2} from "@polkadot/types/interfaces";
import {useAccountStore} from "src/modules/AccountStore";
import {MAX_CALL_WEIGHT, PROOFSIZE, storageDepositLimit} from "src/App";
import {useNavigate} from "react-router-dom";

export const Explore = () => {
    const navigate = useNavigate();
    
    const account = useAccountStore(state => state.account);
    const api = useAccountStore(state => state.api);
    
    const daoContract = useAccountStore(state => state.daoContract);
    
    const test = async () => {
        const {output} = await daoContract!.query["toyotaDao::getTask"](account!.address, {
            gasLimit: api?.registry.createType('WeightV2', {
                refTime: MAX_CALL_WEIGHT,
                proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
        }, 1);
        
        console.log(output?.toHuman());
    }
    
    useEffect(() => {
        if(!account) {
            navigate(`/`, {replace: true});
        }
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