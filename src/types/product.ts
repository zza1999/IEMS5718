export interface Product {
    id: number;
    name: string;
    price: number;
    category: number;
    image: string;
    description?: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
