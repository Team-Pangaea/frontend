import React from "react";
import {ProposalStatusLabel} from "src/routes/components/ProposalStatusLabel";

interface ProposalListItemProps {
    name: string;
    status: string;
    proposedDate: string;
    totalVoted: number;
    totalAddresses: number;
    upVoted: number;
    downVoted: number;
}

export const ProposalListItem = ({
    name,
    status,
    proposedDate,
    totalVoted,
    totalAddresses,
    upVoted,
    downVoted,
}: ProposalListItemProps) => {
    return (
        <div
            className={"flex flex-row items-center justify-between py-[8px] px-[24px]"}
        >
            <div
                className={"flex flex-row items-center space-x-[48px]"}
            >
                <ProposalStatusLabel width={120} status={status} />
                <div
                    className={"flex flex-col"}
                >
                    <p
                        className={"text-[16px] leading-[20px] text-mono-black font-medium"}
                    >
                        {name}
                    </p>
                    <p
                        className={"text-[14px] leading-[18px] text-mono-gray"}
                    >
                        proposed on: {proposedDate}
                    </p>
                </div>
            </div>
            <div
                className={"flex flex-row space-x-[44px] items-center"}
            >
                <div
                    className={"flex flex-col space-y-[4px]"}
                >
                    <div
                        className={"flex flex-row items-center space-x-[4px]"}
                    >
                        <p
                            className={"text-[12px] leading-[15px] text-[#42D463] font-semibold"}
                        >
                            {upVoted}
                        </p>
                        <p
                            className={"text-[12px] leading-[15px] text-mono-gray font-medium"}
                        >
                            {Math.round(upVoted / totalVoted * 100)}%
                        </p>
                    </div>
                    <div
                        className={"h-[2px] bg-mono-lightgray w-[100px]"}
                    >
                        <div
                            className={`h-[2px] bg-[#42D563]`}
                            style={{
                                width: `${Math.round(upVoted / totalVoted * 100)}%`,
                            }}
                        />
                    </div>
                </div>
                <div
                    className={"flex flex-col space-y-[4px]"}
                >
                    <div
                        className={"flex flex-row items-center space-x-[4px]"}
                    >
                        <p
                            className={"text-[12px] leading-[15px] text-[#FA6262] font-semibold"}
                        >
                            {downVoted}
                        </p>
                        <p
                            className={"text-[12px] leading-[15px] text-mono-gray font-medium"}
                        >
                            {Math.round(downVoted / totalVoted * 100)}%
                        </p>
                    </div>
                    <div
                        className={"h-[2px] bg-mono-lightgray w-[100px]"}
                    >
                        <div
                            className={`h-[2px] bg-[#FA6262]`}
                            style={{
                                width: `${Math.round(downVoted / totalVoted * 100)}%`,
                            }}
                        />
                    </div>
                </div>
                <div
                    className={"flex flex-col items-end w-[131px]"}
                >
                    <p
                        className={"text-[14px] leading-[18px] text-mono-black font-medium"}
                    >
                        {totalVoted} Votes
                    </p>
                    <p
                        className={"text-[14px] leading-[18px] text-mono-gray"}
                    >
                        {totalAddresses} addresses
                    </p>
                </div>
            </div>
        </div>
    )
}