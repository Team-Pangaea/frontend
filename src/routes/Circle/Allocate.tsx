import React, {useState} from "react";
import {PeerReviewListItem} from "src/routes/components/PeerReviewListItem";
import isEqual from "lodash/isEqual";

export const CircleAllocate = () => {
    const peerReviews = [
        {
            username: "Chelsea Lee",
            isOwner: true,
            role: "Core-Contributor",
            contributionCount: 3,
            point: 1,
        },
        {
            username: "Chelsea Lee",
            isOwner: true,
            role: "Core-Contributor",
            contributionCount: 3,
            point: 1,
        },
        {
            username: "Chelsea Lee",
            isOwner: true,
            role: "Core-Contributor",
            contributionCount: 3,
            point: 1,
        },{
            username: "Chelsea Lee",
            isOwner: true,
            role: "Core-Contributor",
            contributionCount: 3,
            point: 1,
        },
        {
            username: "Chelsea Lee",
            isOwner: true,
            role: "Core-Contributor",
            contributionCount: 3,
            point: 1,
        },
        {
            username: "Chelsea Lee",
            isOwner: true,
            role: "Core-Contributor",
            contributionCount: 3,
            point: 1,
        },
    ];
    
    const defaultPoints = peerReviews.map((peerReview) => peerReview.point);
    
    const [points, setPoints] = useState(defaultPoints);
    
    const handlePoint = (index: number) => (value: number) => {
        const newPoints = [...points];
        newPoints[index] = isNaN(value) ? 0 : value;
        
        if(newPoints[index] < 0) {
            newPoints[index] = 0;
        }
        
        setPoints(newPoints);
    }
    
    return (
        <div
            className={"flex flex-row space-x-[20px] mt-[18px] items-start"}
        >
            <div
                className={"grow bg-mono-white rounded-[16px] border " +
                    "border-mono-lightgray py-[16px] space-y-[16px]"}
            >
                {
                    peerReviews.map((peerReview, index) => (
                        <PeerReviewListItem 
                            username={peerReview.username} 
                            contributionCount={peerReview.contributionCount} 
                            role={peerReview.role}
                            isOwner={peerReview.isOwner}
                            point={points[index]}
                            setPoint={handlePoint(index)}
                        />
                    ))
                }
            </div>
            <div
                className={"flex flex-col space-y-[16px] w-[273px] pt-[28px] pb-[20px] px-[24px] bg-charcoal rounded-[16px]"}
            >
                <p
                    className={"text-[20px] leading-[25px] text-mono-white font-bold"}
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
                        className={"text-[24px] leading-[30px] text-mono-white font-bold"}
                    >
                        {points.reduce((acc, curr) => acc + curr, 0)} / 100
                    </p>
                    <p
                        className={"text-[24px] leading-[30px] text-finegray font-medium"}
                    >
                        Points
                    </p>
                </div>
                <button
                    className={`
                    rounded-[8px] py-[8px] px-[20px] font-semibold text-center
                    ${!isEqual(points, peerReviews.map(peerReview => peerReview.point)) ? 
                        "bg-blue-400 text-mono-white" : "bg-mono-gray text-finegray"} 
                    `}
                >
                    Confirm
                </button>
                <button
                    className={"underline text-mono-white text-[14px] leading-[20px] px-[12px] py-[8px]"}
                >
                    Go to Claim My Points
                </button>
            </div>
        </div>
    )
}