import type { Product, Category } from "./types/product";

export const CATEGORIES: Category[] = [
    { id: 0 , name: "ALL"},
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing & Bags" },
    { id: 3, name: "Home & Living" },
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Smartphone",
        price: 2999,
        category: 1,
        image: "https://picsum.photos/200/200?1",
        description: "Latest flagship smartphone",
    },
    {
        id: 2,
        name: "Laptop",
        price: 8999,
        category: 1,
        image: "https://picsum.photos/200/200?2",
        description: "High-performance gaming laptop",
    },
    {
        id: 3,
        name: "Men's Wallet",
        price: 399,
        category: 2,
        image: "https://picsum.photos/200/200?3",
        description: "Genuine leather men's wallet",
    },
    {
        id: 4,
        name: "Ceramic Tableware",
        price: 129,
        category: 3,
        image: "https://picsum.photos/200/200?4",
        description: "Exquisite ceramic tableware set",
    },
];