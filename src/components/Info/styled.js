import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;

@media screen and (max-width:480px) {
    flex-wrap:wrap;
}
@media screen and (max-width:900px) {
    flex-wrap:wrap;
}
`;
export const InfoItem = styled.div`
width: 25%;
padding: 20px 40px;
@media screen and (max-width:480px) {
    width: 100%;
}

@media screen and (max-width:900px) {
    width: 40%;
}

`;

export const InfoIcon = styled.div`
display: flex;
justify-content:center;
align-items:center;

`;
export const InfoTitle = styled.div`
color:#719E39;
font-weight:bold;
font-size:18px;
display: flex;
justify-content:center;
align-items:center;

@media screen and (max-width:480px) {
    font-size:16px;
}
`;
export const InfoDesc = styled.div`
color: #719E39;
display: flex;
justify-content:center;
align-items:center;

@media screen and (max-width:480px) {
    font-size:11px;
}
`;