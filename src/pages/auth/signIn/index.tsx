import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
    return (
        <div className="p-84">
            <div className="flex w-[350-px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        Access Panel
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Follow your sells in our dashboard
                    </p>
                </div>

                <form action="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">your e-mail address</Label>
                        <Input id="email" type="email"/>
                    </div>

                    <Button className="w-full mt-6" type="submit">
                        Access painel
                    </Button>
                </form>
            </div>
        </div>
    )
}