import styled from "styled-components";
 export const BannerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 450px;
    position: relative;
    z-index:1;
 `;
 export const BannerBg = styled.img`
 background-image: url('../../banner.jpg');
 width: 100%;
 position: absolute;
 height: 100%;
 `;
 
 
 export const BannerContent = styled.div`
 position:absolute;
 color: #eee;
 `;
 export const BannerH1 = styled.h1`
 font-size: 60px;
 margin-top: 80px;
 margin-left: 40px;
 font-weight: 600;

 @media screen and (max-width:480px) {
    font-size:40px;
}
 `;
 export const BannerP= styled.p`
  margin-left: 45px;
  margin-top: -20px;
  font-size: 23px;
  font-weight: 600;
 `;
 
 
 