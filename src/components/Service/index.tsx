import Heading from 'components/Heading';
import * as S from './styles';

export type ServiceProps = {
  img: string;
  title: string;
  content: string;
};

const Service = ({ img, title, content }: ServiceProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <S.Image aria-label="service image" src={img} />
      <S.Circles src={'/img/circles-service.png'} />
    </S.ImageWrapper>

    <div>
      <Heading size="small">{title}</Heading>
      <S.Content>{content}</S.Content>
    </div>
  </S.Wrapper>
);

export default Service;
