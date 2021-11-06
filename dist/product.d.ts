import { Category } from './category';
import { SEO } from './seo';
import { Volume } from './logistic';
import { ID, Slug } from './generic';
import { Seller } from './seller';
import { Brand } from './brand';
export declare const PRODUCT_TYPE_MAIN = "main";
export declare const PRODUCT_TYPE_VARIANT = "variant";
export declare type ProductVolume = Volume;
export declare type ProductSEO = SEO;
export declare type ProductTax = {
    gtin: string;
    ncm: string;
    cest: string;
    origin: number;
};
export declare type ProductType = typeof PRODUCT_TYPE_MAIN | typeof PRODUCT_TYPE_VARIANT;
export interface ProductBrand {
    slug: Slug;
    name: string;
}
export declare type ProductImage = {
    url: string;
};
export interface ProductPrice {
    price: {
        retail: number;
        sale: number;
        insurance: number;
    };
}
export interface ProductDetail {
    label: string;
    value: string;
}
export interface Product extends ProductPrice {
    id: ID;
    sku: string;
    name: string;
    slug: Slug;
    type: ProductType;
    short_description: string;
    description: string;
    details: ProductDetail[];
    active: boolean;
    image: {
        url: string;
    };
    images: ProductImage[];
    category: Category;
    volume: ProductVolume;
    seo: ProductSEO;
    seller: Seller;
    brand?: Brand;
    categories: string[];
    stock: number;
    variants?: ProductVariant[];
    profile?: ProductProfile;
    tax: ProductTax;
}
export declare type ProductVariant = Pick<Product, 'id' | 'name' | 'sku' | 'type' | 'active' | 'image' | 'image' | 'volume'>;
export declare type ProductList = Pick<Product, 'id' | 'sku' | 'name' | 'slug' | 'price' | 'image' | 'stock'>;
export declare type ProductArray = ProductList[];
export interface ProductProfile {
    bitterness: number;
    origin: string;
    gender: 'Ilex paraguariensis' | 'Ilex brasiliensis' | 'Ilex vomitoria' | 'Ilex guayusa';
    temp: string;
    color: string;
    milling: 'grossa' | 'fina' | 'média';
    consumptionSuggestion: 'quente' | 'fria';
    organic: boolean;
    sugar: boolean;
}
