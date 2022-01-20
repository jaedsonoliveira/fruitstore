import {Apple, HealthAndSafetyOutlined, LocalShippingOutlined, LockOutlined } from '@mui/icons-material';
import React from 'react';
import{Container, InfoTitle,InfoDesc, InfoItem, InfoIcon} from './styled';

const Info = () => {
  return (
    <Container>

        <InfoItem> 
        <InfoIcon>
        <Apple style={{color:'#719E39', width:50, height:50,}}/>
        </InfoIcon>
        <InfoTitle>PRODUTOS FRESCOS</InfoTitle>
        <InfoDesc>Exclusivamente Selecionados</InfoDesc>
        </InfoItem>

        <InfoItem>
        <InfoIcon>
        <LocalShippingOutlined style={{color:'#719E39', width:50, height:50}}/>
        </InfoIcon>
        <InfoTitle>FRETE GRÀTIS</InfoTitle>
        <InfoDesc>Compras acima de 50 R$</InfoDesc>
        </InfoItem>

        <InfoItem>
        <InfoIcon>
        <HealthAndSafetyOutlined style={{color:'#719E39', width:50, height:50}}/>
        </InfoIcon>
        <InfoTitle>HIGIENE E PROTEÇÂO</InfoTitle>
        <InfoDesc>Saúde em 1º lugar</InfoDesc>
        </InfoItem>

        <InfoItem>
        <InfoIcon>
        <LockOutlined style={{color:'#719E39', width:50, height:50}}/>
        </InfoIcon>
        <InfoTitle>COMPRA SEGURA</InfoTitle>
        <InfoDesc>Site 100% Seguro</InfoDesc>
        </InfoItem>
    </Container>
  );
};

export default Info;
