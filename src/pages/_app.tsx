import { SEO } from '@components/common'
import { StandardLayout } from '@components/ui/layouts'
import { AppProvider } from '@contexts/app/provider'
import { UIProvider } from '@contexts/ui/provider'
import '@styles/global.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
   const Layout = (Component as any).Layout || StandardLayout

   useEffect(() => {
      document.body.classList?.remove('transition-off')
   }, [])

   return (
      <AppProvider>
         <SEO>
            <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1"/>
            {/*<link rel="manifest" href="/site.webmanifest" key="site-manifest"/>*/}
         </SEO>
         <UIProvider>
            <Layout pageProps={pageProps}>
               <Component {...pageProps} />
            </Layout>
         </UIProvider>
      </AppProvider>
   )
}

export default App