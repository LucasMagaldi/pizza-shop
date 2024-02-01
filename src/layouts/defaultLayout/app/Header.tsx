import { Outlet } from "react-router-dom";

export function HeaderApp () {
    return (
        <div>
            <h1>Header App</h1>
            <Outlet />
        </div>
    )
}