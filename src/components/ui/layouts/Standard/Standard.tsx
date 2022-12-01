import { Footer, Header } from '@components/ui/sections'
import { ReactElement } from 'react'

interface Props {
   children: ReactElement,
}

const Standard = ({ children }: Props) => {
   return (
      <>
         <Header/>
         <h1>Standard Layout</h1>
         <main>{children}</main>
         <Footer/>
      </>
   )
}

export default Standard