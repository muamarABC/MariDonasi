import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../Page/Home"
import Donasi from "../Page/Donasi";
import Histori from "../Page/History"
import DonasiDetail from "../Page/DonasiDetail"
import Checkout from "../Page/Checkout"
import Login from "../Page/Login"
import Regis from "../Page/Regis"
import Protected from "./Protected";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path="donasi" element={<Donasi/>}/>
            <Route path="donasi/:id" element={<DonasiDetail/>}/>
            <Route path="histori" element={<Histori/>}/>
            <Route 
                path="galangDonasi" 
                element={
                    <Protected>
                        <Checkout/>
                    </Protected>
                }/>
            <Route path="regis" element={<Regis/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
    )
}
export default Routers