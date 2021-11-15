import Link from 'next/link';
import { useState } from 'react';
import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';

import { Menu as MenuIcon } from '@styled-icons/entypo/Menu';
import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close';

import * as S from './styles';
import Button from 'components/Button';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <MediaMatch lessThan="medium">
          <Logo hiddenOnMobile />
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" size={22} />
          </S.IconWrapper>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <Logo />
        </MediaMatch>
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.MenuNav>
          <Link href="#" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="#" passHref>
            <S.MenuLink>Quem somos</S.MenuLink>
          </Link>

          <Link href="#planos" passHref>
            <S.MenuLink>Planos</S.MenuLink>
          </Link>

          <Link href="#footer" passHref>
            <S.MenuLink>Fale conosco</S.MenuLink>
          </Link>
        </S.MenuNav>
        <Button size="small">Entrar</Button>
      </S.MenuGroup>

      <MediaMatch greaterThan="medium"></MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
          size={22}
          color="#FFFFFF"
        />

        <S.MenuNav onClick={() => setIsOpen(false)} aria-label="menu nav">
          <Link href="#" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="#" passHref>
            <S.MenuLink>Quem somos</S.MenuLink>
          </Link>

          <Link href="#planos" passHref>
            <S.MenuLink>Planos</S.MenuLink>
          </Link>

          <Link href="#footer" passHref>
            <S.MenuLink>Fale conosco</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
