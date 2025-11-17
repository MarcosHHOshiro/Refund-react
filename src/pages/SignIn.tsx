import { useActionState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { z, ZodError } from "zod"

const signInScheme = z.object({
    email: z.email({ message: "E-mail inválido" }),
    password: z.string().trim().min(1, { message: "Informe a senha" })
})

export function SignIn() {

    const [state, formAction, isLoading] = useActionState(signIn, null)

    async function signIn(prevState: any, formData: FormData) {
        try {
            const data = signInScheme.parse({
                email: formData.get("email"),
                password: formData.get("password")
            })
        } catch (error) {
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
        }

        console.log(data)
    }


    return (
        <form action={formAction} className="w-full flex flex-col gap-4" >
            <Input
                name="email"
                required
                legend="E-mail"
                type="email"
                placeholder="seu@Email.com"
            // onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                name="password"
                required
                legend="Senha"
                type="password"
                placeholder="senha"
            // onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" isLoading={isLoading}>
                Entrar
            </Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">
                Criar conta
            </a>
        </form>
    )
}