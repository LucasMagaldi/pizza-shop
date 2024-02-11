import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpFormSchema = z.object({
    email: z.string().email(),
    restaurantName: z.string(),
    name: z.string(),
    phoneNumber: z.string(),
})

type SignUpForm = z.infer<typeof signUpFormSchema>

export function SignUp() {

    const { register, handleSubmit, formState: { isSubmitting} } = useForm<SignUpForm>()

    const navigate = useNavigate()

    async function hanldleSignUp(data: SignUpForm) {
        console.log(data)
        toast.success("Registered successfuly", {
            action: {
                label: "Login",
                onClick: () => navigate('/sign-in')
            }
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    return (
        <div className="p-8">
            <Button variant="link" asChild className="absolute right-8 top-8">
                <Link to='/sign-in'>Sign in</Link>
            </Button>
            <div className="flex w-[350-px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        Access Panel
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Be a membership and start your store
                    </p>
                </div>

                <form action="my-4" onSubmit={handleSubmit(hanldleSignUp)}>
                    <div className="my-2">
                        <Label htmlFor="restaurantName">restaurant name</Label>
                        <Input id="restaurantName" type="text" {...register("restaurantName")}/>
                    </div>
                    <div className="my-2">
                        <Label htmlFor="name">your name</Label>
                        <Input id="name" type="text" {...register("name")}/>
                    </div>
                    <div className="my-2">
                        <Label htmlFor="email">your e-mail address</Label>
                        <Input id="email" type="email" {...register("email")}/>
                    </div>
                    <div className="my-2">
                        <Label htmlFor="phoneNumber">phone number</Label>
                        <Input id="phoneNumber" type="phone" {...register("phoneNumber")}/>
                    </div>

                    <Button disabled={isSubmitting} className="w-full mt-6" type="submit">
                        Finish profile
                    </Button>
                </form>
            </div>
        </div>
    )
}