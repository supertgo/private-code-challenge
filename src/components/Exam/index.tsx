import * as S from './styles';

export type ExamProps = {
  image: string;
};

const Exam = ({ image }: ExamProps) => (
  <S.Wrapper>
    <S.Image src={image} aria-label="exam image" />
  </S.Wrapper>
);

export default Exam;
