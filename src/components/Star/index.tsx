import * as S from './styles';

export type StartProps = {
  color?: 'primary' | 'secundary';
  size?: 'small' | 'medium';
  children?: string;
};

const Star = ({
  color = 'secundary',
  size = 'medium',
  children
}: StartProps) => (
  <S.Wrapper aria-label="star" color={color} size={size}>
    <S.Content>
      <S.Promotional>{children}</S.Promotional>
      <S.Text>de desconto</S.Text>
    </S.Content>
  </S.Wrapper>
);

export default Star;
