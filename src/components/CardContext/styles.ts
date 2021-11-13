import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { CardContextProps } from '.';

type WrapperProps = Pick<CardContextProps, 'aligment'>;

const wrapperModiffiers = {
  top: (theme: DefaultTheme) => css`
    flex-direction: column;

    ${Content} {
      margin-bottom: ${theme.spacings.medium};
    }
  `,
  bottom: (theme: DefaultTheme) => css`
    flex-direction: column-reverse;

    ${BannerImage} {
      margin-bottom: ${theme.spacings.medium};
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, aligment }) => css`
    align-items: center;
    display: flex;
    max-width: 30rem;
    text-align: center;
    padding: ${theme.spacings.small} ${theme.spacings.medium}
      ${theme.spacings.small} ${theme.spacings.medium};

    ${wrapperModiffiers[aligment!](theme)};

    ${media.greaterThan('medium')`
      align-items: start;
      max-width: 50rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const BannerImage = styled.div`
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;
