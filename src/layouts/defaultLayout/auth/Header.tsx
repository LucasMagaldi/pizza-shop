import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function HeaderAuth () {
    return (
        <div className='grid min-h-screen grid-cols-2'>
            <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 pb-4 text-muted-foreground">
                <div className="flex items-center gap-3 text-lg text-foreground">
                    <Pizza className="h-5 w-5"/>
                    <span className="font-semibold">Pizza.Shop</span>
                </div>
                <footer className="text-sm">
                    Developed By Lucas S. Magaldi; - Pizza.shop {new Date().getFullYear()}
                </footer>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Outlet />
            </div>
            
        </div>
    )
}