import {
   Account,
   Address,
   Cart,
   Category,
   Contact,
   Content,
   Customer,
   Newsletter,
   Order,
   Payment,
   PaymentMethod,
   Product,
   Route,
   ShippingMethod,
   Sitemap,
   System,
   Wishlist
} from '@lib/api/bundles'
import { APIWrapperI } from '@lib/api/types'

const API: APIWrapperI = {
   Account: Account,
   Address: Address,
   Cart: Cart,
   Category: Category,
   Contact: Contact,
   Content: Content,
   Customer: Customer,
   Newsletter: Newsletter,
   Order: Order,
   Payment: Payment,
   PaymentMethod: PaymentMethod,
   Product: Product,
   Route: Route,
   ShippingMethod: ShippingMethod,
   Sitemap: Sitemap,
   System: System,
   Wishlist: Wishlist
}

export default API