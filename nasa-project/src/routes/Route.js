import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from '../pages/HomePage/Main/Main'
import {LoginPage} from '../pages/LoginPage'
import {PaymentPage} from '../pages/PaymentPage'
import {ErrorPage} from '../pages/ErrorPage'
import Header from '../components/Header/Header'


export function Router () {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={< HomePage />}/>
            <Route path="/login" element={< LoginPage />}/>
            <Route path="/payment" element={< PaymentPage />}/>
            <Route path="*" element={< ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}