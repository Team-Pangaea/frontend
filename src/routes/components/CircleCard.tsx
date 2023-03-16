import React from "react";

export const CircleCard = () => {
    return (
        <div
            className={"flex flex-col items-center space-y-[12px] border rounded-[12px] " +
                "border-lightgray py-[32px] bg-mono-white"}
        >
            <img
                src={"/circle-profile.svg"}    
            />
            <p
                className={"text-[24px] leading-[30px] text-mono-500"}
            >
            </p>
            <div
                className={"flex flex-col items-center space-y-[20px]"}
            >
                <div
                    className={"flex flex-col items-center space-y-[16px] px-[16px]"}
                >
                    <p
                        className={"text-[16px] leading-[20px] text-mono-500"}
                        style={{
                            wordBreak: "keep-all",
                        }}
                    >
                        We enable communities to build and fund their shared needs. 
                        Help us build a regenerative crypto economic world.
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
                <div
                    className={"flex flex-row space-x-[8px] items-center"}
                >
                    <button
                        className={"flex flex-row items-center space-x-[4px] " +
                            "py-[8px] px-[12px] bg-[#E7ECFD] rounded-[4px]"}
                    >
                        <p
                            className={"text-[14px] text-[#567af9] font-semibold"}
                        >
                            23
                        </p>
                        <p
                            className={"text-[12px] text-charcoal font-medium"}
                        >
                            projects
                        </p>
                    </button>
                    <button
                        className={"flex flex-row items-center space-x-[4px] " +
                            "py-[8px] px-[12px] bg-[#E7ECFD] rounded-[4px]"}
                    >
                        <p
                            className={"text-[14px] text-[#567af9] font-semibold"}
                        >
                            124
                        </p>
                        <p
                            className={"text-[12px] text-charcoal font-medium"}
                        >
                            members
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}