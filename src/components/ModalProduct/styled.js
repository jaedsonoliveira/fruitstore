import styled from "styled-components";

export const Container = styled.div`
width:500px;

@media screen and (max-width:480px) {
    width: 400px;
}
`;

export const ProductArea = styled.div`
height:150px;
display:flex;
`;
export const ProductButtons = styled.div`
margin-top:10px;
display:flex;
justify-content:flex-end;
align-items:center;

@media screen and (max-width:480px) {
  margin-right:30px;
}
`;


export const ProductInfoArea = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-left:10px;
`;
export const ProductDetails = styled.div`
display: flex;
flex-direction:column;
align-items:center;
`;
export const ProductQuantityArea = styled.div`
height:50px;
display:flex;
justify-content:space-between;
`;

export const ProductName = styled.div`
font-size:30px;
font-weight:bold;


`;
export const ProductNut = styled.div`
font-size:18px;
font-weight:500;
`;

export const ProductButton = styled.button`
border:0;
background-color:#073C07;
color:#fff;
font-size:16px;
font-weight:bold;
padding: 10px 20px;
margin-left:10px;
border-radius:5px;
cursor:pointer;
@media screen and (max-width:480px) {
    font-size:14px;
    width:30vw;
    
}

`;

export const ProductQuantity = styled.div`
display:flex;
align-items:center;
background-color: #073C07;
border-radius:5px;
margin-top:10px;
`;

export const ProductQtText = styled.div`
font-size:25px;
font-weight:bold;
color:#fff;

`;


