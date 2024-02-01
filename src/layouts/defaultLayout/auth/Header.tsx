import { Outlet } from "react-router-dom";

export function HeaderAuth () {
    return (
        <div>
            <h1>Header App</h1>
            <Outlet />
        </div>
    )
}