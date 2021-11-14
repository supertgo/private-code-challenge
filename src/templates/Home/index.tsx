import Banner from 'components/Banner';
import Button from 'components/Button';
import CardContext from 'components/CardContext';
import MediaMatch from 'components/MediaMatch';
import Plan from 'components/Plan';
import ReviewSlider from 'components/ReviewSlider';
import Section from 'components/Section';
import Service from 'components/Service';
import Base from 'templates/Base';
import ExamSlider from 'components/ExamSlider';

import mockReview from 'components/ReviewSlider/mock';
import mockExams from 'components/ExamSlider/mock';

import * as S from './styles';

const Home = () => (
  <S.Wrapper>
    <Base>
      <>
        <Banner />

        <S.SectionExams>
          <ExamSlider items={mockExams} />
        </S.SectionExams>
        <S.SectionServices>
          <S.Services>
            <Service
              img="img/group-56.png"
              title="100% focado na Matemática"
              content="Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular."
            />

            <Service
              img="img/group-56.png"
              title="100% focado na Matemática"
              content="Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular."
            />

            <Service
              img="img/group-56.png"
              title="100% focado na Matemática"
              content="Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular."
            />

            <Button icon>Quero ser aprovado</Button>
          </S.Services>

          <S.BannerImage>
            <S.Image src="img/pretty-teenager-happy-to-be-back-at-university.png" />
          </S.BannerImage>
        </S.SectionServices>
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

        <S.SectionPlans>
          <Section title="NOSSOS PLANOS" subtitle="Invista no seu futuro">
            <S.PlansWrapper>
              <Plan
                color="primary"
                acessTime="1 ano"
                title="Plano Recomendado"
                price="178,80"
                benefits={[
                  'Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios, Apostilas e muito mais)',
                  '36 aulas ao vivo',
                  'Revisão para o ENEM',
                  'Grupo no Whatsapp com professores e alunos',
                  'Reforço para FUVEST, Unicamp e Vestibulares de Medicina'
                ]}
                promotionalPrice="49,90"
                aditionalInformation="Menos de 5 reais por mês :)"
                typePayment="ano"
              />

              <Plan
                color="white"
                acessTime="1 ano"
                title="Plano Recomendado"
                price="178,80"
                benefits={[
                  'Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios, Apostilas e muito mais)',
                  '36 aulas ao vivo',
                  'Revisão para o ENEM',
                  'Grupo no Whatsapp com professores e alunos',
                  'Reforço para FUVEST, Unicamp e Vestibulares de Medicina'
                ]}
                promotionalPrice="49,90"
                aditionalInformation="Menos de 5 reais por mês :)"
                typePayment="ano"
              />
            </S.PlansWrapper>
          </Section>
        </S.SectionPlans>

        <S.SectionReview>
          <Section
            title="DEPOIMENTOS"
            subtitle="Recomendados por quem é expert no assunto"
          >
            <></>
          </Section>

          <ReviewSlider items={mockReview} />
        </S.SectionReview>

        <S.SectionDownload>
          <S.DownloadBanner>
            <S.DownloadImage src={'img/phone.png'} />
          </S.DownloadBanner>
          <S.DownloadContentWrapper>
            <S.DownloadContent>
              <S.DownloadTitleWrapper>
                <S.DownloadIcon
                  src={'img/robbot.png'}
                  aria-label="robbot head"
                />
                <S.DownloadTitle>
                  Baixe aulas no app e estude offline
                </S.DownloadTitle>
              </S.DownloadTitleWrapper>

              <S.DownloadText>
                Receba lembretes no seu celular e tenha a facilidade de estudar
                a qualquer hora e de qualquer lugar. Baixe nosso app e confira.
              </S.DownloadText>

              <Button icon color="secundary">
                Conheça nosso aplicativo
              </Button>
            </S.DownloadContent>
          </S.DownloadContentWrapper>
        </S.SectionDownload>
      </>
    </Base>
  </S.Wrapper>
);

export default Home;
