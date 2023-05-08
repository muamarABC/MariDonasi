import React from "react";
import productImg from '../../assets/images/arm-chair-01.jpg'
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import '../../stle/donasiCart.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Redux/Slice/cartSlice";
import { toast } from "react-toastify";



const DonasiCart = ({item}) => {

    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(
        cartAction,addItem({
            id: item.id,
            productName:item.productName,
            price: item.price,
            image: item.imgUrl,
        })
    );
    toast.success('Product Added')
    };
    return(
        <Col lg='3' md='4'>
            <div className="Donasi_item">
            <div className="donasi_img">
                <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" className="" />
            </div>
            <div className="p-2 Donasi_info">
                <h3 className="Donasi_name"><Link to={`/donasi/${item.id}`}>{item.productName}</Link></h3>
                <span>{item.category}</span>
                <div className="donasi_card-bottom d-flex align-items-center justify-content-between">
                    <span className="dana">Terkumpul Dari Rp.{item.price}</span>
                    <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
                        {/* <i className="ri-add-line"></i> */}
                    </motion.span>
                </div>
            </div>
        </div>
        </Col>
    )
}
export default DonasiCart