import { Separator } from "@radix-ui/react-separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";

export function HeaderApp() {

    const pathname = useLocation()

    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <Pizza />
                <Separator orientation="vertical" className="h-6"/>
                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to='/'>
                        <Home className="h-4 w-4"/>
                        Home
                    </NavLink>
                    <NavLink to='/orders'>
                        <UtensilsCrossed className="h-4 w-4"/>
                        Orders
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}