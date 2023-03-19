import React from "react";
import {MemberListItem} from "src/routes/components/MemberListItem";
import {CircleTasksTabs} from "src/routes/Circle/CircleTasksTabs";
import {TaskBox} from "src/routes/components/TaskBox";
import {ContributionStatusLabel} from "src/routes/components/ContributionStatusLabel";

export const CircleTasks = () => {
    const members = [
        {
            username: "Chelsea Lee",
            role: "Core-Contributor",
            isOwner: true,
        },
        {
            username: "Ieyasu Dokugawa ",
            role: "Core-Contributor",
        },
        {
            username: "Karl Marx",
            role: "Contributor",
        },
        {
            username: "Nikola Tesla",
            role: "Contributor",
        },
        {
            username: "Nikola Tesla",
            role: "Contributor",
        },
        {
            username: "Nikola Tesla",
            role: "Contributor",
        },
        {
            username: "Karl Marx",
            role: "Contributor",
        },
        {
            username: "Nikola Tesla",
            role: "Contributor",
        },
        {
            username: "Nikola Tesla",
            role: "Contributor",
        },
        {
            username: "Chavo Kim",
            role: "Contributor",
        },
    ]
    
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
                className={"flex flex-col space-y-[12px] rounded-[16px] " +
                    "bg-mono-white w-[272px] pb-[32px] border border-mono-lightgray"}
            >
                <p
                    className={"text-[20px] leading-[25px] text-black font-semibold " +
                        "px-[24px] pt-[16px] pb-[12px] border-b border-b-mono-lightgray"}
                >
                    Members
                </p>
                {
                    members.map((member, index) => (
                        <MemberListItem
                            key={index}
                            username={member.username}
                            role={member.role}
                            isOwner={member.isOwner}
                        />
                    ))
                }
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