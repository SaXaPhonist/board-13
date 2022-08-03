import MoreButton from 'components/button/moreButton/MoreButton';
import React from 'react';
import { InfoCardContainer } from './styles';

const InfoCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoCardContainer>
      <div className="info-card__header">
        <p className="info-card__title">travel date</p>
        <MoreButton />
      </div>
      <div className="info-card__value">Rome</div>
      <section className="info-section">{children}</section>
    </InfoCardContainer>
  );
};

export default InfoCard;
