import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      padding-right: 1rem;
    `}

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide {
      margin-left: 2rem;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xxsmall};
        width: 37rem;
      }
    `}

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xxsmall};
        width: 37rem;
       
      }
      .slick-list {
        margin: 0 -${theme.spacings.xxsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.primary};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      z-index: ${theme.layers.base};
    }

    .slick-next {
      right: ${theme.spacings.xxsmall};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
