import BackButton from 'components/BackButton';

import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';

import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <S.Top>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.ColumnWrapper>
        <S.Column>
          <S.TextWrapper>
            <S.Title>Localização</S.Title>
            <S.Text>Av. Brg. Faria Lima , 1422 São Paulo - SP</S.Text>
          </S.TextWrapper>
        </S.Column>

        <S.Column>
          <S.TextWrapper>
            <S.Title>Fale Conosco</S.Title>
            <S.Text>(22) 4442-0126</S.Text>
            <S.Text>info@digihouse.com</S.Text>
          </S.TextWrapper>
        </S.Column>

        <S.Column>
          <S.TextWrapper>
            <S.Title>Políticas</S.Title>
            <S.Text>Direitos autorais</S.Text>
            <S.Text>Termos de uso</S.Text>
            <S.Text>Políticas de Privacidade</S.Text>
          </S.TextWrapper>
        </S.Column>

        <MediaMatch lessThan="medium">
          <S.StoreWrapper>
            <S.Icon src={'img/play-store.png'} />
            <S.Icon src={'img/apple-store.png'} />
          </S.StoreWrapper>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <S.Socials>
            <S.Icon src={'/img/Vector.png'}></S.Icon>
            <S.Icon src={'/img/Vector-1.png'}></S.Icon>
            <S.Icon src={'/img/Vector-2.png'}></S.Icon>
          </S.Socials>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <S.Copyright>
            <S.CopyIcon src={'/img/copy-icon.png'} />
            <S.Text>Copyright 2021. All Right Reserved </S.Text>
          </S.Copyright>

          <BackButton />
        </MediaMatch>
      </S.ColumnWrapper>
    </S.Top>

    <MediaMatch greaterThan="medium">
      <S.StoreWrapper>
        <S.Icon src={'img/play-store.png'} />
        <S.Icon src={'img/apple-store.png'} />
      </S.StoreWrapper>
      <S.Bottom>
        <S.Copyright>
          <S.CopyIcon src={'/img/copy-icon.png'} />
          <S.Text>Copyright 2021. All Right Reserved </S.Text>
        </S.Copyright>

        <div>
          <S.Socials>
            <S.Icon src={'/img/Vector.png'}></S.Icon>
            <S.Icon src={'/img/Vector-1.png'}></S.Icon>
            <S.Icon src={'/img/Vector-2.png'}></S.Icon>
          </S.Socials>

          <BackButton />
        </div>
      </S.Bottom>
    </MediaMatch>
  </S.Wrapper>
);

export default Footer;
