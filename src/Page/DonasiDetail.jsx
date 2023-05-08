import React, { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Donasii from '../assets/data/DataDonasi'
import Helmet from "../componen/Helmet/Helmet";
import CommonSection from "../componen/UI/CommonSection";
import '../stle/DonasiDetail.css'
import DonasiList from "../componen/UI/DonasiList";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch } from "react-redux";
import { cartAction } from "../Redux/Slice/cartSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Detail = () => {
    const {id} = useParams()
    const Donasi = Donasii.find(item=> item.id === id);
    const reviewUser = useRef('');
    const reviewMsg = useRef('');
    const reviewDons = useRef(null)
    const [jumlahhDuit, setJumlahDuit] = useState(null);
    const dispatch = useDispatch();
   

    const {
        imgUrl, 
        productName, 
        price, 
        description,
        shortDesc,
        jumlahDuit,
        duit,
        history,
        category
    } = Donasi;

    const DonasiLain = Donasii.filter(item=> item.category===category);

    const submitHandler = (e) => {
        e.preventDefault()
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value
        const reviewDonasi = reviewDons.current.value
        const reviewOBJ = {
            userName: reviewUser,
            Dons: reviewDonasi,
            text: reviewUserMsg
        }

        console.log(reviewOBJ)
        toast.success("Donasi Masuk")

    }
    const relatedDonasi = Donasii.filter(item=> item.category===category);

    const addToCart = ()=>{
        dispatch(cartAction.addItem({
            id,
            image: imgUrl,
            productName,
            price,

        }))
    }

    return (
    <Helmet title={productName}>
        <CommonSection title={productName}/>
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col className="image" lg='6' style={{marginTop:"50px"}}> 
                            <img src={imgUrl}></img>
                        </Col>
                        <Col lg='6'>
                            <div className="Donasi_details">
                                <h2>{productName}</h2>
                            </div>
                            <p>Rp.{jumlahDuit}</p>
                            <span className="price">Terkumpul Dari Rp.{price}</span>
                            <p>Kategori: {category}</p>
                            <p>{shortDesc}</p>

                            <button className="don_btn" onSubmit={submitHandler}>Donasi</button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Tabs>
                        <TabList>
                        <Tab>Description</Tab>
                        <Tab>History</Tab>
                        </TabList>
                        <TabPanel>
                        <div className="tab_content mt-3">
                                <p>{description}</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="history_donasi mt-5">
                            <div className="review_donasi">
                                <ul>
                                    {history ?.map((item, index) => (
                                        <li key={index}>
                                            <h6>Arya Moklet</h6>
                                            <span>Rp. {item.duit} (Dana Masuk)</span>
                                                <p>{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="review_form">
                                    <h4>Donasi</h4>
                                    <form action="" onSubmit={submitHandler} className="action">
                                        <div className="form_group">
                                            <input type="text" placeholder="Masukkan Nama" 
                                            ref={reviewUser}/>
                                        </div>
                                        <div className="form_group">
                                            <input type="text" placeholder="Jumlah Donasi" 
                                            ref={reviewDons}/>
                                        </div>
                                        <div className="form_group" rows={4}>
                                            <textarea type="text" placeholder="Tulis Keterangan" 
                                            ref={reviewMsg}/>
                                            
                                        </div>
                                        <motion.button whileTap={{scale:1.2}} type="submit" className="don_btn" onSubmit={submitHandler}>Donasi</motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </TabPanel>
                    </Tabs>
                        {/* <div className="tab_wrapper d-flex align-items-center gap-5">
                            <h6 className={`${tab === "desc"? 'active_tab' : ''}`} 
                            onclick={()=> setTab("desc")}
                            >Description
                            </h6>
                            <h6 className={`${tab === "his" ? 'active_tab' : ''}`} 
                            onclick={()=> setTab("his")}
                            >History({history.length})
                            </h6>
                        </div> */}
                        {/* {
                        tab ==='desc' ? (
                            <div className="tab_content mt-3">
                                <p>{description}</p>
                            </div>
                        ) : (
                        <div className="history_donasi mt-5">
                            <div className="review_donasi">
                                <ul>
                                    {history ?.map((item, index) => (
                                        <li key={index}>
                                            <span>(Rp.){item.duit}(Dana Masuk)</span>
                                                <p>{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>)
                            } */}
                    </Col>
                    <Col lg='12' className="mt-5">
                    <h2 className="Donasi_lain "></h2>Donasi Lain
                    </Col>
                    <DonasiList data={DonasiLain}/>
                </Row>
            </Container>
            <section/>
    </Helmet>
    )
}

export default Detail;