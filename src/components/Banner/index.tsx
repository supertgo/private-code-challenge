import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

const Banner = () => (
  <S.Wrapper>
    <S.BannerContent>
      <S.Content>
        <S.TitleWrapper>
          <S.Image src={'img/robbot.png'} />
          <S.Title>Seja aprovado no Enem e Vestibulares :/</S.Title>
        </S.TitleWrapper>

        <S.Heading>
          Você escolhe o que aprender<b>.</b>
        </S.Heading>

        <div>
          <S.Text>
            Aqui você terá toda assistência que precisa com materiais
            desenvolvido por <b>mestres e doutores em matemática</b>
          </S.Text>
        </div>

        <MediaMatch lessThan="medium">
          <Button color="secundary" icon>
            Veja nossos planos
          </Button>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <Button color="secundary" icon>
            Veja nossos planos
          </Button>
        </MediaMatch>
      </S.Content>
    </S.BannerContent>
    <S.BannerBlock>
      <S.BannerImage src={'img/Ilustracao.png'} />
    </S.BannerBlock>
  </S.Wrapper>
);

export default Banner;
