import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { StartProps } from '.';

type WrapperProps = Pick<StartProps, 'color' | 'size'>;

const wrapperModiffiers = {
  small: () => css`
    width: 8rem;
    height: 8rem;
  `,
  medium: () => css`
    width: 10rem;
    height: 10rem;
  `,
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  secundary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size }) => css`
    display: flex;
    background-color: ${theme.colors[color!]};
    position: relative;
    text-align: center;
    justify-content: center;

    ${size && wrapperModiffiers[size]()}
    ${!!color && wrapperModiffiers[color](theme)}

    &:before {
      content: '';
      position: absolute;
      background-color: ${theme.colors[color!]};
      transform: rotate(30deg);
      ${size && wrapperModiffiers[size]()};
    }

    &:after {
      content: '';
      position: absolute;
      background-color: ${theme.colors[color!]};
      transform: rotate(-30deg);
      ${size && wrapperModiffiers[size]()};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    align-self: center;
    transform: rotate(20deg);
    z-index: ${theme.layers.base};
  `}
`;

export const Promotional = styled.span`
  ${({ theme }) => css`
    align-self: center;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 800;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      font-size: 4rem;
    `}
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxsmall};
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
