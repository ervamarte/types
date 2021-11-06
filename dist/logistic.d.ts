export interface Volume {
    width: number;
    height: number;
    length: number;
    weight: number;
}
export interface ShipmentFreight {
    id: number;
    name: string;
    price: number;
    days: number;
    company: {
        name: string;
        image: string;
    };
}
export declare type ShipmentFreightArray = ShipmentFreight[];
