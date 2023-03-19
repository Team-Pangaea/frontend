import React from 'react';
import {RoleLabel} from "src/routes/components/RoleLabel";

interface PeerReviewListItemProps {
    username: string;
    contributionCount: number;
    isOwner?: boolean;
    role: string;
    point: number;
    setPoint: (value: number) => void;
}

export const PeerReviewListItem = ({
    username,
    contributionCount,
    isOwner = false,
    role,
    point,
    setPoint,
}: PeerReviewListItemProps) => {
    return (
        <div
            className={"flex flex-row space-x-[12px] px-[24px] py-[18px] items-center justify-between"}
        >
            <div
                className={"flex flex-row space-x-[20px] items-center"}
            >
                <div
                    className={"flex flex-row space-x-[6px] items-center w-[171px]"}
                >
                    <div
                        className={"bg-[#242424] rounded-full w-[28px] h-[28px]"}
                    />
                    <p
                        className={"text-[16px] leading-[20px] text-mono-black font-medium"}
                    >
                        {username}
                    </p>
                </div>
                <p
                    className={"text-[14px] leading-[18px] text-mono-black"}
                >
                    {contributionCount} Contributions
                </p>
            </div>
            <div
                className={"flex flex-row space-x-[20px] items-center"}
            >
                <div
                    className={"flex flex-row space-x-[4px]"}
                >
                    {
                        isOwner ? (
                            <RoleLabel
                                isOwner
                            />
                        ) : null
                    }
                    <RoleLabel
                        role={role}
                    />
                </div>
                <div
                    className={"flex flex-row space-x-[14px]"}
                >
                    <button
                        onClick={() => setPoint(point - 1)}
                    >
                        <img
                            src={"/ic_remove.svg"}
                        />
                    </button>
                    <input
                        onChange={(e) => setPoint(parseInt(e.target.value))}
                        value={point}
                        className={"w-[79px] text-center text-[18px] leading-[24px] text-mono-black font-medium bg-[#F5F5F5] rounded-[4px]"}
                    />
                    <button
                        onClick={() => setPoint(point + 1)}
                    >
                        <img
                            src={"/ic_add.svg"}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}