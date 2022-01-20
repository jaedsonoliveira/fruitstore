import React ,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {CartArea, CartHeader, CartText, CartBody, ProductsArea, ProductItem, ProductInfoArea, ProductName, ProductQuantityArea, ProductQtText} from './styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export default  ()=>{
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show,setShow]= useState(true);

    const handleCartClick = () =>{
        setShow(!show);
    }

    const handleProductChange = (key,type)=>{
        dispatch({
            type:'CHANGE_PRODUCT',
            payload:{key,type}
        });
    }

    return(
        <CartArea>
            <CartHeader onClick={handleCartClick}>
            <ShoppingCartIcon style={{color:'#fff'}}/>
                <CartText>Meu carrinho ({products.length})</CartText>
                { show &&
                <KeyboardArrowDown  style={{height:25, width:25, marginRight:10, color:'#fff'}}/>
                }{!show &&
                <KeyboardArrowUp  style={{height:25, width:25, marginRight:10, color:'#fff'}}/>
                }   
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item,index)=>(
                         <ProductItem key={index}>
                         <ProductInfoArea>
                             <ProductName>{item.name}</ProductName>
                         </ProductInfoArea>
                         <ProductQuantityArea>
                         <RemoveCircleOutlineIcon  onClick={()=>handleProductChange(index,'-')}  style={{height:25, width:25, marginRight:10, color:'#fff'}}/>
                              <ProductQtText>{item.qt}</ProductQtText> 
                              <AddCircleOutlineIcon onClick={()=>handleProductChange(index,'+')}  style={{height:25, width:25, marginLeft:10, color:'#fff'}}/>
                         </ProductQuantityArea>
                     </ProductItem>
                    ))}
                   
                </ProductsArea>
            </CartBody>

        </CartArea> 

    );
}