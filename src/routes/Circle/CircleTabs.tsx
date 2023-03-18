import React from "react";
import {useMatch, useNavigate} from "react-router-dom";
import { CircleTabsComponent } from "../components/CircleTabsComponent";

export const CircleTabs = () => {
    const navigate = useNavigate();
    const match = useMatch("/circle/:activeName");
    const activeName = match?.params.activeName;
    
    const handleClick = (activeName: string) => navigate(`/circle/${activeName}`);
    
    const tabItems = [
        {
            label: "Overview",
            value: "overview",
        },
        {
            label: "My Contributors",
            value: "my-contributions",
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