import {z} from 'zod';
import {config} from 'dotenv';

config();

const envSchema = z.object({
    PORT: z.string().transform(Number).default(3000),
    NODE_ENV: z.enum(['development','production','test']),
})

export const env = envSchema.parse(process.env);