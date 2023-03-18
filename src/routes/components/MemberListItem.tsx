import React from "react";
import {RoleLabel} from "src/routes/components/RoleLabel";

interface MemberListItemProps {
    username: string;
    isOwner?: boolean;
    role: string;
}

export const MemberListItem = ({username, isOwner, role}: MemberListItemProps) => {
    return (
        <div
            className={"flex flex-col py-[8px] px-[24px] space-y-[12px]"}
        >
            <div
                className={"flex flex-row items-center space-x-[6px]"}
            >
                <div
                    className={"w-[28px] h-[28px] rounded-[50%] bg-[#242424]"}
                />
                <p
                    className={"text-[16px] leading-[20px] text-mono-black font-medium"}
                >
                    {username} 
                </p>
            </div>
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
        </div>
    
    )
}