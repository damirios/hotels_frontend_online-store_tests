import { productsDB } from "../data/productsDB";
import { ProductType, sizeTypes } from "../types/productDBType";


export function getProductsFromLocalStorage() {
    const stringifyProducts = localStorage.getItem('hotels_products');
    
    if (stringifyProducts !== null && JSON.parse(stringifyProducts).length !== 0) {
        return JSON.parse(stringifyProducts);
    }
    
    return setProductsToLocalStorage(productsDB);
}

export function setProductsToLocalStorage(products: ProductType[]) {
    localStorage.setItem('hotels_products', JSON.stringify(products));
    return products;
}

export function removeProductFromLocalStorage(barcode: string) {
    const stringifyProducts = localStorage.getItem('hotels_products');
    if (stringifyProducts !== null) {
        const productInLocalStorage: ProductType[] = JSON.parse(stringifyProducts);
        const index = productInLocalStorage.findIndex(el => el.barcode === barcode);
        productInLocalStorage.splice(index, 1);
        localStorage.setItem('hotels_products', JSON.stringify(productInLocalStorage));
    }
}

export function getSingleProductFromLocalStorage(barcode: string) {
    const stringifyProducts = localStorage.getItem('hotels_products');
    if (stringifyProducts !== null) {
        const productsInLocalStorage: ProductType[] = JSON.parse(stringifyProducts);
        const index = productsInLocalStorage.findIndex(el => el.barcode === barcode);
        return {
            index,
            product: productsInLocalStorage[index]
        }
    }
    return null;
}

interface DataType {
    title: string,
    sizeType: sizeTypes.volume | sizeTypes.weight,
    size: number,
    imageURL: string,
    manufacturer: string,
    brand: string,
    description: string,
    price: number,
    careTypes: string[]
}

export function changeProductInLocalStorage(barcode: string, data: DataType) {
    const stringifyProducts = localStorage.getItem('hotels_products');
    if (stringifyProducts !== null) {
        const productsInLocalStorage: ProductType[] = JSON.parse(stringifyProducts);
        const index = productsInLocalStorage.findIndex(el => el.barcode === barcode);
        productsInLocalStorage[index] = {
            title: data.title, size: data.size, sizeType: data.sizeType, manufacturer: data.manufacturer,
            description: data.description, image_url: data.imageURL, barcode, brand: data.brand, 
            price: data.price, careTypes: data.careTypes
        }

        setProductsToLocalStorage(productsInLocalStorage);

        return productsInLocalStorage[index];
    }
    return null;
}

export function createProductInLocalStorage(barcode: string, data: DataType) {
    const stringifyProducts = localStorage.getItem('hotels_products');
    if (stringifyProducts !== null) {
        const productsInLocalStorage: ProductType[] = JSON.parse(stringifyProducts);
        const newProduct = {
            title: data.title, size: data.size, sizeType: data.sizeType, manufacturer: data.manufacturer,
            description: data.description, image_url: data.imageURL, barcode, brand: data.brand, 
            price: data.price, careTypes: data.careTypes
        };

        productsInLocalStorage.push(newProduct);
        setProductsToLocalStorage(productsInLocalStorage);

        return newProduct;
    }
    return null;
}