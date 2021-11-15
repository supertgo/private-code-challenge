import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { Container } from 'components/Container';

import * as S from './styles';

export type BaseProps = {
  children: JSX.Element;
};

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    {children}

    <Container>
      <Footer />
    </Container>
  </S.Wrapper>
);

export default Base;
