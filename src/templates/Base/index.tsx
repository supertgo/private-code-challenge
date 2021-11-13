import Footer from 'components/Footer';
import Menu from 'components/Menu';
import * as S from './styles';

export type BaseProps = {
  children: JSX.Element;
};

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Menu />
    {children}
    <Footer />
  </S.Wrapper>
);

export default Base;
