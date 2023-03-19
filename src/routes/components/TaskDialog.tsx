import React from "react";
import {ContributionStatusLabel} from "src/routes/components/ContributionStatusLabel";

interface TaskDialogProps {
    open: boolean;
    onClose: () => void;
}

export const TaskDialog = ({open, onClose}: TaskDialogProps) => {
    if(!open) {
        return null;
    }
    
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div
                onClick={onClose}
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
                        <div className="bg-mono-white px-[24px] py-[28px] flex flex-row space-x-[28px] items-start">
                            <div
                                className={"flex flex-col space-y-[16px]"}
                            >
                                <p
                                    className={"text-[20px] leading-[25px] text-black font-semibold"}
                                >
                                    📡 Dashboard Project Prototype, CAMRY
                                </p>
                                <p
                                    className={"text-[14px] leading-[18px] text-mono-black h-[170px]"}
                                >
                                    This is the description for sample task.
                                </p>
                                <div
                                    className={"flex flex-row space-x-[12px] grow"}
                                >
                                    <img
                                        src={"/profile.svg"}
                                    />
                                    <div
                                        className={"flex flex-col space-y-[8px] grow"}
                                    >
                                        <div
                                            className={"flex flex-row space-x-[4px]"}
                                        >
                                            <p
                                                className={"text-[12px] leading-[15px] text-mono-black font-medium"}
                                            >
                                                Satoshi Nakamoto
                                            </p>
                                            <p
                                                className={"text-[12px] leading-[15px] text-finegray"}
                                            >
                                                2 days ago
                                            </p>
                                        </div>
                                        <p
                                            className={"text-[14px] leading-[18px] text-mono-black p-[12px] " +
                                                "rounded-[8px] border border-mono-lightgray"}
                                        >
                                            Nicely done! I proud of you Doku!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[12px] grow"}
                                >
                                    <img
                                        src={"/profile.svg"}
                                    />
                                    <div
                                        className={"flex flex-col space-y-[8px] grow p-[12px] " +
                                            "border border-mono-lightgray relative rounded-[8px]"}
                                    >
                                        <textarea
                                            className={"text-[14px] leading-[18px] text-mono-black " +
                                                " h-[90px] bg-transparent"}
                                            placeholder={"this is my figma work for wireframe..."}
                                        />
                                        <button 
                                            className={"absolute bottom-[12px] right-[12px] text-[12px] leading-[15px] " +
                                                "text-mono-gray py-[4px] px-[12px] border border-mono-gray" +
                                                " rounded-[4px]"}
                                        >
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={"flex flex-col space-y-[18px]"}
                            >
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Status
                                    </p>
                                    <ContributionStatusLabel status={"In Review"} />
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Reviewer
                                    </p>
                                    <div
                                        className={"flex flex-row space-x-[6px] items-center w-[171px]"}
                                    >
                                        <div
                                            className={"bg-[#242424] rounded-full w-[16px] h-[16px]"}
                                        />
                                        <p
                                            className={"text-[12px] leading-[15px] text-mono-black"}
                                        >
                                            Chelsea Lee
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Assignee
                                    </p>
                                    <div
                                        className={"flex flex-row space-x-[6px] items-center w-[171px]"}
                                    >
                                        <div
                                            className={"bg-[#242424] rounded-full w-[16px] h-[16px]"}
                                        />
                                        <p
                                            className={"text-[12px] leading-[15px] text-mono-black"}
                                        >
                                            Ieyasu Dokugawa
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Owner
                                    </p>
                                    <div
                                        className={"flex flex-row space-x-[6px] items-center w-[171px]"}
                                    >
                                        <div
                                            className={"bg-[#242424] rounded-full w-[16px] h-[16px]"}
                                        />
                                        <p
                                            className={"text-[12px] leading-[15px] text-mono-black"}
                                        >
                                            Ieyasu Dokugawa
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Due Date
                                    </p>
                                    <div
                                        className={"flex flex-row items-center pr-[8px] pl-[4px] bg-mono-lightgray rounded-[4px]"}
                                    >
                                        <img
                                            src={"/ic_cal.svg"}
                                        />
                                        <p
                                            className={"text-[12px] leading-[15px] text-mono-500"}
                                        >
                                            Mar. 20, 2023
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Points
                                    </p>
                                    <div
                                        className={"flex flex-row items-center space-x-[8px]"}
                                    >
                                        <img
                                            src={"/toyota-red-profile.svg"}
                                            width={16}
                                        />
                                        <p
                                            className={"text-[12px] leading-[15px] text-mono-500"}
                                        >
                                            30 Points
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Priority
                                    </p>
                                    <div
                                        className={"flex flex-row items-center space-x-[8px]"}
                                    >
                                        <img
                                            src={"/ic_priority.svg"}
                                        />
                                        <p
                                            className={"text-[12px] leading-[15px] text-mono-500"}
                                        >
                                            High
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px]"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Circle
                                    </p>
                                    <div
                                        className={"flex flex-row items-center space-x-[8px]"}
                                    >
                                        <img
                                            src={"/circle-profile.svg"}
                                            width={16}
                                        />
                                        <p
                                            className={"text-[12px] leading-[15px] text-mono-500"}
                                        >
                                            Duckee
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={"flex flex-row space-x-[8px] items-center"}
                                >
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-gray p-[4px] w-[80px]"}
                                    >
                                        Project
                                    </p>
                                    <p
                                        className={"text-[12px] leading-[15px] text-mono-500"}
                                    >
                                        P02-ToYoTa
                                    </p>
                                </div>
                            </div>
                            <button onClick={onClose} type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}