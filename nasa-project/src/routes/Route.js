import { BrowserRouter, Routes, Route } from "react-router-dom";


export function Route () {
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