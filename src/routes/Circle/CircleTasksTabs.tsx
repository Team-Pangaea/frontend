import React from "react";
import {useSearchParams} from "react-router-dom";
import {CircleTabsComponent} from "src/routes/components/CircleTabsComponent";

export const CircleTasksTabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const activeName = searchParams.get("activeName") || "current-tasks";
    
    const handleClick = (activeName: string) => setSearchParams({activeName});
    
    const tabItems = [
        {
            label: "Current Tasks",
            value: "current-tasks",
        },
        {
            label: "Ended Cycle's Task",
            value: "ended-cycles-tasks",
        },
        {
            label: "Claimed Tasks",
            value: "claimed-tasks",
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