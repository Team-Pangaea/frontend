import React from "react";
import {AmountLabel} from "src/routes/components/AmountLabel";
import {useNavigate, useParams} from "react-router-dom";
import {CircleOverview} from "src/routes/Circle/Overview";
import {CircleMyContributions} from "src/routes/Circle/MyContributions";

export const Circle = () => {
    const { activeName } = useParams();
    
    const navigate = useNavigate();
    
    return (
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
                        <button
                            className={"rounded-[4px] py-[8px] px-[20px] bg-[#567AF9] text-mono-white font-medium"}
                        >
                            Join
                        </button>
                    </div>
                    <div
                        className={"flex flex-col space-y-[16px]"}
                    >
                        <div
                            className={"flex flex-row space-x-[4px] items-center"}
                        >
                            <p
                                className={"text-[16px] leading-[20px] text-finegray font-medium"}
                            >
                                home
                            </p>
                            <img 
                                src={"/right-arrow.svg"}
                            />
                            <p
                                className={"text-[16px] leading-[20px] text-mono-500 font-medium"}
                            >
                                Duckee
                            </p>
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
                <div
                    className={"flex flex-row items-center space-x-[36px] px-[16px] pb-[12px] border-b-mono-lightgray border-b"}
                >
                    <button
                        className={`text-[16px] leading-[20px] ${activeName === "overview" ? "text-mono-500 font-semibold" : "text-finegray font-regular"}`}
                        onClick={() => navigate("/circle/overview")}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => navigate("/circle/my-contributions")}
                        className={`text-[16px] leading-[20px] ${activeName === "my-contributions" ? "text-mono-500 font-semibold" : "text-finegray font-regular"}`}
                    >
                        My Contributors
                    </button>
                </div>
            </div>
            {
                activeName === "overview" ? (
                    <CircleOverview />
                ) : (
                    <CircleMyContributions />
                )
            }
        </div>
    )
}