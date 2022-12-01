import { AccountI } from '@lib/api/bundles/Account'
import { AddressI } from '@lib/api/bundles/Address'
import { CartI } from '@lib/api/bundles/Cart'
import { CategoryI } from '@lib/api/bundles/Category'
import { ContactI } from '@lib/api/bundles/Contact'
import { ContentI } from '@lib/api/bundles/Content'
import { CustomerI } from '@lib/api/bundles/Customer'
import { NewsletterI } from '@lib/api/bundles/Newsletter'
import { OrderI } from '@lib/api/bundles/Order'
import { PaymentI } from '@lib/api/bundles/Payment'
import { PaymentMethodI } from '@lib/api/bundles/PaymentMethod'
import { ProductI } from '@lib/api/bundles/Product'
import { RouteI } from '@lib/api/bundles/Route'
import { ShippingMethodI } from '@lib/api/bundles/ShippingMethod'
import { SitemapI } from '@lib/api/bundles/Sitemap'
import { SystemI } from '@lib/api/bundles/System'
import { WishlistI } from '@lib/api/bundles/Wishlist'

export interface APIWrapperI {
   Account: AccountI,
   Address: AddressI,
   Cart: CartI,
   Category: CategoryI,
   Contact: ContactI,
   Content: ContentI,
   Customer: CustomerI,
   Newsletter: NewsletterI,
   Order: OrderI,
   Payment: PaymentI,
   PaymentMethod: PaymentMethodI,
   Product: ProductI,
   Route: RouteI,
   ShippingMethod: ShippingMethodI,
   Sitemap: SitemapI,
   System: SystemI,
   Wishlist: WishlistI,
}

export interface MethodArgsI {
   segments?: {
      [key: string]: any
   },
   options?: RequestInit | {
      body?: BodyInit | object
   }
}

export interface RequestArgsI extends MethodArgsI {
   endpoint: {
      url: string,
      method: 'GET' | 'POST' | 'PATCH' | 'DELETE'
   }
}

export interface APIRequestI {
   ({ endpoint, segments, options }: RequestArgsI): Promise<any>
}