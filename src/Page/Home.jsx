import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap"
import Helmet from "../componen/Helmet/Helmet";
import heroImg from '../assets/images/Donatee.png'
import '../stle/Home.css'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Service from "../Service/Service";
import DonasiList from "../componen/UI/DonasiList";
import products from "../assets/data/DataDonasi"

const Home = () => {
    const [trendingDonasi, setTrendingDonasi] = useState([]);
    const [BestDonasi, setBestDonasi] = useState([]);

    useEffect(()=>{
        const filterTrendingProducts = products.filter((item) => item.category == "Kebakaran");
        const filterBestProducts = products.filter((item) => item.category == "Banjir");

        setTrendingDonasi(filterTrendingProducts);
        setBestDonasi(filterBestProducts);
    }, []);
    return (
        <Helmet title={"Home"}>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                        <div className="hero_content">
                            <p className="hero_subtitle">Trending Donasi</p>
                            <h2>Make Your Money Berguna Untuk Yang membutuhkan</h2>
                            <p>Memberikan kebahagiaan untuk orang lain sejatinya juga membahagiakan diri-sendiri. Mari, membantu Sesama agar senyum tergelincir di bibir mereka.</p>
                            <motion.button whileTap={{scale: 1.2}} className="Donasi_button"><Link to='/donasi'>Donasi Now</Link> </motion.button>
                        </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="hero_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Service/>
            <section className="trending_donasi">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center"> 
                        <h2 className="section_title">
                            Trending Donasi</h2>
                        </Col>
                        <DonasiList data={trendingDonasi}/>
                    </Row>
                </Container>
            </section>

            <section className="best_donasi">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center"> 
                        <h2 className="section_title">
                            Best Donasi</h2>
                        </Col>
                        <DonasiList data={BestDonasi}/>
                    </Row>
                </Container>
            </section>
            
        </Helmet>
    );
};
export default Home