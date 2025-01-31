import type { Product, Category } from './types/product';

export const CATEGORIES: Category[] = [
    { id: 0, name: 'ALL' },
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing & Bags' },
    { id: 3, name: 'Home & Living' },
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Iphone 16 Pro Max',
        price: 1999,
        category: 1,
        image: new URL('@/assets/iphone.png', import.meta.url).href,
        description:
            'iPhone 16 Pro Max. Built for Apple Intelligence. 1 Featuring a stunning titanium design. Camera Control. 4K 120 fps Dolby Vision. And A18 Pro chip.',
    },
    {
        id: 2,
        name: 'IPad Pro (5th Generation)',
        price: 1999,
        category: 1,
        image: new URL('@/assets/ipad.png', import.meta.url).href,
        description:
            'Apple iPad Pro 11 with M4 Chip, Mid 2024 11-inch Ultra Retina XDR Display iPad Pro features a landscape 12MP Ultra Wide front camera 1TB SSD Capacity and Wi-Fi Connectivity In The Box: 11-inch iPad Pro, USB-C Charge Cable, 20W USB-C Power Adapter, Polishing cloth for nano-texture glass',
    },
    {
        id: 3,
        name: 'Alienware Laptop',
        price: 3999,
        category: 1,
        image: new URL('@/assets/laptop.png', import.meta.url).href,
        description:
            'Alienware 15 R4 15.6" Gaming Notebook - Intel Core i7-8750H(6 Core) 2.20 GHz, GTX 1060, 16 GB DDR4, 1TB HDD + 256GB',
    },
    {
        id: 4,
        name: "Men's Leather Wallet",
        price: 19,
        category: 2,
        image: new URL('@/assets/wallet.png', import.meta.url).href,
        description:
            'GENUINE LEATHER: The supple texture of the leather adds a touch of luxury to your everyday carry, while ensuring durability that lasts for years to come.',
    },
    {
        id: 5,
        name: 'Ceramic Tableware',
        price: 49,
        category: 3,
        image: new URL('@/assets/tableware.png', import.meta.url).href,
        description:
            'Unique Design: Each piece showcases slight variations due to the reactive glaze, ensuring no two pieces are exactly alike. Complete Set: Includes 4 dinner plates, 4 salad plates, and 4 bowls, perfect for everyday meals or special occasions.',
    },
    {
        id: 6,
        name: 'Air Jordan 7 Retro',
        price: 199,
        category: 2,
        image: new URL('@/assets/sneaker.png', import.meta.url).href,
        description:
            'Shoe upper is built with a Suede base, finished in Flint grey. Overlaid by contrasting white tumbled leather',
    },
    {
        id: 7,
        name: 'Mens T-Shirts',
        price: 29,
        category: 2,
        image: new URL('@/assets/tshirt.png', import.meta.url).href,
        description:
            'Button closure Imported 95% Cotton,5% Spandex. Machine Washable, Do Not Bleach. Comfort Fit Breathable and skin-friendly long sleeve henley t-shirts, slim fit shirts,three buttons dsign,soft to the touch for comfy wearing,feels terrific all day long.',
    },
    {
        id: 8,
        name: 'Push Back Recliner',
        price: 299,
        category: 3,
        image: new URL('@/assets/chair.png', import.meta.url).href,
        description:
            'Better Homes & Gardens Fabric Recliner, Beige: This elegant recliner features a contemporary button-tufted chair back design and stylish nailhead trim that brings a classic touch to this modern chair.Whether you are using it in your living room, study or any other space, the durable and stylish upholstery is sure to complement any furniture. Hand-finished solid wood legs in an espresso brown finish provide the perfect accent and are sure to make this one of your favorite recliners.',
    },
];
