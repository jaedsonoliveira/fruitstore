import styled from "styled-components";

export const  CartArea = styled.div`
background-color:#136713;
border-top-left-radius:10px;
border-top-right-radius:10px;
position:fixed;
bottom:0;
right:30px;
`;
export const  CartHeader = styled.div`
width:290px;
height:50px;
display:flex;
align-items:center;
cursor:pointer;
`;

export const  CartText = styled.div`
color:#FFF;
flex:1;
font-size:17px;
`;
export const  CartBody = styled.div`
display:${props=>props.show ? 'block' : 'none'};
color:#FFF;
`;

export const ProductsArea = styled.div``;
export const ProductItem = styled.div`
display:flex;
margin:10px;
`;

export const ProductInfoArea = styled.div`
flex:1;
margin-left:10px;
`;
export const ProductName= styled.div`
font-size:15px;
font-weight:bold;
`;

export const ProductQuantityArea = styled.div`
display:flex;
justify-content:center;
cursor:pointer;
`;

export const ProductQtText = styled.div`
font-size:15px;
font-weight:bold;
margin:0px 5px;
`;