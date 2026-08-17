import { toast } from "sonner"
import type z from "zod"


export const validate = (schema: z.ZodType, value: unknown) => {
    const result = schema.safeParse(value)

    if(!result.success){
        
        
        toast.error(result.error.issues[0].message)
        return false
    }

    return true
}