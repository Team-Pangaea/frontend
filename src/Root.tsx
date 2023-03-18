import React from "react";
import {Navigate, Outlet } from "react-router-dom";
import {Header} from "src/components/Header";
import {useAccountStore} from "src/modules/AccountStore";

export const Root = () => {
    // const account = useAccountStore(state => state.account);
    //
    //
    //
    // if(!account) {
    //     return <Navigate to={"/"} />
    // }
    
    return (
        <div
            className={"w-full h-screen flex flex-col"}
        >
            <Header />
            <Outlet />
        </div>
    )
}