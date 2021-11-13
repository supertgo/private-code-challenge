import Button from 'components/Button';
import Star from 'components/Star';
import MediaMatch from 'components/MediaMatch';

import { Check as CheckIcon } from '@styled-icons/bootstrap/Check';

import * as S from './styles';

export type PlanProps = {
  color?: 'primary' | 'white';
  acessTime: string;
  title: string;
  benefits: string[];
  price: string;
  typePayment: string;
  promotionalPrice?: string;
  aditionalInformation?: string;
};

const Plan = ({
  color = 'primary',
  acessTime,
  title,
  benefits,
  price,
  promotionalPrice,
  aditionalInformation,
  typePayment
}: PlanProps) => (
  <S.Wrapper aria-label="plan" color={color}>
    <S.Top>
      <div>
        <S.AcessTime>{acessTime && `${acessTime} de acesso`}</S.AcessTime>
        <S.Title>{title}</S.Title>
      </div>
      {!!promotionalPrice && (
        <>
          <MediaMatch greaterThan="medium">
            <Star>70%</Star>
          </MediaMatch>

          <MediaMatch lessThan="medium">
            <Star size="small">70%</Star>
          </MediaMatch>
        </>
      )}
    </S.Top>

    <S.Text>Vantagens</S.Text>

    <S.BenefitsWrapper>
      {benefits?.map((benefit) => (
        <S.Row key={benefit}>
          <S.Icon>
            <CheckIcon
              color={color == 'primary' ? '#FFFFFF' : '#252160'}
              size={15}
            />
          </S.Icon>
          <S.Benefits>{benefit}</S.Benefits>
        </S.Row>
      ))}
    </S.BenefitsWrapper>

    <S.Bottom>
      <S.PriceInformation>
        <S.Currency>R$</S.Currency>
        <S.PriceWrapper>
          {promotionalPrice ? (
            <>
              <S.PromotionalPrice>{`de ${price}`}</S.PromotionalPrice>
              <S.Price>{promotionalPrice}</S.Price>
            </>
          ) : (
            <S.Price>{price}</S.Price>
          )}
        </S.PriceWrapper>

        <S.TypePayment>{`/${typePayment}`}</S.TypePayment>
      </S.PriceInformation>

      <Button size="small" color={color == 'primary' ? 'gradient' : 'primary'}>
        Eu quero!
      </Button>
    </S.Bottom>
    {!!aditionalInformation && (
      <S.AditionalInformation>
        Menos de 5 reais por mês :)
      </S.AditionalInformation>
    )}
  </S.Wrapper>
);

export default Plan;
