import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = Pick<ButtonProps, 'size' | 'color' | 'icon'>;

const wrapperModiffiers = {
  small: () => css`
    width: 13rem;
  `,
  medium: () => css`
    width: 30rem;
  `,
  large: () => css`
    width: 38rem;
  `,

  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  secundary: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,

  withIcon: () => css`
    display: flex;
    flex-direction: row;
    justify-content: center;

    span {
      padding-right: 3.1rem;
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, size, icon }) => css`
    border: none;
    height: 4.3rem;
    align-items: center;
    text-align: center;
    font-size: ${theme.font.sizes.large};
    border-radius: ${theme.border.small};
    background-color: ${theme.colors[color!]};

    ${icon && size !== 'small' && wrapperModiffiers.withIcon()};
    ${!!size && wrapperModiffiers[size]()};
    ${!!color && wrapperModiffiers[color](theme)};
  `}
`;

export const Icon = styled.div``;
