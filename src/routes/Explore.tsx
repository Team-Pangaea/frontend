import React from "react";
import {CircleCard} from "src/routes/components/CircleCard";

export const Explore = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url(/explore-background.svg)"
                }}
                className={`min-h-[200px] w-full ` +
                    "flex flex-col items-center justify-center bg-cover"}
            >
                <p
                    className={"text-[36px] leading-[48px] text-mono-white text-center font-bold"}
                >
                    Welcome,<br />
                    Explore Circles within Pangaea
                </p>
            </div>
            <div
                className={"container mx-auto flex flex-col"}
            >
                
                <div
                    className={"mt-[36px] grid grid-cols-3 gap-[19px]"}
                >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                        <CircleCard />
                    ))
                }
                </div>
            </div>
        </>
    );
}