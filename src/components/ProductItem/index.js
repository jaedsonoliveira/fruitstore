import React from 'react'
import {Container,
    ProductInfoArea,
    ProductButtonArea,
    ProductName,
    ProductNut
} from './styled';
import AddIcon from '@mui/icons-material/Add'; 

const ProductItem = ({data,onClick}) => {
    const handleClick = ()=>{
        onClick(data);
    }
    return (        
        <Container onClick={handleClick}>
        <ProductInfoArea>
            <ProductName>{data.name}</ProductName>
            <ProductNut>Carboidratos: {data.nutritions.carbohydrates}</ProductNut>
                <ProductNut>Calorias: {data.nutritions.calories}</ProductNut>
                <ProductNut>Protreinas: {data.nutritions.protein}</ProductNut>
                <ProductNut>Gordura: {data.nutritions.fat}</ProductNut>
                <ProductNut>Açucar: {data.nutritions.sugar}</ProductNut>
        </ProductInfoArea>

        <ProductButtonArea >
            <AddIcon  style={{color:'#fff', backgroundColor:'#136713', marginRight:20}}/>
        </ProductButtonArea>
    </Container>
    )
}

export default ProductItem
