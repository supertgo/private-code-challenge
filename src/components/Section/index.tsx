import Heading from 'components/Heading';
import * as S from './styles';

export type SectionProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const Section = ({ title, subtitle, children }: SectionProps) => (
  <S.Wrapper>
    <S.Titles>
      <Heading size="small" color="blue">
        {title}
      </Heading>
      <Heading size="small" color="primary">
        {subtitle}
      </Heading>
    </S.Titles>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Section;
