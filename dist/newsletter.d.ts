export interface Newsletter {
    name: string;
    email: string;
    canceledAt?: Date;
    reason?: string;
}
