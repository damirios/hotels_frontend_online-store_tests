import { addProductToCart, changeQuantityInCart, removeProductFromCart } from "./cartSlice";
import cartReducer from "./cartSlice";
import { productsDB } from "../../data/productsDB";

describe("cart reducer tests", () => {
    const products = productsDB;
    let productsInCart;
    beforeEach(() => {
        productsInCart = [
            {
                product: products[2],
                quantity: 5,
            },
            {
                product: products[1],
                quantity: 1,
            },
            {
                product: products[7],
                quantity: 2,
        }];
    });

    test("add product to cart", () => {
        const product = products[9];

        expect(cartReducer( {productsInCart: []}, addProductToCart({
            product: product,
            quantity: 4
        })) ).toEqual({
            productsInCart: [{product: product, quantity: 4}]
        });
    });

    test("remove single product from cart", () => {
        const removingBarcode = products[1].barcode;
        const restProductsInCart = productsInCart.filter(el => el.product.barcode !== removingBarcode);
    
        expect(cartReducer( {productsInCart}, removeProductFromCart(removingBarcode))).toEqual({
            productsInCart: restProductsInCart
        });
    });

    test("changing product quantity in cart (> 0)", () => {
        const barcode = products[2].barcode;
        const count = 8;

        const newProducts = [...productsInCart];
        newProducts[0].quantity = count;

        expect(cartReducer({productsInCart}, changeQuantityInCart({barcode, count})))
        .toEqual({
            productsInCart: newProducts
        });
    });

    test("changing product quantity in cart (= 0)", () => {
        const barcode = products[2].barcode;
        const count = 0;

        const newProducts = productsInCart.map(el => {
            return {
                product: el.product,
                quantity: el.quantity
            }
        });

        newProducts[2].quantity = count;
        console.log('prodCart: ', productsInCart)

        // т.к. количество товара пытаемся приравнять к 0, то не должно измениться!
        expect(cartReducer({productsInCart}, changeQuantityInCart({barcode, count})))
        .toEqual({
            productsInCart: productsInCart
        });
    });
});