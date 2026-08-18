import z from "zod";


export const sendOtpSchema = z.object({
    phone: z.string().trim().regex(/^09\d{9}$/, {message: "the mobile number is invalid"})
})


export const verifyOtpSchema = z.object({
    phone: z.string().trim().regex(/^09\d{9}$/, {message: "the mobile number is invalid"}),

    otp: z.string().trim().length(4, {message: "the code is invalid"})
})