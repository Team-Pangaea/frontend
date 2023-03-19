import React from "react";

interface TaskBoxProps {
    name: string;
    projectName: string;
    dueDate: string;
    assigner?: string;
    onClick?: () => void;
}

export const TaskBox = ({
    name,
    projectName,
    dueDate,
    assigner,
    onClick
}: TaskBoxProps) => {
    return (
        <div
            onClick={onClick}
            className={"flex flex-col w-[100%] bg-mono-white rounded-[8px] cursor-pointer " +
                "p-[16px] rounded-[16px] border-mono-lightgray border space-y-[12px]"}
        >
            <div
                className={"flex flex-col space-y-[12px] items-start"}
            >
                <p
                    className={"text-black text-[16px] leading-[20px] font-medium"}
                >
                    {name}
                </p>
                <div
                    className={"flex flex-row items-center pr-[8px] pl-[4px] bg-mono-lightgray rounded-[4px]"}
                >
                    <img
                        src={"/ic_cal.svg"}
                    />
                    <p
                        className={"text-[12px] leading-[15px] text-mono-500"}
                    >
                        Due date: {dueDate}
                    </p>
                </div>
            </div>
            <div
                className={"flex flex-col space-y-[4px]"}
            >
                <p
                    className={"text-[12px] leading-[15px] text-finegray"}
                >
                    Project
                </p>
                <p
                    className={"text-[14px] leading-[17px] text-mono-black font-medium"}
                >
                    {projectName}
                </p>
            </div>
            {
                !!assigner ? (
                    <div
                        className={"flex flex-row space-x-[6px]"}
                    >
                        <div 
                            className={"w-[16px] h-[16px] rounded-full bg-[#242424]"}
                        />
                        <p
                            className={"text-[12px] leading-[15px] text-mono-black font-medium"}
                        >
                            {assigner}
                        </p>
                    </div>
                ) : (
                    <button
                        className={"w-[73px] h-[24px] rounded-[4px] px-[12px] " +
                            "text-mono-white text-[12px] leading-[15px] bg-charcoal"}
                    >
                        Claim
                    </button>
                )
            }
        </div>
    )
}