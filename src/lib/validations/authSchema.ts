import { z } from 'zod'

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[^\s]{8,20}$/

const passwordRule = z
  .string()
  .transform((v) => v.trim())
  .pipe(
    z
      .string()
      .regex(
        passwordRegex,
        '비밀번호는 8~20자, 대/소문자, 숫자, 특수문자를 포함해야 합니다.'
      )
  )

export const signupSchema = z
  .object({
    email: z.string().email('이메일 형식이 올바르지않습니다.'),
    password: passwordRule,
    passwordConfirm: z.string().transform((v) => v.trim()),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  })

export type SignupFormValues = z.infer<typeof signupSchema>

export const loginSchema = z.object({
  email: z.string().min(1, '이메일을 입력해 주세요.'),
  password: z.string().min(1, '비밀번호를 입력해 주세요.'),
})

export type LoginformValues = z.infer<typeof loginSchema>
