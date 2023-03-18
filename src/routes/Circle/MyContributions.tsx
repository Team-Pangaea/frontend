import React from "react";
import {ReviewListItem} from "src/routes/components/ReviewListItem";
import {ContributionListItem} from "src/routes/components/ContributionListItem";
import {CircleTabs} from "src/routes/Circle/CircleTabs";

interface MyContributionsProps {}

export const CircleMyContributions = ({}: MyContributionsProps) => {
    const reviews = [
        {
            createdAt: "Mar 15. 2023",
            username: "Chelsea Lee",
            isOwner: true,
            role: "Core-Contributor",
            description: "We enable communities to build and fund thei  shared needs. Help us build a regenerative crypto.",
        },
        {
            createdAt: "Mar 15. 2023",
            username: "Chelsea Lee",
            isOwner: false,
            role: "Contributor",
            description: "We enable communities to build and fund thei  shared needs. Help us build a regenerative crypto.",
        },
        {
            createdAt: "Mar 15. 2023",
            username: "Manohar Lal Khattar",
            isOwner: false,
            role: "Contributor",
            description: "We enable communities to build and fund thei  shared needs. Help us build a regenerative crypto.",
        },
    ]
    
    const contributions = [
        {
            name: "🚘 Design Experience Develop. for HID",
            status: "In Progress",
        },
        {
            name: "🔘 Suspension & System Project, General",
            status: "Done",
        },
        {
            name: "🇰🇷 Korean Social Network Posting, Marketing",
            status: "Done",
        },
    ]
    
    return (
        <>
            <CircleTabs />
            <div
                className={"flex flex-row space-x-[20px] mt-[18px] items-start"}
            >
                <div
                    className={"flex flex-col space-y-[18px] grow"}
                >
                    <div
                        className={"flex flex-row space-x-[20px] h-[243px]"}
                    >
                        <div
                            className={"bg-mono-white rounded-[16px] w-[371px] border " +
                                "border-mono-lightgray py-[28px] px-[24px] space-y-[16px]"}
                        >
                            <p
                                className={"text-[20px] leading-[25px] text-mono-500 font-bold"}
                            >
                                Current Cycle
                            </p>
                            <div
                                className={"flex flex-row py-[8px] items-center space-x-[12px]"}
                            >
                                <p
                                    className={"text-[24px] leading-[30px] text-mono-500 font-medium"}
                                >
                                    Mar 10 - 17
                                </p>
                                <p
                                    className={"text-[14px] leading-[18px] px-[16px] " +
                                        "py-[4px] text-red-primary font-semibold bg-red-secondary rounded-[412px]"}
                                >
                                    D-3
                                </p>
                            </div>
                            <p
                                className={"text-charcoal text-[16px] leading-[20px] py-[8px]"}
                            >
                                We enable communities to build and fund their shared needs. Help us build a regenerative crypto economic world.
                            </p>
                        </div>
                        <div
                            className={"bg-mono-white rounded-[16px] grow border " +
                                "border-mono-lightgray py-[28px] space-y-[16px]"}
                        >
                            <div
                                className={"flex flex-row items-center justify-between px-[24px]"}
                            >
                                <p
                                    className={"text-[20px] leading-[25px] text-mono-500 font-bold"}
                                >
                                    My Tasks
                                </p>
                                <button
                                    className={"text-[14px] leading-[17px] text-blue-400 font-medium"}
                                >
                                    Show all
                                </button>
                            </div>
                            {
                                contributions.map((contribution, index) => (
                                    <ContributionListItem
                                        name={contribution.name}
                                        status={contribution.status}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className={"bg-mono-white rounded-[16px] border " +
                            "border-mono-lightgray py-[28px] space-y-[16px]"}
                    >
                        <div
                            className={"flex flex-row items-center justify-between px-[24px]"}
                        >
                            <p
                                className={"text-[20px] leading-[25px] text-mono-500 font-bold"}
                            >
                                Received Review
                            </p>
                        </div>
                        {
                            reviews.map((review, index) => (
                                <ReviewListItem 
                                    createdAt={review.createdAt} 
                                    username={review.username} 
                                    isOwner={review.isOwner} 
                                    role={review.role} 
                                    description={review.description} 
                                />
                            ))
                        }
                    </div>
                </div>
                <div
                    className={"flex flex-col space-y-[16px] pt-[28px] pb-[20px] px-[24px] bg-charcoal rounded-[16px]"}
                >
                    <p
                        className={"text-[20px] leading-[25px] text-mono-white font-bold"}
                    >
                        Allocate Your Remaining
                    </p>
                    <div
                        className={"flex flex-row space-x-[4px] py-[8px]"}
                    >
                        <img 
                            src={"/toyota-red-profile.svg"}
                        />
                        <p
                            className={"text-[24px] leading-[30px] text-mono-white font-bold"}
                        >
                            100
                        </p>
                        <p
                            className={"text-[24px] leading-[30px] text-finegray font-medium"}
                        >
                            Points
                        </p>
                    </div>
                    <button
                        className={"rounded-[8px] py-[8px] px-[20px] bg-blue-400 text-mono-white font-semibold"}
                    >
                        Start peer review
                    </button>
                    <button
                        className={"underline text-mono-white text-[14px] leading-[20px] px-[12px] py-[8px]"}
                    >
                        Go to Claim My Points
                    </button>
                </div>
            </div>
        </>
    )
}

