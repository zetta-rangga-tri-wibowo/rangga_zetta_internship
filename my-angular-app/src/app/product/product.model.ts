export interface ProductModel {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity: number;
}

export interface ProductList {
    products: ProductModel[];
}

export interface ProductDetail {
    product: ProductModel;
}
