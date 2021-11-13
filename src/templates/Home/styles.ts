import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main``;

export const SectionCall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;
