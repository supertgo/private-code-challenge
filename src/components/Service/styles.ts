import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content:: center;
    align-items: center;
    max-width: 25rem;

    ${media.greaterThan('medium')`
      display: grid;
      grid-gap: ${theme.spacings.xxsmall};
      grid-template-columns: 0.3fr 1.7fr;
      max-width: 40rem;
      align-items: flex-start;
    `}
  `}
`;

export const ImageWrapper = styled.div`
  ${media.greaterThan('medium')`
    align-items: center;
    display: flex;
    flex-direction: column
  `}
`;

export const Image = styled.img`
  max-width: 6rem;
`;

export const Circles = styled.img`
  display: none;
  height: 6rem;
  width: 0.3rem;

  ${media.greaterThan('medium')`
    display: block;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      text-align: start;
  `}
  `}
`;
