import React from "react";
import {useSearchParams} from "react-router-dom";
import {CircleTabsComponent} from "src/routes/components/CircleTabsComponent";

export const CircleUserAllocateTabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const activeName = searchParams.get("activeName") || "tasks";

    const handleClick = (activeName: string) => setSearchParams({activeName});

    const tabItems = [
        {
            label: "Tasks",
            value: "tasks",
        },
        {
            label: "Proposals",
            value: "proposals",
        },
        {
            label: "Reviews from Members",
            value: "reviews-from-members",
        }
    ]

    return (
        <CircleTabsComponent
            tabItems={tabItems}
            onClick={handleClick}
            activeName={activeName}
        />
    )
}