import * as dotenv from 'dotenv'

const envFile = dotenv.config()

if (envFile.error)
    throw new Error("⚠️  Couldn't find .env file  ⚠️")

export const apiName = process.env.NAME ?? ''
export const hostName = process.env.HOST ?? ''
export const port = process.env.PORT ?? ''
export const corsUrl = process.env.CORS_URL ?? ''

export const api = {
    prefix: '/api/'
}