import React from "react";
import {useMatch, useNavigate} from "react-router-dom";
import {CircleTabsComponent} from "src/routes/components/CircleTabsComponent";

export const CircleProjectsTabs = () => {
    const navigate = useNavigate();
    const match = useMatch("/circle/overview/projects/:activeName");
    const activeName = match?.params.activeName;
    
    const handleClick = (activeName: string) => navigate(`/circle/overview/projects/${activeName}`);
    
    const tabItems = [
        {
            label: "All",
            value: "all",
        },
        {
            label: "Projects I'm in",
            value: "projects-im-in",
        },
        {
            label: "Projects I'm not in",
            value: "projects-im-not-in",
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