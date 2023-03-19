import React from "react";

interface RoleLabelProps {
    role?: string;
    isOwner?: boolean;
}

export const RoleLabel = ({role, isOwner}: RoleLabelProps) => {
    if(isOwner) {
        return (
            <p
                className={"font-medium text-[12px] leading-[16px] py-[4px] px-[12px] text-green-primary bg-green-secondary rounded-[4px]"}
            >
                Owner
            </p>
        )
    }
    
    return (
        <p
            className={`font-medium text-[12px] leading-[16px] py-[4px] px-[12px] 
            ${role === "Contributor" ? "bg-[#F3EEFD] text-[#8160C6]" : "bg-[#FCEEFD] text-[#E824A5]"} rounded-[4px]`}
        >
            {role}
        </p>
    )
}