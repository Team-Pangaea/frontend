import React from "react";
import {useMatch, useNavigate} from "react-router-dom";

export interface TabItem {
    label: string;
    value: string;
}

interface CircleTabsComponentProps {
    tabItems: TabItem[];
    onClick: (activeName: string) => void;
    activeName?: string;
}

export const CircleTabsComponent = ({tabItems, onClick, activeName}: CircleTabsComponentProps) => {
    return (
        <div
            className={"mt-[28px] flex flex-row items-center space-x-[36px] px-[16px] pb-[12px] border-b-mono-lightgray border-b"}
        >
            {
                tabItems.map((tabItem) => (
                    <button
                        className={`text-[16px] leading-[20px] ${activeName === tabItem.value ? "text-mono-500 font-semibold" : "text-finegray font-regular"}`}
                        onClick={() => onClick(tabItem.value)}
                    >
                        {tabItem.label}
                    </button>
                ))
            }
        </div>
    )
}