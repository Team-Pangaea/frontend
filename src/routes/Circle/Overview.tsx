import React from "react";
import {ProjectListItem} from "src/routes/components/ProjectListItem";
import {TaskListItem} from "src/routes/components/TaskListItem";
import {ProposalListItem} from "src/routes/components/ProposalListItem";
import {CircleTabs} from "src/routes/Circle/CircleTabs";
import {useNavigate} from "react-router-dom";

interface CircleOverviewProps {
    
}
 
export const CircleOverview = ({}: CircleOverviewProps) => {
    const navigate = useNavigate();
    
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
        <>
            <CircleTabs />
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
                            onClick={() => navigate("projects/all")}
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
                            onClick={() => navigate("tasks/current-tasks")}
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
        </>
    )
}