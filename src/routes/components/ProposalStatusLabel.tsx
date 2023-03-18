import React from "react";

interface ProposalStatusLabelProps {
    status: string;
}

export const ProposalStatusLabel = ({
    status,
}: ProposalStatusLabelProps) => {
    return (
        <div
            className={"flex flex-row items-center space-x-[10px] px-[12px] py-[4px] w-[120px]"}
        >
            {
                status === "Active" ? (
                    <div
                        className={"w-[6px] h-[6px] rounded-full bg-[#32D518]"}
                    />
                ) : (status === "Executed" ? (
                    <div
                        className={"w-[6px] h-[6px] rounded-full bg-[#FFB800]"}
                    />
                ) : (
                    <div
                        className={"w-[6px] h-[6px] rounded-full bg-[#E82A00]"}
                    />
                ))
            }
            <p
                className={
                `text-[14px] leading-[18px] ${status === "Active" ? "text-[#32D518]" : (status === "Executed" ? "text-[#FFB800]" : "text-[#E82A00]")}`
            }
            >
                {status}
            </p>
        </div>
    )
}