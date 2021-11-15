import Base from 'templates/Base';
import Banner from 'components/Banner';
import Button from 'components/Button';
import Section from 'components/Section';
import MediaMatch from 'components/MediaMatch';
import ExamSlider from 'components/ExamSlider';
import ReviewSlider from 'components/ReviewSlider';
import StudentsSlider from 'components/StudentsSlider';

import { ExamProps } from 'components/Exam';
import { Container } from 'components/Container';
import { CardReviewProps } from 'components/CardReview';

import Plan, { PlanProps } from 'components/Plan';
import Service, { ServiceProps } from 'components/Service';
import CardContext, { CardContextProps } from 'components/CardContext';

import * as S from './styles';

export type HomeTemplateProps = {
  reviews: CardReviewProps[];
  exams: ExamProps[];
  plans: PlanProps[];
  services: ServiceProps[];
  calls: CardContextProps[];
};

const Home = ({
  reviews,
  exams,
  plans,
  services,
  calls
}: HomeTemplateProps) => (
  <S.Wrapper>
    <Base>
      <>
        <S.SectionBanner id="home">
          <Container>
            <Banner />
          </Container>
        </S.SectionBanner>

        <S.SectionExams>
          <Container>
            <ExamSlider items={exams} />
          </Container>
        </S.SectionExams>

        <Container>
          <S.SectionServices>
            <S.Services>
              {services.map(({ img, title, content }) => (
                <Service
                  key={title}
                  img={img}
                  title={title}
                  content={content}
                />
              ))}

              <Button icon>Quero ser aprovado</Button>
            </S.Services>

            <S.BannerImage>
              <StudentsSlider />
            </S.BannerImage>
          </S.SectionServices>
        </Container>

        <S.SectionCall>
          <Container>
            <MediaMatch lessThan="medium">
              {calls.map(({ image, title, subtitle, content }) => (
                <CardContext
                  key={title}
                  title={title}
                  image={image}
                  subtitle={subtitle}
                  content={content}
                ></CardContext>
              ))}
            </MediaMatch>

            <MediaMatch greaterThan="medium">
              <CardContext
                aligment="bottom"
                image="/img/image-45.png"
                title="QUER SER APR APROVADO?"
                subtitle="Se seu foco é ser aprovado, nós estamos aqui por você."
                content="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
              ></CardContext>
            </MediaMatch>

            <MediaMatch greaterThan="medium">
              <CardContext
                title="100% MATEMÁTICA"
                subtitle="Matemática para quem quer entrar na facul."
                content="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
                image="/img/image-43.png"
              ></CardContext>
            </MediaMatch>
          </Container>
        </S.SectionCall>

        <Container>
          <S.SectionPlans id="planos">
            <Section title="NOSSOS PLANOS" subtitle="Invista no seu futuro">
              <S.PlansWrapper>
                <Plan
                  color="primary"
                  acessTime={plans[0].acessTime}
                  title={plans[0].title}
                  price={plans[0].price}
                  promotionalPrice={plans[0].promotionalPrice}
                  benefits={plans[0].benefits}
                  aditionalInformation={plans[0].aditionalInformation}
                  typePayment={plans[0].typePayment}
                />

                <Plan
                  color="white"
                  acessTime={plans[1].acessTime}
                  title={plans[1].title}
                  price={plans[1].price}
                  benefits={plans[1].benefits}
                  typePayment={plans[1].typePayment}
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

            <ReviewSlider items={reviews} />
          </S.SectionReview>
        </Container>

        <S.SectionDownload>
          <S.DownloadBanner>
            <S.DownloadImage src={'img/phone.png'} aria-label="Phone image" />
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
