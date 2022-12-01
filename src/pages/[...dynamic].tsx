import { Routes } from '@constants/routes'
import API from '@lib/api'
import { trimLeft } from '@lib/utils'
import Error404 from '@pages/404'
import Category from '@pages/category'
import Page from '@pages/page'
import Product from '@pages/product'

export async function getServerSideProps(context: any) {
   const seoUrl = await API.Route.urls({
      options: {
         body: {
            limit: 1,
            filter: [{
               'type': 'equals',
               'field': 'seoPathInfo',
               'value': trimLeft(context.resolvedUrl, '/')
            }]
         }
      }
   })

   if (!seoUrl?.total) {
      return {
         notFound: true
      }
   }

   return {
      props: {
         seoUrl: seoUrl?.elements[0]
      }
   }
}

interface Props {
   seoUrl: {
      routeName: Routes
   }
}

const Dynamic = ({ seoUrl }: Props) => {
   let View

   switch (seoUrl.routeName) {
      case Routes.PRODUCT:
         View = Product
         break

      case Routes.CATEGORY:
         View = Category
         break

      case Routes.PAGE:
         View = Page
         break

      default:
         View = Error404
   }

   return (<View seoUrl={seoUrl}/>)
}

export default Dynamic