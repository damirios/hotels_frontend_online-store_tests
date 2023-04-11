import { Route, Routes } from "react-router-dom"
import { AdminPage } from "../components/AdminPage/AdminPage"
import { AdminPageChangeInfo } from "../components/AdminPage/AdminPageChangeInfo"
import { AdminPageCreate } from "../components/AdminPage/AdminPageCreate"
import { Cart } from "../components/Cart"
import { Content } from "../components/Content"
import { ProductFullPage } from "../components/ProductFullPage"
import { NotFoundPage } from "../components/UI/NotFoundPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:id' element={<ProductFullPage />} />
            <Route path='/admin-page' element={<AdminPage />} />
            <Route path='/admin-page/edit-product/:id' element={<AdminPageChangeInfo />} />
            <Route path='/admin-page-create' element={<AdminPageCreate />} />
            <Route path='/*' element={<NotFoundPage/>} />
        </Routes>
    );
}