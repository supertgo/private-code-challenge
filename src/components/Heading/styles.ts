import styled, { css, DefaultTheme } from 'styled-components';

import { HeadingProps } from '.';

type WrapperProps = Pick<HeadingProps, 'color' | 'size'>;

const wrapperModiffiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  huge: () => css`
    font-size: 4rem;
  `
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.bold};
    font-family: 'Nunito', sans-serif;

    ${!!size && wrapperModiffiers[size](theme)};
  `}
`;
