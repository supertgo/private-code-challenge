import * as S from './styles';

export type HeadingProps = {
  size?: 'small' | 'medium' | 'huge';
  color?: 'primary' | 'blue';
  children: string;
};

const Heading = ({
  size = 'medium',
  color = 'primary',
  children
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
);

export default Heading;
