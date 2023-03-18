import React from "react";
import {ContributionStatusLabel} from "src/routes/components/ContributionStatusLabel";

interface ContributionListItemProps {
    status: string;
    name: string;
}

export const ContributionListItem = ({
    status,
    name
} : ContributionListItemProps) => {
    return (
        <div
            className={"flex flex-row items-center space-x-[5px] px-[24px] py-[12px] justify-between"}
        >
            <p
                className={"text-[14px] leading-[18px] text-mono-500 font-medium w-[222px] truncate"}
            >
                {name}
            </p>
            <ContributionStatusLabel status={status} width={60} />
        </div>
    )
}