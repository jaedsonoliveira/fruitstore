import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductItem from '../components/ProductItem'
import {Container,ProductArea, ProductList} from './HomeStyled'
import api from '../api'
import Modal from '../components/Modal'
import ModalProduct from '../components/ModalProduct'
import Cart from '../components/Cart'
import Info from '../components/Info'

const Home = () => {
    const[products, setProducts] = useState([]);
    const [modalStatus,setModalStatus] = useState(false);
    const[modalData, setModalData] = useState({});

    const handleProductClick = (data)=>{
        setModalData(data);
        setModalStatus(true);
    }

    const getProducts = async () =>{
        const prods = await api.getProducts();
        setProducts(prods);
    }

    useEffect(()=>{
        setProducts([]); 
        getProducts();
    },[]);
    return (
        <Container>
            <Header/>
            <Banner/>
            <Info/>
            <ProductArea>
                <ProductList>
                    {products.map((item,index)=>(
                    <ProductItem
                     key={index} 
                     data={item} 
                     onClick={handleProductClick}/>
                    ))}
                </ProductList>
            </ProductArea>
            <Cart/>

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus}/>
            </Modal>
        </Container>
    )
}

export default Home
