import React from "react";
import {AmountLabel} from "src/routes/components/AmountLabel";

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
                    <AmountLabel 
                        amount={23}
                        label={"projects"}
                    />
                    <AmountLabel
                        amount={124}
                        label={"members"}
                    />
                </div>
            </div>
        </div>
    )
}