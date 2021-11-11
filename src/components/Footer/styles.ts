import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  ${media.greaterThan('medium')`
    max-width: 117rem;
  `}
`;

export const LogoWrapper = styled.div`
  width: 17rem;

  ${media.greaterThan('medium')`
    align-self: start;
  `}
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.small};
    `}
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
  `}
`;

export const Socials = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    height: ${theme.spacings.small};
    width: 11.5rem;
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const Icon = styled.img``;

export const Copyright = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const CopyIcon = styled.img;

export const StoreWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: cent er;

  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: start;
  `}
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid rgba(84, 84, 212, 0.34);

  ${media.greaterThan('medium')`
    max-width: 117rem;
  `}
`;
