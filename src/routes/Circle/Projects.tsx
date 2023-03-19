import React from "react";
import {ProjectListItem} from "src/routes/components/ProjectListItem";
import {CircleProjectsTabs} from "src/routes/Circle/CircleProjectsTabs";

export const CircleProjects = () => {
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
        },
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
        },
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
        },
    ];
    
    return (
        <>
            <CircleProjectsTabs />
            <div
                className={"bg-mono-white rounded-[16px] w-full border " +
                    "border-mono-lightgray py-[28px] space-y-[16px] mt-[15px]"}
            >
                <div
                    className={"flex flex-row items-center justify-between px-[24px]"}
                >
                    <p
                        className={"text-[20px] leading-[25px] text-mono-500 font-medium"}
                    >
                        Projects
                    </p>
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
        </>
    )
}