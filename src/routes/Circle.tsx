import React from "react";
import {AmountLabel} from "src/routes/components/AmountLabel";
import {ProjectListItem} from "src/routes/components/ProjectListItem";
import {TaskListItem} from "src/routes/components/TaskListItem";
import {ProposalListItem} from "src/routes/components/ProposalListItem";

export const Circle = () => {
    const projects = [
        {
            projectName: "P01-ThisDummyText",
            projectMembers: 12,
        },
        {
            projectName: "P05-HowAreYou",
            projectMembers: 42,
        },
        {
            projectName: "P03-ToYoTa",
            projectMembers: 33,
        },
        {
            projectName: "P04-ThisAmerica",
            projectMembers: 9,
        },
        {
            projectName: "P02-ThisIsTheEnd",
            projectMembers: 23,
        }
    ];
    
    const tasks = [
        {
            name: "🚘 Design Experience Develop. for HID",
            dueDate: "Mar. 20, 2023",
        },
        {
            name: "📡 Dashboard Project, CAMRY",
            dueDate: "Mar. 20, 2023",
        },
        {
            name: "🔘 Suspension & System Project, General",
            dueDate: "Mar. 20, 2023",
        },
        {
            name: "🇰🇷 Korean Social Network Posting, Marketing",
            dueDate: "Mar. 20, 2023",
        },
        {
            name: "📡 Dashboard Project, Prius",
            dueDate: "Mar. 20, 2023",
        },
    ]
    
    const proposals = [
        {
            name: "Firing Inactive DAO WG Members and Council Members",
            status: "Active",
            proposedDate: "Mar. 16, 2023",
            totalVoted: 50,
            totalAddresses: 21,
            upVoted: 35,
            downVoted: 15,
        },
        {
            name: "Treasury Portfolio Adjustment",
            status: "Active",
            proposedDate: "Mar. 16, 2023",
            totalVoted: 30,
            totalAddresses: 30,
            upVoted: 25,
            downVoted: 5,
        },
        {
            name: "NFT NYC Partnership with Capsule NFT",
            status: "Executed",
            proposedDate: "Mar. 16, 2023",
            totalVoted: 50,
            totalAddresses: 21,
            upVoted: 35,
            downVoted: 15,
        },
        {
            name: "Extending the term of current multisig-signers",
            status: "Executed",
            proposedDate: "Mar. 16, 2023",
            totalVoted: 50,
            totalAddresses: 21,
            upVoted: 35,
            downVoted: 15,
        },
        {
            name: "Official Toyota logo usage at ‘Toyota Car Exhibition",
            status: "Not Reached",
            proposedDate: "Mar. 16, 2023",
            totalVoted: 50,
            totalAddresses: 21,
            upVoted: 35,
            downVoted: 15,
        },
    ]
    
    return (
        <div
            className={"container mx-auto flex flex-col mt-[24px]"}
        >
            <div
                className={"flex flex-col w-full space-y-[28px]"}
            >
                <div
                    className={"flex flex-col w-full space-y-[16px]"}
                >
                    <div
                        className={"flex flex-row items-center w-full justify-between"}
                    >
                        <div
                            className={"flex flex-row items-center space-x-[8px] py-[8px]"}
                        >
                            <img 
                                src={"/circle-profile.svg"}
                                style={{
                                    width: 28,
                                    height: 28,
                                }}
                            />
                            <p 
                                className={"text-[20px] leading-[25px] text-mono-500 font-bold"}
                            >
                                Duckee
                            </p>
                            <img 
                                src={"/down-triangle.svg"}
                            />
                        </div>
                        <button
                            className={"rounded-[4px] py-[8px] px-[20px] bg-[#567AF9] text-mono-white font-medium"}
                        >
                            Join
                        </button>
                    </div>
                    <div
                        className={"flex flex-col space-y-[16px]"}
                    >
                        <div
                            className={"flex flex-row space-x-[4px] items-center"}
                        >
                            <p
                                className={"text-[16px] leading-[20px] text-finegray font-medium"}
                            >
                                home
                            </p>
                            <img 
                                src={"/right-arrow.svg"}
                            />
                            <p
                                className={"text-[16px] leading-[20px] text-mono-500 font-medium"}
                            >
                                Duckee
                            </p>
                        </div>
                        <div
                            className={"flex flex-row space-x-[8px] items-center"}
                        >
                            <AmountLabel amount={23} label={"projects"} />
                            <AmountLabel amount={124} label={"members"} />
                        </div>
                        <p
                            className={"text-[16px] leading-[20px] text-mono-500"}
                        >
                            We enable communities to build and fund their shared needs. Help us build a regenerative crypto economic world.
                        </p>
                        <div
                            className={"flex flex-row space-x-[18px] items-center"}
                        >
                            <div
                                className={"flex flex-row space-x-[6px] items-center"}
                            >
                                <img
                                    src={"/ic-link.svg"}
                                />
                                <p
                                    className={"text-[14px] text-mono-gray"}
                                >
                                    duckee.xyz
                                </p>
                            </div>
                            <div
                                className={"flex flex-row space-x-[12px] items-center"}
                            >
                                <img
                                    src={"/ic_discord.svg"}
                                />
                                <img
                                    src={"/ic_twitter.svg"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={"flex flex-row items-center space-x-[36px] px-[16px] pb-[12px] border-b-mono-lightgray border-b"}
                >
                    <button
                        className={"text-[16px] leading-[20px] text-mono-500 font-semibold"}
                    >
                        Overview
                    </button>
                    <button
                        className={"text-[16px] leading-[20px] text-finegray font-regular"}
                    >
                        My Contributors
                    </button>
                </div>
            </div>
            <div
                className={"flex flex-row space-x-[20px] mt-[15px]"}
            >
                <div
                    className={"bg-mono-white rounded-[16px] w-[468px] border " +
                        "border-mono-lightgray py-[28px] space-y-[16px]"}
                >
                    <div
                        className={"flex flex-row items-center justify-between px-[24px]"}
                    >
                        <p
                            className={"text-[20px] leading-[25px] text-mono-500 font-medium"}
                        >
                            Projects
                        </p>
                        <button
                            className={"text-[14px] leading-[17px] text-blue-400 font-medium"}
                        >
                            Show all
                        </button>
                    </div>
                    {
                        projects.map((project, index) => (
                            <ProjectListItem
                                key={index}
                                projectName={project.projectName} 
                                projectMembers={project.projectMembers} 
                                isJoined={!index}
                            />
                        ))
                    }
                </div>
                <div
                    className={"bg-mono-white rounded-[16px] border " +
                        "border-mono-lightgray py-[28px] space-y-[16px] grow"}
                >
                    <div
                        className={"flex flex-row items-center justify-between px-[24px]"}
                    >
                        <p
                            className={"text-[20px] leading-[25px] text-mono-500 font-medium"}
                        >
                            Tasks
                        </p>
                        <button
                            className={"text-[14px] leading-[17px] text-blue-400 font-medium"}
                        >
                            Show all
                        </button>
                    </div>
                    {
                        tasks.map((task, index) => (
                            <TaskListItem
                                key={index}
                                taskName={task.name} 
                                dueDate={task.dueDate}
                                isAssigned={!index}
                            />
                        ))
                    }
                </div>
            </div>
            <div
                className={"mt-[18px] bg-mono-white rounded-[16px] border " +
                    "border-mono-lightgray py-[28px] space-y-[16px] grow"}
            >
                <div
                    className={"flex flex-row items-center justify-between px-[24px]"}
                >
                    <p
                        className={"text-[20px] leading-[25px] text-mono-500 font-medium"}
                    >
                        Proposal
                    </p>
                    <button
                        className={"text-[14px] leading-[17px] text-blue-400 font-medium"}
                    >
                        Show all
                    </button>
                </div>
                {
                    proposals.map((proposal, index) => (
                        <ProposalListItem
                            key={index}
                            name={proposal.name}
                            proposedDate={proposal.proposedDate}
                            status={proposal.status}
                            upVoted={proposal.upVoted}
                            downVoted={proposal.downVoted}
                            totalVoted={proposal.totalVoted}
                            totalAddresses={proposal.totalAddresses}
                        />
                    ))
                }
            </div>
        </div>
    )
}