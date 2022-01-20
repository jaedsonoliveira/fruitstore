import React from 'react'
import {BannerContainer, BannerBg, BannerContent, BannerH1, BannerP} from './styled';

const Banner = () => {
    return (
        <BannerContainer>
        <BannerBg>

        </BannerBg>
        <BannerContent>
            <BannerH1>Frutas,Verduras<br/> e Legumes<br/> selecionados</BannerH1>
            <BannerP>
                    15% off em todos os produtos
            </BannerP>
        </BannerContent>
    </BannerContainer>
    )
}

export default Banner
