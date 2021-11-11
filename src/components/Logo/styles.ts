import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    svg {
      padding: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Image = styled.img`
  ${media.greaterThan('medium')`
    width: 20rem;
    `}
`;
