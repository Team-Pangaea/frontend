import React from "react";
import {useAccountStore} from "src/modules/AccountStore";

export const Header = () => {
    const account = useAccountStore(state => state.account);
    
    return (
        <>
            <header className={"absolute inset-x-0 top-0 h-[60px] flex flex-row align-center bg-white"}>
                <div className={"container mx-auto flex flex-row items-center justify-between"}>
                    <div className={"flex flex-row items-center space-x-[44px]"}>
                        <img
                            src={"/logo.svg"}
                        />
                        <div
                            className={"flex flex-row space-x-[36px]"}
                        >
                            <button
                                className={"text-[14px] text-charcoal"}
                            >
                                Pods
                            </button>
                            <button
                                className={"text-[14px] text-charcoal"}
                            >
                                Workspace
                            </button>
                            <button
                                className={"text-[14px] text-charcoal"}
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                    {
                        account ? (
                            <div
                                className={"flex flex-row space-x-[32px] items-center"}
                            >
                                <button
                                    className={"border-[#B0B1B7] border-[1px] rounded-[18px] flex flex-row " +
                                        "px-[16px] py-[9px] text-[14px] text-black leading-[18px]"}
                                >
                                    + Create
                                </button>
                                <div
                                    className={"flex flex-row space-x-[20px] items-center"}
                                >
                                    <button>
                                        <img 
                                            src={"/ic_bell.svg"}
                                        />
                                    </button>
                                    <button
                                        className={"flex flex-row items-center space-x-[6px] py-[6px] " +
                                            "px-[10px] bg-[#282828] rounded-[4px]"}
                                    >
                                        <img 
                                            src={"/profile.svg"}
                                        />
                                        <p
                                            className={"text-[14px] text-white font-medium"}
                                        >
                                            {account.meta.name}
                                        </p>
                                    </button>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </header>
            <div
                className={"h-[60px]"}
            />
        </>
    )
}