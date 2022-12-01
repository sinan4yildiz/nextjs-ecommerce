import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
   render() {
      return (
         <Html>
            <Head/>
            <body className="transition-off">
            <Main/>
            <NextScript/>
            </body>
         </Html>
      )
   }
}

export default AppDocument
