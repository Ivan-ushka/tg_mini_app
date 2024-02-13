export default interface Asset {
    name: string;
    number: number;
    price: number;
    total_price: number,
    currency: string;
    transaction_date: string;
}

export interface getAsset {
    "id": 0,
    "currency": string,
    "total_sum": 0,
    "full_name": string,
    "number": 0,
    "name": string,
    "daily_pnl": string,
    "transaction_date": string,
    "created_at": string,
    "updated_at": string,
}