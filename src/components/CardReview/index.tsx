import Heading from 'components/Heading';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { StarHalf } from '@styled-icons/bootstrap/StarHalf';
import * as S from './styles';

export type CardReviewProps = {
  img: string;
  name: string;
  occupation: string;
  review: string;
};

const CardReview = ({ img, name, occupation, review }: CardReviewProps) => (
  <S.Wrapper>
    <S.Rating>
      <StarFill size={20} />
      <StarFill size={20} />
      <StarFill size={20} />
      <StarFill size={20} />
      <StarHalf size={20} />
    </S.Rating>
    <S.Review>{review}</S.Review>
    <S.Information>
      <S.PhotoWrapper>
        <S.Photo src={img} aria-label={`${name} photo`} />
      </S.PhotoWrapper>

      <S.NameWrapper>
        <Heading size="small">{name}</Heading>
        <S.Text>{occupation}</S.Text>
      </S.NameWrapper>

      <S.PhotoWrapper>
        <S.Icon src="img/ticks.png" aria-label="tick icon" />
      </S.PhotoWrapper>
    </S.Information>
  </S.Wrapper>
);

export default CardReview;
