import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 34rem;
    padding: ${theme.spacings.small};
  `}
`;

export const Rating = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    svg {
      color: ${theme.colors.orange};
    }
  `}
`;

export const Review = styled.div`
  ${({ theme }) => css`
    max-height: 8rem;
    max-width: 30rem;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Information = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr 1fr;
`;

export const PhotoWrapper = styled.div``;

export const Photo = styled.img``;

export const NameWrapper = styled.div``;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Icon = styled.img``;
