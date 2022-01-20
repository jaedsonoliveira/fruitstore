import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Container,
         ProductArea,
         ProductButtons,
         ProductInfoArea,
         ProductDetails,
         ProductQuantityArea,
         ProductName,
         ProductNut,
         ProductButton,
         ProductQuantity,
         ProductQtText
} from './styled'; 
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ModalProduct = ({data,setStatus}) => {
    const dispatch = useDispatch();
    const[qt, setQt]= useState(1);

    useEffect(()=>{
        setQt(1);
    }, [data]);


    const handleCancelButton = ()=>{
        setStatus(false);
    }

    const handleMinusQt = ()=>{
        if(qt > 1){
            setQt(qt-1);
        }
    }

    const handlePlusQt = ()=>{
        setQt(qt + 1);
    }

    const handleAddToCart = ()=>{
        dispatch({
            type: 'ADD_PRODUCT',
            payload:{data,qt}
        });
        setStatus(false);
    }
    
  return (
    <Container>
    <ProductArea>
        
        <ProductInfoArea> 
            <ProductDetails>
                <ProductName>{data.name}</ProductName>
                <ProductNut>Familia: {data.family}</ProductNut>
                <ProductNut>Genero: {data.genus}</ProductNut>
                <ProductNut>Order: {data.order}</ProductNut>

            </ProductDetails>

            <ProductQuantityArea>
                <ProductQuantity>
                    <RemoveCircleOutlineIcon onClick={handleMinusQt}  style={{height:30, width:30, marginRight:10, color:'#fff'}}/>
                    <ProductQtText>{qt}</ProductQtText>
                    <AddCircleOutlineIcon onClick={handlePlusQt} style={{height:30, width:30, marginLeft:10, color:'#fff'}}/>
                </ProductQuantity>

            </ProductQuantityArea>
        </ProductInfoArea>
         
    </ProductArea>

    <ProductButtons>
        <ProductButton onClick={handleCancelButton}>Cancelar</ProductButton>
        <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
    </ProductButtons>
</Container>
  )
};

export default ModalProduct;
