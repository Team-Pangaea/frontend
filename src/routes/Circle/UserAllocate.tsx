import React from "react";
import {CircleTasksTabs} from "src/routes/Circle/CircleTasksTabs";
import {ContributionStatusLabel} from "src/routes/components/ContributionStatusLabel";
import {TaskBox} from "src/routes/components/TaskBox";
import {useParams} from "react-router-dom";
import {RoleLabel} from "src/routes/components/RoleLabel";

export const CircleUserAllocate = () => {
    const {username} = useParams();
    
    const tasks = [
        {
            name: "📡 Dashboard Project, CAMRY",
            dueDate: "Mar. 20, 2023",
            projectName: "P01-ThisDummyText",
            status: "In Progress",
        },
        {
            name: "🇰🇷 Korean Social Network Posting, Marketing",
            dueDate: "Mar. 20, 2023",
            projectName: "P05-HowAreYou",
            status: "In Progress",
            assigner: "Phoolan Devi"
        },
        {
            name: "📡 Dashboard Project, Prius",
            dueDate: "Mar. 20, 2023",
            projectName: "P04-ThisIsAmerica",
            status: "In Progress",
        },
        {
            name: "📡 Dashboard Project Prototype, CAMRY",
            dueDate: "Mar. 20, 2023",
            projectName: "P03-ToYoTa",
            status: "In Review",
            assigner: "Ieyasu Dokugawa",
        },
        {
            name: "🚘 Design Experience Develop. for HID",
            dueDate: "Mar. 20, 2023",
            projectName: "P07-Maxima",
            status: "In Review",
            assigner: "Chelsea Lee",
        },
        {
            name: "🚘 Design Experience Develop. for HID",
            dueDate: "Mar. 20, 2023",
            projectName: "P07-Maxima",
            status: "Done",
            assigner: "Chelsea Lee",
        },
        {
            name: "🚘 Design Experience Develop. for HID",
            dueDate: "Mar. 20, 2023",
            projectName: "P07-Maxima",
            status: "Done",
            assigner: "Chavo Kim",
        },
    ]
    
    return (
        <div
            className={"flex flex-row space-x-[20px] mt-[28px]"}
        >
            <div
                className={"flex flex-col space-y-[8px] w-[273px] "}
            >
                <div
                    className={"flex flex-col space-y-[20px] rounded-[16px] " +
                        "bg-mono-white pt-[28px] px-[20px] pb-[40px] border border-mono-lightgray " +
                        "items-center"}
                >
                    <img 
                        src={"/id-card.svg"}
                        width={145}
                    />
                    <p
                        className={"text-[20px] leading-[25px] text-green-primary font-medium"}
                    >
                        {username}
                    </p>
                    <div
                        className={"flex flex-row space-x-[4px]"}
                    >
                        <RoleLabel
                            isOwner
                        />
                        <RoleLabel
                            role={"Core-Contributor"}
                        />
                    </div>
                    <p
                        className={"text-[14px] leading-[18px] text-charcoal"}
                    >
                        Client developer who is bridging Web2
                        and Web3 users who aims to maximize
                        user experience through cutting-edge technology.
                    </p>
                </div>
                <div
                    className={"flex flex-col space-y-[12px] rounded-[16px] " +
                        "bg-mono-white p-[20px] border border-mono-lightgray "}
                >
                    <p
                        className={"text-[20px] leading-[25px] text-green-primary font-bold"}
                    >
                        Cycle: Mar 10 - 17
                    </p>
                    <div
                        className={"flex flex-row space-x-[4px] py-[8px]"}
                    >
                        <img
                            src={"/toyota-red-profile.svg"}
                        />
                        <p
                            className={"text-[24px] leading-[30px] text-mono-black font-bold"}
                        >
                            20
                        </p>
                        <p
                            className={"text-[24px] leading-[30px] text-finegray font-medium"}
                        >
                            Points
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={"flex flex-col grow space-y-[16px]"}
            >
                <CircleTasksTabs />
                <div
                    className={"flex flex-row space-x-[20px]"}
                >
                    <div
                        className={"flex flex-col space-y-[18px] grow"}
                    >
                        <div
                            className={"flex flex-row items-center space-x-[6px]"}
                        >
                            <ContributionStatusLabel
                                status={"In Progress"}
                                isBig
                            />
                            <p
                                className={"text-[16px] leading-[20px] text-mono-gray font-medium"}
                            >
                                {tasks.filter(task => task.status === "In Progress").length}
                            </p>
                        </div>
                        <div
                            className={"flex flex-col space-y-[8px]"}
                        >
                            {
                                tasks.filter(task => task.status === "In Progress").map((task, index) => (
                                    <TaskBox
                                        key={index}
                                        name={task.name}
                                        projectName={task.projectName}
                                        dueDate={task.dueDate}
                                        assigner={task.assigner}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className={"flex flex-col space-y-[18px] grow"}
                    >
                        <div
                            className={"flex flex-row items-center space-x-[6px]"}
                        >
                            <ContributionStatusLabel isBig status={"In Review"} />
                            <p
                                className={"text-[16px] leading-[20px] text-mono-gray font-medium"}
                            >
                                {tasks.filter(task => task.status === "In Review").length}
                            </p>
                        </div>
                        <div
                            className={"flex flex-col space-y-[8px]"}
                        >
                            {
                                tasks.filter(task => task.status === "In Review").map((task, index) => (
                                    <TaskBox
                                        key={index}
                                        name={task.name}
                                        projectName={task.projectName}
                                        dueDate={task.dueDate}
                                        assigner={task.assigner}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className={"flex flex-col space-y-[18px] grow"}
                    >
                        <div
                            className={"flex flex-row items-center space-x-[6px]"}
                        >
                            <ContributionStatusLabel isBig status={"Done"} />
                            <p
                                className={"text-[16px] leading-[20px] text-mono-gray font-medium"}
                            >
                                {tasks.filter(task => task.status === "Done").length}
                            </p>
                        </div>
                        <div
                            className={"flex flex-col space-y-[8px]"}
                        >
                            {
                                tasks.filter(task => task.status === "Done").map((task, index) => (
                                    <TaskBox
                                        key={index}
                                        name={task.name}
                                        projectName={task.projectName}
                                        dueDate={task.dueDate}
                                        assigner={task.assigner}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}