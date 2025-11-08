import { useState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        console.log(name, email, password, confirmPassword)
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4" >
            <Input
                required
                legend="Name"
                type="text"
                placeholder="Seu nome"
                onChange={(e) => setName(e.target.value)}
            />

            <Input
                required
                legend="E-mail"
                type="email"
                placeholder="seu@Email.com"
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                required
                legend="Senha"
                type="password"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
            />

            <Input
                required
                legend="Confirme a senha"
                type="password"
                placeholder="senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button type="submit" isLoading={isLoading}>
                Criar conta
            </Button>

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">
                Já tenho uma conta
            </a>
        </form>
    )
}