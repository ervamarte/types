import { ID, Slug, Active } from './generic';
export declare type CouponType = 'PERCENTAGE' | 'MONETARY';
export interface Coupon {
    id: ID;
    slug: Slug;
    description: string;
    discount: number;
    type: CouponType;
    active: Active;
}
