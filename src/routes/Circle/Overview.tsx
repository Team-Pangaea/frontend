import React, {useEffect} from "react";
import {ProjectListItem} from "src/routes/components/ProjectListItem";
import {TaskListItem} from "src/routes/components/TaskListItem";
import {ProposalListItem} from "src/routes/components/ProposalListItem";
import {CircleTabs} from "src/routes/Circle/CircleTabs";
import {useNavigate} from "react-router-dom";
import {useAccountStore} from "src/modules/AccountStore";
import {MAX_CALL_WEIGHT, PROOFSIZE, storageDepositLimit} from "src/App";
import {WeightV2} from "@polkadot/types/interfaces";
import {Project, useDAOStore} from "src/modules/DAOStore";
import { hexToString } from "@polkadot/util";

interface CircleOverviewProps {
    
}
 
export const CircleOverview = ({}: CircleOverviewProps) => {
    const navigate = useNavigate();
    
    const daoContract = useAccountStore(state => state.daoContract);
    const account = useAccountStore(state => state.account);
    
    const api = useAccountStore(state => state.api);
    
    const dprojects = useDAOStore(state => state.projects);
    const setProject = useDAOStore(state => state.setProject);

    const dtasks = useDAOStore(state => state.tasks);
    const setTask = useDAOStore(state => state.setTask);
    
    const getProjects = async () => {
        const {output} = await daoContract!.query["toyotaDao::getNumberOfProjects"](account!.address, {
            gasLimit: api?.registry.createType('WeightV2', {
                refTime: MAX_CALL_WEIGHT,
                proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
        });

        const obj = JSON.parse(output!.toString());
        [...new Array(obj.ok)].slice(0, 5).map(async (_, i) => {
            daoContract!.query["toyotaDao::getProject"](account!.address, {
                gasLimit: api?.registry.createType('WeightV2', {
                    refTime: MAX_CALL_WEIGHT,
                    proofSize: PROOFSIZE,
                }) as WeightV2,
                storageDepositLimit,
            }, i + 1).then(({output}) => {
                const obj = JSON.parse(output!.toString());
                setProject(i + 1,{
                    ...obj.ok,
                    id: i+1,
                    description: hexToString(obj.ok.description),
                } as Project);
            });

            daoContract!.query["toyotaDao::getProjectMembers"](account!.address, {
                gasLimit: api?.registry.createType('WeightV2', {
                    refTime: MAX_CALL_WEIGHT,
                    proofSize: PROOFSIZE,
                }) as WeightV2,
                storageDepositLimit,
            }, i + 1).then(({output, result}) => {
                console.log(output, result.toHuman());
                const obj = JSON.parse(output!.toString());
                console.log(obj.ok);
                setProject(i + 1, {
                    members: obj.ok,
                });
            });
        });
    }

    const getTasks = async () => {
        const {output} = await daoContract!.query["toyotaDao::getNumberOfTasks"](account!.address, {
            gasLimit: api?.registry.createType('WeightV2', {
                refTime: MAX_CALL_WEIGHT,
                proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
        });

        const obj = JSON.parse(output!.toString());
        [...new Array(obj.ok)].slice(0, 5).map(async (_, i) => {
            daoContract!.query["toyotaDao::getTask"](account!.address, {
                gasLimit: api?.registry.createType('WeightV2', {
                    refTime: MAX_CALL_WEIGHT,
                    proofSize: PROOFSIZE,
                }) as WeightV2,
                storageDepositLimit,
            }, i + 1).then(({output}) => {
                const obj = JSON.parse(output!.toString());
                setTask(i + 1,{
                    ...obj.ok,
                    id: i+1,
                    description: hexToString(obj.ok.description),
                });
            });
        });
    }
    
    console.log(dtasks);
    
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
    
    useEffect(() => {
        getProjects();
        getTasks();
    }, []);
    
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
                            onClick={() => navigate("projects")}
                        >
                            Show all
                        </button>
                    </div>
                    {
                        Object.values(dprojects).map((project, index) => (
                            <ProjectListItem
                                key={index}
                                projectName={project.description || "Project Name"}
                                projectMembers={project.members?.length || 0}
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
                            onClick={() => navigate("tasks")}
                        >
                            Show all
                        </button>
                    </div>
                    {
                        Object.values(dtasks).map((task, index) => (
                            <TaskListItem
                                key={index}
                                taskName={`Task-${task.id}`}
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