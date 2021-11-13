import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: none;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    padding: ${theme.spacings.xxsmall};
  `}
`;
