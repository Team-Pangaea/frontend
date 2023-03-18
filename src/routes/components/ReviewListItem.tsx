import React from "react";
import {RoleLabel} from "src/routes/components/RoleLabel";

interface ReviewListItemProps {
    createdAt: string;
    username: string;
    profilePicture?: string;
    isOwner: boolean;
    role: string;
    description: string;
}

export const ReviewListItem = ({
    createdAt,
    username,
    isOwner,
    role,
    description,
}: ReviewListItemProps) => {
    return (
        <div
            className={"flex flex-col space-y-[12px] px-[24px] py-[20px] w-full"}
        >
            <div
                className={"flex flex-row items-center space-x-[16px]"}
            >
                <div
                    className={"flex flex-row items-center space-x-[6px]"}
                >
                    <div 
                        className={"w-[28px] h-[28px] rounded-full bg-[#242424]"}
                    />
                    <p
                        className={"text-[16px] leading-[20px] text-mono-500 font-medium"}
                    >
                        {username}
                    </p>
                </div>
                <div
                    className={"flex flex-row items-center space-x-[4px]"}
                >
                    {
                        isOwner ? (
                            <RoleLabel isOwner />
                        ) : null
                    }
                    <RoleLabel role={role} />
                </div>
            </div>
            <p
                className={"text-[16px] leading-[20px] text-mono-500"}
            >
                {description}
            </p>
            <p
                className={"text-[14px] leading-[18px] text-finegray"}
            >
                {createdAt}
            </p>
        </div>
    )
}