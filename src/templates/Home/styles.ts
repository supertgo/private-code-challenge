import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main``;

export const SectionCall = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  `}
`;

export const SectionServices = styled.div`
  max-height: 73rem;
  display: flex;
  justify-content: center;

  ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
  `}
`;

export const Services = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`;

export const BannerImage = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`;

export const Image = styled.img`
  width: fit-content;
`;

export const SectionExams = styled.div``;

export const SectionPlans = styled.section`
  ${({ theme }) => css`
    max-height: 150rem;
    padding: ${theme.spacings.xxlarge};
  `}
`;

export const PlansWrapper = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-gap: ${theme.spacings.xxlarge};
    grid-template-columns: 1fr 1fr;
  `}
  `}
`;

export const SectionReview = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xxlarge};
  `}
`;

export const SectionDownload = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    height: 100rem;
    background-color: ${theme.colors.primary};

    ${media.greaterThan('medium')`
      height: 70rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
  `}
`;

export const DownloadBanner = styled.div`
  display: flex;
  position: relative;
  height: 70rem;
  justify-content: center;

  ${media.greaterThan('medium')`
    justify-content: flex-end;
  `}
`;

export const DownloadImage = styled.img`
  ${media.greaterThan('medium')`
    width: fit-content;
    position: absolute;
    height: auto;
    top: -6rem;
  `}
`;

export const DownloadContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge}  0 ${theme.spacings.xxlarge};
    `}
  `}
`;

export const DownloadTitleWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
  `}
`;

export const DownloadContent = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  height: 25rem;
  align-items: center;

  ${media.greaterThan('medium')`
    align-items: start;
  `}
`;
export const DownloadTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secundary};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const DownloadText = styled.div`
  ${({ theme }) => css`
    max-width: 30rem;
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      max-width: 52rem;
      text-align: start;
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const DownloadIcon = styled.img`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.small};
      margin-bottom: 0;
    `}
  `}
`;
