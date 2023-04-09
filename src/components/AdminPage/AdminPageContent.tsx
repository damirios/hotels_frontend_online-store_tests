import { ProductType } from "../../types/productDBType";
import { AdminPageListItem } from "./AdminPageListItem";


export function AdminPageContent(props: {allProducts: ProductType[]}) {
    const {allProducts} = props;


    return (
        <div className="admin-page__content">
            <div className="container">
                <div className="content-admin">
                    <h1 className="content-admin__title">Все товары</h1>
                    <ul className="content-admin__list">
                        {allProducts.map(el => <AdminPageListItem key={el.barcode} product={el} />)}
                    </ul>
                </div>
            </div>
        </div>
    );
}