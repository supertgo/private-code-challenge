import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    width: 100%;
    ${media.greaterThan('medium')`

			margin-left: ${theme.spacings.small};
		`};
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    margin: 0.3rem ${theme.spacings.small} 0;
  `}
`;

export const MenuGroup = styled.div``;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.primary};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    ${MenuLink} {
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;
