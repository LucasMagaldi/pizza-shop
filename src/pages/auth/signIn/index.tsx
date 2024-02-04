import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const signInFormSchema = z.object({
    email: z.string().email(),
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SignIn() {

    const { register, handleSubmit, formState: { isSubmitting} } = useForm<SignInForm>()

    async function hanldleSignIn(data: SignInForm) {
        console.log(data)
        toast.success("The link was send to your e-mail", {
            action: {
                label: "Resend",
                onClick: () => hanldleSignIn(data)
            }
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

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

                <form action="my-4" onSubmit={handleSubmit(hanldleSignIn)}>
                    <div className="my-2">
                        <Label htmlFor="email">your e-mail address</Label>
                        <Input id="email" type="email" {...register("email")}/>
                    </div>

                    <Button disabled={isSubmitting} className="w-full mt-6" type="submit">
                        Access painel
                    </Button>
                </form>
            </div>
        </div>
    )
}