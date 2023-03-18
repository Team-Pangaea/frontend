import React from "react";
import {useAccountStore} from "src/modules/AccountStore";
import {useMatch, useNavigate} from "react-router-dom";

export const Header = () => {
    const account = useAccountStore(state => state.account);
    
    const tabs = [
        {
            name: "Circle",
            value: "circle"
        },
        {
            name: "Workspace",
            value: "workspace"
        },
        {
            name: "Explore",
            value: "explore"
        }
    ];
    
    const navigate = useNavigate();
    
    const match = useMatch("/:activeTab/*");
    const activeTab = match?.params.activeTab;
    
    return (
        <>
            <header className={"fixed inset-x-0 top-0 h-[60px] flex flex-row align-center bg-white"}>
                <div className={"container mx-auto flex flex-row items-center justify-between"}>
                    <div className={"flex flex-row items-center space-x-[44px]"}>
                        <button
                            onClick={() => navigate("/")}
                        >
                            <img
                                src={"/logo.svg"}
                            />
                        </button>
                        <div
                            className={"flex flex-row space-x-[36px]"}
                        >
                            {
                                tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        disabled={!account}
                                        className={`text-[14px] ${activeTab === tab.value ? "text-mono-500" : "text-finegray"}`}
                                        onClick={() => navigate(`/${tab.value}`)}
                                    >
                                        {tab.name}
                                    </button>
                                ))
                            }
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
                className={"min-h-[60px]"}
            />
        </>
    )
}