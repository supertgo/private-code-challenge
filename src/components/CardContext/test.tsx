import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import CardContext from '.';

jest.mock('components/Section', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Section"></div>;
    }
  };
});

const props = {
  title: '100% MATEMÁTICA',
  subtitle: 'Matemática para quem quer entrar na facul.',
  content:
    'Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.',
  image: '/img/Ilustracao.png'
};

describe('<CardContext />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardContext {...props} />);

    expect(screen.getByTestId('Mock Section')).toBeInTheDocument();
  });
});
