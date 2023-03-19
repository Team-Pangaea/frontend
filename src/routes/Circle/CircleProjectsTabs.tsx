import React from "react";
import {useSearchParams} from "react-router-dom";
import {CircleTabsComponent} from "src/routes/components/CircleTabsComponent";

export const CircleProjectsTabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeName = searchParams.get("activeName") || "all";
    
    const handleClick = (activeName: string) => setSearchParams({activeName});
    
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