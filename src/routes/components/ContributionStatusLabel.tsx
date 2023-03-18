import React from "react";

interface ContributionStatusLabelProps {
    status: string;
}

export const ContributionStatusLabel = ({status} : ContributionStatusLabelProps) => {
    return (
        <div
            className={`flex flex-row items-center space-x-[5px]`}
        >
            <div 
                className={`w-[8px] h-[8px] rounded-full ${
                    status === "In Progress" ? "bg-[#32D418]" :
                    status === "In Review" ? "bg-[#FFB800]" :
                    status === "Done" ? "bg-blue-400" :
                        "border border-mono-gray"
                }`}
            />
            <p
                className={`text-[12px] leading-[15px] text-green-primary font-medium w-[60px]`}
            >
                {status}
            </p>
        </div>
    )
}