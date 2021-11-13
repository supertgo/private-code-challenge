import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    max-height: 82rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
    `};
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    background-color: ${theme.colors.primary};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;

    div {
      margin: ${theme.spacings.medium} 0 ${theme.spacings.xxsmall} 0;
      padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall} 0;
      max-width: 51rem;
    }

    ${ButtonStyles.Wrapper} {
      align-self: flex-start;
    }

    ${media.greaterThan('medium')`
      align-items: start;
      padding-left: ${theme.spacings.xxlarge};
    `}

    ${media.lessThan('medium')`
    
      ${ButtonStyles.Wrapper} {
        width: 25rem;
      }
    `}
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 4rem;
    margin-right: ${theme.spacings.small};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secundary};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;

    ${media.lessThan('medium')`
      ${Title} {
        margin-top: ${theme.spacings.small};
      }
    `}

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    max-width: 53rem;
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.huge};

    b {
      color: ${theme.colors.secundary};
    }

    ${media.greaterThan('medium')`
      text-align: start;
      font-size: 6rem;
    `}
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall} 0;

    ${media.greaterThan('medium')`
      text-align: start;
    `}
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.primary};

    ${media.lessThan('medium')`
      display: none;
    `};
  `}
`;

export const BannerImage = styled.img`
  width: 100%;
`;
