import { login, register } from "@/services/auth.services"
import { useMutation } from "@tanstack/react-query"


export const useLogin = () => {
    const result = useMutation({
        mutationFn: login,
    })

    return result
}

export const useRegister = () => {
    const result = useMutation({
        mutationFn: register,
    })
    return result
}