import React from "react";

interface TaskListItemProps {
    taskName: string;
    dueDate: string;
    isAssigned?: boolean;
}

export const TaskListItem = ({
    taskName,
    dueDate,
    isAssigned,
}: TaskListItemProps) => {
    return (
        <div
            className={"flex flex-row items-center justify-between py-[8px] px-[24px]"}
        >
            <p
                className={"text-[14px] text-charcoal font-medium"}
            >
                {taskName}
            </p>
            <div
                className={"flex flex-row space-x-[8px]"}
            >
                {
                    isAssigned ? (
                        <button
                            className={"w-[73px] h-[24px] rounded-[4px] px-[12px] border-mono-gray " +
                                "border text-mono-gray text-[12px] leading-[15px]"}
                        >
                            Assigned
                        </button>
                    ) : (
                        <button
                            className={"w-[73px] h-[24px] rounded-[4px] px-[12px] " +
                                "text-mono-white text-[12px] leading-[15px] bg-charcoal"}
                        >
                            Claim
                        </button>
                    )
                }
                <div
                    className={"flex flex-row items-center pr-[8px] pl-[4px] bg-mono-lightgray rounded-[4px]"}
                >
                    <p
                        className={"text-[12px] leading-[15px] text-mono-500"}
                    >
                        Due date: {dueDate}       
                    </p>
                </div>
            </div>
        </div>
    )
}