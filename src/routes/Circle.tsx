import React, {useEffect, useState} from "react";
import {AmountLabel} from "src/routes/components/AmountLabel";
import {Outlet, useMatch, useNavigate} from "react-router-dom";
import {useAccountStore} from "src/modules/AccountStore";
import {MAX_CALL_WEIGHT, PROOFSIZE, storageDepositLimit} from "src/App";
import {WeightV2} from "@polkadot/types/interfaces";
import {web3FromSource} from "@polkadot/extension-dapp";
import {LoadingOverlay} from "src/components/LoadingOverlay";

export const Circle = () => {
    const navigate = useNavigate();
    
    const match = useMatch("/circle/overview/:activeName/*");
    const activeName = match?.params.activeName;
    
    const daoContract = useAccountStore(state => state.daoContract);
    const account = useAccountStore(state => state.account);
    const api = useAccountStore(state => state.api);
    
    const [loading, setLoading] = useState(false);
    const [joined, setJoined] = useState(false);
    
    const handleJoin = async () => {
        setLoading(true);
        
        const {gasRequired} = await daoContract!.query["toyotaDao::joinDao"](account!.address, {
            gasLimit: api?.registry.createType('WeightV2', {
                refTime: MAX_CALL_WEIGHT,
                proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
        });

        const gasLimit = api?.registry.createType('WeightV2', gasRequired) as WeightV2

        const accountSigner = await web3FromSource(
            account!.meta.source
        );

        await daoContract!.tx["toyotaDao::joinDao"](
            {
                gasLimit,
                storageDepositLimit,
            },
        ).signAndSend(account!.address, {
            signer: accountSigner.signer
        }, async (res) => {
            if (res.status.isInBlock) {
                console.log('in a block')
            } else if (res.status.isFinalized) {
                console.log('finalized')
                setLoading(false);
                setJoined(true);
            }
        });
    }
    
    const checkJoined = async () => {
        const {output} = await daoContract!.query["toyotaDao::getMembers"](account!.address, {
            gasLimit: api?.registry.createType('WeightV2', {
                refTime: MAX_CALL_WEIGHT,
                proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
        });

        const obj = JSON.parse(output!.toString());
        console.log(obj.ok.includes(account!.address));
    }
    
    useEffect(() => {
        checkJoined();
        console.log(account)
    }, [])
    
    return (
        <LoadingOverlay active={loading}>
        <div
            className={"container mx-auto flex flex-col mt-[24px]"}
        >
            <div
                className={"flex flex-col w-full space-y-[28px]"}
            >
                <div
                    className={"flex flex-col w-full space-y-[16px]"}
                >
                    <div
                        className={"flex flex-row items-center w-full justify-between"}
                    >
                        <div
                            className={"flex flex-row items-center space-x-[8px] py-[8px]"}
                        >
                            <img 
                                src={"/circle-profile.svg"}
                                style={{
                                    width: 28,
                                    height: 28,
                                }}
                            />
                            <p 
                                className={"text-[20px] leading-[25px] text-mono-500 font-bold"}
                            >
                                Duckee
                            </p>
                            <img 
                                src={"/down-triangle.svg"}
                            />
                        </div>
                        {
                            joined ? (
                                <div
                                    className={"rounded-[4px] py-[8px] px-[20px] text-blue-400 border border-blue-400"}
                                >
                                    Joined
                                </div>
                            ) : (
                                <button
                                    onClick={handleJoin}
                                    className={"rounded-[4px] py-[8px] px-[20px] bg-[#567AF9] text-mono-white font-medium"}
                                >
                                    Join
                                </button>
                            )
                        }
                    </div>
                    <div
                        className={"flex flex-col space-y-[16px]"}
                    >
                        <div
                            className={"flex flex-row space-x-[4px] items-center"}
                        >
                            <button
                                className={"text-[16px] leading-[20px] text-finegray font-medium"}
                                onClick={() => navigate("/explore")}
                            >
                                home
                            </button>
                            <img 
                                src={"/right-arrow.svg"}
                            />
                            <button
                                onClick={() => navigate("/circle/overview")}
                                className={`text-[16px] leading-[20px] ${activeName ? "text-finegray" : "text-mono-500"} font-medium`}
                            >
                                Duckee
                            </button>
                            {
                                activeName ? (
                                    <>
                                        <img
                                            src={"/right-arrow.svg"}
                                        />
                                        <p
                                            className={"text-[16px] leading-[20px] text-mono-500 font-medium"}
                                        >
                                            {activeName[0].toUpperCase() + activeName.slice(1)}
                                        </p>
                                    </>
                                ) : null
                            }
                        </div>
                        <div
                            className={"flex flex-row space-x-[8px] items-center"}
                        >
                            <AmountLabel amount={23} label={"projects"} />
                            <AmountLabel amount={124} label={"members"} />
                        </div>
                        <p
                            className={"text-[16px] leading-[20px] text-mono-500"}
                        >
                            We enable communities to build and fund their shared needs. Help us build a regenerative crypto economic world.
                        </p>
                        <div
                            className={"flex flex-row space-x-[18px] items-center"}
                        >
                            <div
                                className={"flex flex-row space-x-[6px] items-center"}
                            >
                                <img
                                    src={"/ic-link.svg"}
                                />
                                <p
                                    className={"text-[14px] text-mono-gray"}
                                >
                                    duckee.xyz
                                </p>
                            </div>
                            <div
                                className={"flex flex-row space-x-[12px] items-center"}
                            >
                                <img
                                    src={"/ic_discord.svg"}
                                />
                                <img
                                    src={"/ic_twitter.svg"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
        </LoadingOverlay>
    )
}