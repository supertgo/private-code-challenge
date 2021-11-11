import styled, { css } from 'styled-components';

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    height: 1rem;
    background: rgba(84, 84, 212, 0.34);
    border: 0;
  `}
`;
