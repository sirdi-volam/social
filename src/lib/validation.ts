import { z } from "zod"

const requiredString = z.string().trim().min(1, "Required")

export const signUpSchema = z.object({
  email: requiredString.email("Неверный адрес электронной почты"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Только буквы, числа, - и _ разрешены"
  ),
  password: requiredString.min(8, "Должно быть не менее 8 символов")
})

export type SignUpValues = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
})

export type LoginValues = z.infer<typeof loginSchema>