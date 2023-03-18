import React from "react";
import {MemberAmountLabel} from "src/routes/components/MemberAmountLabel";

interface ProjectListItemProps {
    projectName: string;
    projectMembers: number;
    isJoined?: boolean;
}

export const ProjectListItem = ({
    projectName,
    projectMembers,
    isJoined,
}: ProjectListItemProps) => {
    return (
        <div
            className={"flex flex-row items-center justify-between py-[8px] px-[24px]"}
        >
            <p>
                {projectName}
            </p>
            <div
                className={"flex flex-row space-x-[8px]"}
            >
                <MemberAmountLabel amount={projectMembers} />
                {
                    isJoined ? (
                        <button
                            className={"w-[66px] h-[24px] rounded-[4px] px-[12px] border-blue-400 border text-blue-400 text-[14px] leading-[18px]"}
                        >
                            Joined
                        </button>
                    ) : (
                        <button
                            className={"w-[66px] h-[24px] rounded-[4px] bg-blue-400 text-mono-white text-[14px] leading-[18px]"}
                        >
                            Join
                        </button>
                    )
                }
            </div>
        </div>
    )
}