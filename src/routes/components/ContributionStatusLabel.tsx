import React from "react";

interface ContributionStatusLabelProps {
    status: string;
    width?: number;
    isBig?: boolean;
}

export const ContributionStatusLabel = ({status, width, isBig} : ContributionStatusLabelProps) => {
    return (
        <div
            className={`flex flex-row items-center space-x-[5px]`}
        >
            <div 
                className={`
                ${isBig ? "w-[10px] h-[10px]" : "w-[8px] h-[8px]"}
                rounded-full ${
                    status === "In Progress" ? "bg-[#32D418]" :
                    status === "In Review" ? "bg-[#FFB800]" :
                    status === "Done" ? "bg-blue-400" :
                        "border border-mono-gray"
                }`}
            />
            <p
                className={`
                ${isBig ? "text-[16px] leading-[20px]" : "text-[12px] leading-[15px]"} 
                text-green-primary font-medium ${width ? `w-[${width}px]` : ""}`}
            >
                {status}
            </p>
        </div>
    )
}