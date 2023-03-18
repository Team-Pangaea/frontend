import React from "react";
import {useMatch, useNavigate} from "react-router-dom";
import {CircleTabsComponent} from "src/routes/components/CircleTabsComponent";

export const CircleProjectsTabs = () => {
    const navigate = useNavigate();
    const match = useMatch("/circle/overview/tasks/:activeName");
    const activeName = match?.params.activeName;
    
    const handleClick = (activeName: string) => navigate(`/circle/overview/tasks/${activeName}`);
    
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