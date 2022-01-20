import styled from "styled-components";

export const Container = styled.div`
width:100%;
`;

export const ProductArea = styled.div`
margin-top:20px;
margin-bottom:10px;
`;

export const ProductList = styled.div`
display: grid;
grid-template-columns:repeat(4, 1fr);
grid-gap:15px;


@media screen and (max-width:900px) {
   grid-template-columns: repeat(3,1fr);
  
}

@media screen and (max-width:600px) {
   grid-template-columns: repeat(2,1fr);
  
}
`;