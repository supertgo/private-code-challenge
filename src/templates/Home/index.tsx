import Banner from 'components/Banner';
import CardContext from 'components/CardContext';
import MediaMatch from 'components/MediaMatch';
import Base from 'templates/Base';
import * as S from './styles';

const Home = () => (
  <S.Wrapper>
    <Base>
      <>
        <Banner />
        <S.SectionCall>
          <MediaMatch lessThan="medium">
            <CardContext
              image="/img/image-45.png"
              title="100% MATEMÁTICA"
              subtitle="Matemática para quem quer entrar na facul."
              content="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
            ></CardContext>
            <CardContext
              image="/img/image-43.png"
              title="QUER SER APROVADO?"
              subtitle="Se seu foco é ser aprovado, nós estamos aqui por você."
              content="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
            ></CardContext>
          </MediaMatch>

          <MediaMatch greaterThan="medium">
            <CardContext
              aligment="bottom"
              image="/img/image-45.png"
              title="QUER SER APROVADO?"
              subtitle="Se seu foco é ser aprovado, nós estamos aqui por você."
              content="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
            ></CardContext>
          </MediaMatch>

          <MediaMatch greaterThan="medium">
            <CardContext
              image="/img/image-43.png"
              title="100% MATEMÁTICA"
              subtitle="Matemática para quem quer entrar na facul."
              content="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
            ></CardContext>
          </MediaMatch>
        </S.SectionCall>
      </>
    </Base>
  </S.Wrapper>
);

export default Home;
