import React from "react";

interface AmountLabelProps {
    amount: number;
    label: string;
}

export const AmountLabel = ({
    amount,
    label,
}: AmountLabelProps) => {
    return (
        <div
            className={"flex flex-row items-center space-x-[4px] " +
                "py-[8px] px-[12px] bg-[#E7ECFD] rounded-[4px]"}
        >
            <p
                className={"text-[14px] text-[#567af9] font-semibold"}
            >
                {amount}
            </p>
            <p
                className={"text-[12px] text-charcoal font-medium"}
            >
                {label}
            </p>
        </div>
    )
}