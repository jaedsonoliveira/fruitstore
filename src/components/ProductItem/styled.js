import styled from "styled-components";
export const Container = styled.div`
width: 20vw;
background-color:#FFF;
border-radius:5px;
box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
padding:10px;
display:flex;
align-items:center;
color:#136713;
cursor:pointer;

@media screen and (max-width:480px) {
    width: 40vw;
}
`;


export const ProductInfoArea = styled.div`
flex:1;
margin-left:10px;
margin-right:10px;
`;
export const ProductButtonArea = styled.div``;


export const ProductName = styled.div`
font-size:20px;
font-weight:bold;

`;

export const ProductNut = styled.div`
@media screen and (max-width:480px) {
    font-size:14px;
}

`;
