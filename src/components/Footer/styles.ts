import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as BackButtonStyles from 'components/BackButton/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.medium};
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    ${media.greaterThan('medium')`
    max-width: 117rem;
    flex-direction: row;
  `}

    ${BackButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    margin-bottom: 5rem;
    max-width: 17rem;
  `}

  ${media.greaterThan('medium')`
    align-self: start;
  `}
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 23rem;
  height: 13rem;
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
    ${Text} {
      &:not(:last-child) {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
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
    align-items: center;
    flex-direction: column;
    margin-top: ${theme.spacings.xlarge};

    ${media.lessThan('medium')`
      ${CopyIcon} {
        margin-bottom: 2rem;
      }
    `}

    ${media.greaterThan('medium')`
      flex-direction: row;

      ${CopyIcon} {
        margin-right: 2rem;
      }
    `}
  `}
`;

export const CopyIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

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
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid rgba(84, 84, 212, 0.34);

    ${media.greaterThan('medium')`
    div {
      align-items: center;
      display: flex;
    }

    ${BackButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
      margin-left: ${theme.spacings.xlarge};
    }
  `}
  `}
`;
