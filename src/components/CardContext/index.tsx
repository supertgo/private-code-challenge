import Section from 'components/Section';

import * as S from './styles';

export type CardContextProps = {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  aligment?: 'top' | 'bottom';
};

const CardContext = ({
  title,
  subtitle,
  aligment = 'top',
  content,
  image
}: CardContextProps) => (
  <S.Wrapper aligment={aligment}>
    <Section title={title} subtitle={subtitle}>
      <S.Content>{content}</S.Content>
    </Section>
    <S.BannerImage>
      <S.Image src={image} aria-label="A boy writing down" />
    </S.BannerImage>
  </S.Wrapper>
);

export default CardContext;
