import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import * as ButtonStyles from 'components/Button/styles';
import { PlanProps } from '.';

type WrapperProps = Pick<PlanProps, 'color'>;

const wrapperModiffiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  white: (theme: DefaultTheme) => css`
    ${Title}, ${Benefits}, ${Price}, ${PromotionalPrice}, ${AditionalInformation}, ${TypePayment} {
      color: ${theme.colors.primary};
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    max-width: 30rem;
    align-items: center;
    background-color: ${theme.colors[color!]};
    padding: ${theme.spacings.medium} ${theme.spacings.small}
      ${theme.spacings.medium} ${theme.spacings.small};
    border-radius: ${theme.border.medium};
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);

    ${!!color && wrapperModiffiers[color](theme)}
    ${media.greaterThan('medium')`
      max-width: 57rem;
      max-height: 70rem;
      padding: ${theme.spacings.xxlarge};
    `};
  `}
`;

export const Top = styled.div`
  ${({ theme }) => css`
    height: 10rem;
    display: grid;
    grid-gap: ${theme.spacings.xsmall};
    grid-template-columns: 1.5fr 0.5fr;
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: white;
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    align-self: start;
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.small};
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const AcessTime = styled.p`
  ${({ theme }) => css`
    color: #3c5882;
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const BenefitsWrapper = styled.div``;

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;
export const Icon = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
  `}
`;
export const Benefits = styled.p`
  ${({ theme }) => css`
    color: white;
    width: 23rem;
    font-size: ${theme.font.sizes.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

export const Bottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.spacings.xsmall};

    ${ButtonStyles.Wrapper} {
      align-self: end;
      font-size: ${theme.font.sizes.xsmall};

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.medium};
      `}
    }
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceInformation = styled.div`
  display: flex;
`;

export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 800;
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: 4rem;
    `}
  `}
`;

export const PromotionalPrice = styled.span`
  ${({ theme }) => css`
    font-weight: 300;
    color: rgba(255, 255, 255, 0.45);
    font-size: ${theme.font.sizes.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

export const Currency = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secundary};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const TypePayment = styled.span`
  ${({ theme }) => css`
    align-self: end;
    color: rgba(255, 255, 255, 0.45);
    font-size: ${theme.font.sizes.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

export const AditionalInformation = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    padding-left: ${theme.spacings.xxsmall};
    color: rgba(255, 255, 255, 0.45);
    font-size: ${theme.font.sizes.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;
