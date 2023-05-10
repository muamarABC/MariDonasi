import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
// import Donasii from '../assets/data/DataDonasi'
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
import { db } from "../../firebase.config";
import { storage} from '../../firebase.config';
import {doc, getDoc} from 'firebase/firestore'
import { uploadBytesResumable, ref,getDownloadURL  } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import useGetData from "../custom-hooks/useGetData";
import BCA from '../assets/images/BCA.png'
import Mandiri from '../assets/images/mandiri.png'
import BSI from '../assets/images/BSI.png'
import ProgressBar from 'react-bootstrap/ProgressBar';


const Detail = () => {
    const {id} = useParams()
    // const Donasi = Donasii.find(item=> item.id === id);

    const reviewMsg = useRef('');
    const reviewDons = useRef(null)
    const [jumlahhDuit, setJumlahDuit] = useState(null);
    const dispatch = useDispatch();
    const [donasi, setDonasi] = useState({})
    const {data:Donasi} = useGetData("Donasi")

    const [enterNama, setEnterNama] = useState('');
    const [enterJlhDonasi, setEnterJlhDonasi] = useState('');
    const [enterKeterangan, setEnterKeterangan] = useState('');
    const [enterBuktiImg, setEnterBuktiImg] = useState(null);

    const docRef = doc(db, 'Donasi', id);
    const now = 60;

    // const tambahDonasi = async e =>{
    //     e.preventDefault()
    //     try{
    //         const doocRef = await collection(db, 'DataDonasi');
    //         // const UploadTask = uploadBytesResumable()
    //     }catch{

    //     }
    // }
    const hitung = {

    }
    
    const tambahDonasi = async e =>{
        e.preventDefault()
        try{
            const docRef = await collection(db, 'DataDonasi')
            const storageRef =  ref(storage, `BuktiDonasiImages/${Date.now() + enterBuktiImg.name}`);
            const uploadTask = uploadBytesResumable(storageRef, enterBuktiImg);

            uploadTask.on(() => {
            toast.error('images not uploaded!');
            }, 
            ()=> {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
                    await addDoc(docRef,{
                        User: enterNama,
                        Dons: enterJlhDonasi,
                        Msg: enterKeterangan,
                        imgUrl: downloadURL,
                    });
                });
                toast.success("Donasi Berhasil ditambahkan");
                navigate('/dashboard/all-donasi');
            });
        }
        catch(err){
            toast.error("Donasi Tidak Terupload")
        };
    };

    const UpdateDonasi = async (id) =>{
        const DonasiDC = doc(dc, "Donasi", id)
        let DonasiLama =""

    }
   
    useEffect(()=> {
        const getDOnasi = async()=>{
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setDonasi(docSnap.data())
            }else{
                console.log('no Donasi')
            }
        }
        getDOnasi()
    },[Donasi])

    const {
        imgUrl, 
        Title, 
        JlhDonasi, 
        description,
        DonasiAwal,
        category
    } = donasi;

    const DonasiLain = Donasi.filter(item=> item.category===category);

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     const reviewUserName = reviewUser.current.value
    //     const reviewUserMsg = reviewMsg.current.value
    //     const reviewDonasi = reviewDons.current.value
    //     const reviewOBJ = {
    //         userName: reviewUser,
    //         Dons: reviewDonasi,
    //         text: reviewUserMsg
    //     }

    //     console.log(reviewOBJ)
    //     toast.success("Donasi Masuk")

    // };

    return (
    <Helmet title={Title}>
        <CommonSection title={Title}/>
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col className="image" lg='6' style={{marginTop:"50px"}}> 
                            <img src={imgUrl}></img>
                        </Col>
                        <Col lg='6'>
                            <div className="Donasi_details">
                                <h2>{Title}</h2>
                            </div>
                            <p>Rp.{DonasiAwal}</p>
                            <ProgressBar now={now} label={`${now}%`}  />
                            <span className="price">Terkumpul Dari Rp.{JlhDonasi}</span>
                            <p>Kategori: {category}</p>
                            {/* <p>{shortDesc}</p> */}

                            {/* <button className="don_btn" onSubmit={submitHandler}>Donasi</button> */}
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Tabs>
                        <TabList>
                        <Tab>Deskripsi</Tab>
                        <Tab>Donasi</Tab>
                        </TabList>
                        <TabPanel>
                        <div className="tab_content mt-3">
                                <p>{description}</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="history_donasi mt-5">
                            <div className="review_donasi" >
                                <div className="logo_bank" style={{paddingLeft:100}}>
                                    <h4>Silahkan Transfer Donasi Ke Virtual Acount Yang telah di sediakan</h4>
                                    <img src={BCA} />
                                    <h5> 888709822212131</h5>
                                    <img src={Mandiri} style={{paddingTop:10}}/>
                                    <h5> 888709822212131</h5>
                                    <img src={BSI} style={{paddingTop:10}}/>
                                    <h5> 888709822212131</h5>
                                </div>
                                <div className="review_form">
                                    <h4>Donasi</h4>
                                    <form action="" onSubmit={tambahDonasi} className="action">
                                        <div className="form_group">
                                            <label>Nama</label>
                                            <input type="text" placeholder="Masukkan Nama" 
                                            value={enterNama}
                                            onChange={e=> setEnterNama(e.target.value)}/>
                                        </div>
                                        <div className="form_group">
                                            <label>Jumlah Donasi Yang Ingin Disumbangkan</label>
                                            <input type="number" placeholder="Jumlah Donasi" 
                                            value={enterJlhDonasi}
                                            onChange={e=> setEnterJlhDonasi(e.target.value)}/>
                                        </div>
                                        <div className="form_group" rows={4}>
                                        <label>Keterangan</label>
                                            <textarea type="text" placeholder="Tulis Keterangan" 
                                            value={enterKeterangan}
                                            onChange={e=> setEnterKeterangan(e.target.value)}/>
                                        </div>
                                        <div className="form_group" rows={4}>
                                            <label>Upload Bukti Pembayaran</label>
                                            <input type="file" placeholder="Tulis Keterangan" 
                                            ref={reviewMsg}
                                            onChange={e=> setEnterBuktiImg(e.target.files[0])}/>
                                            
                                        </div>
                                        <motion.button whileTap={{scale:1.2}} style={{marginTop:20}}type="submit" className="don_btn" onSubmit={tambahDonasi}>Donasi</motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </TabPanel>
                    </Tabs>
                    </Col>
                    <Col lg='12' className="mt-5">
                    <h1 className="Donasi_lain "></h1>Donasi Lain
                    </Col>
                    <DonasiList data={DonasiLain}/>
                </Row>
            </Container>
            <section/>
    </Helmet>
    )
}

export default Detail;