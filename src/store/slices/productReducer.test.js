import productReducer, { removeProduct, sortProducts } from './productSlice';
import { productsDB } from '../../data/productsDB';

describe("product reducer tests", () => {

    test("sort products by price desc", () => {
        const initialProducts = productsDB;
        const initialState = {
            list: initialProducts,
            listToShow: initialProducts,
            pageList: initialProducts.slice(0, 10),
            loading: false,
            error: null,
            status: 'idle'
        };

        const sortedProducts = [...productsDB].sort((a, b) => +b.price - +a.price);
        expect(productReducer(initialState, sortProducts({
            sortParam: 'price',
            sortOrder: 'desc'
        }))).toEqual({
            ...initialState, listToShow: sortedProducts, pageList: sortedProducts.slice(0, 10)
        });
    });

    test("products lists length after removing product", () => {
        const initialProducts = productsDB;
        const initialState = {
            list: initialProducts,
            listToShow: initialProducts,
            pageList: initialProducts.slice(0, 10),
            loading: false,
            error: null,
            status: 'idle'
        };

        const removingIndex = 3;
        const removingBarcode = initialProducts[removingIndex].barcode;
        const newList = initialState.list.filter(el => el.barcode !== removingBarcode);
        const newListToShow = initialState.listToShow.filter(el => el.barcode !== removingBarcode);
        
        expect(productReducer(initialState, removeProduct(removingBarcode))).toEqual({
            ...initialState,
            list: newList,
            listToShow: newListToShow,
            pageList: newListToShow.slice(0, 10)
        });
    });
});