import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

export type SectionProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const Section = ({ title, subtitle, children }: SectionProps) => (
  <S.Wrapper>
    <S.Titles>
      <MediaMatch lessThan="medium">
        <Heading size="small" color="blue">
          {title}
        </Heading>
        <Heading size="small" color="primary">
          {subtitle}
        </Heading>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <Heading color="blue">{title}</Heading>
        <Heading size="huge" color="primary">
          {subtitle}
        </Heading>
      </MediaMatch>
    </S.Titles>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Section;
