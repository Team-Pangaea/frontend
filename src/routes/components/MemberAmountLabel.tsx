import React from "react";

interface MemberAmountLabelProps {
    amount: number;
}

export const MemberAmountLabel = ({amount}: MemberAmountLabelProps) => {
    return (
        <div
            className={"flex flex-row items-center space-x-[4px] bg-orange-secondary rounded-[4px] pr-[8px] pl-[4px]"}
        >
            <img
                src={"/member.svg"}
            />
            <p
                className={"text-[14px] text-orange-primary font-semibold"}
            >
                {amount}
            </p>
        </div>
    )
}