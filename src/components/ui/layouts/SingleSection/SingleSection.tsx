import { Footer, Header } from '@components/ui/sections'
import { ReactElement } from 'react'

interface Props {
   children: ReactElement,
}

const SingleSection = ({ children }: Props) => {
   return (
      <>
         <Header/>
         <h1>Single Section Layout</h1>
         <main>{children}</main>
         <Footer/>
      </>
   )
}

export default SingleSection
