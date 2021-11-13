import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('medium')`
    align-items: start;
  
  `}
`;

export const Titles = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};

    h2 {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Content = styled.div``;
