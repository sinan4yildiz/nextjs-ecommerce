import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
   title?: string
   description?: string
   robots?: string
   children?: ReactNode
}

const SEO = ({ title, description, robots, children }: Props) => {
   return (
      <Head>
         <title key="title">{title}</title>
         <meta key="description" name="description" content={description}/>
         <meta key="robots" name="robots" content={robots ?? 'index,follow'}/>
         {children}
      </Head>
   )
}

export default SEO