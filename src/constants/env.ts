export type ENV = {
   [key: string]: any
}

const ENV: ENV = {
   API_BASE: process.env.NEXT_PUBLIC_API_BASE,
   API_ACCESS_KEY: process.env.NEXT_PUBLIC_API_ACCESS_KEY,
   API_SALES_CHANNEL_ID: process.env.NEXT_PUBLIC_API_SALES_CHANNEL_ID,
   API_CACHE: process.env.API_CACHE,

   REDIS_URL: process.env.REDIS_URL,
   REDIS_TTL: process.env.REDIS_TTL,
   REDIS_PREFIX: process.env.REDIS_PREFIX
}

export default ENV