import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Plan from '.';

const props = {
  acessTime: '1 ano',
  title: 'Plano Recomendado',
  price: '178,80',
  promotionalPrice: '49,90',
  benefits: [
    'Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios, Apostilas e muito mais)',
    '36 aulas ao vivo',
    'Revisão para o ENEM',
    'Grupo no Whatsapp com professores e alunos',
    'Reforço para FUVEST, Unicamp e Vestibulares de Medicina'
  ],
  aditionalInformation: 'Menos de 5 reais por mês :)',
  typePayment: 'ano'
};

describe('<Plan />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Plan color="primary" {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByLabelText(/plan/i)).toHaveStyle({
      backgroundColor: '#252160'
    });
    expect(screen.getByText(`de ${props.price}`)).toBeInTheDocument();
    expect(screen.getByText(`${props.promotionalPrice}`)).toBeInTheDocument();
  });

  it('it should render the white background plan', () => {
    renderWithTheme(<Plan color="white" {...props} />);

    expect(screen.getByLabelText(/plan/i)).toHaveStyle({
      backgroundColor: '#FFFFFF'
    });
  });

  it('it should render the plan with promotional price', () => {
    renderWithTheme(<Plan color="primary" {...props} promotionalPrice="" />);

    expect(screen.getByLabelText(/plan/i)).toHaveStyle({
      backgroundColor: '#252160'
    });
    expect(screen.getByText(`${props.price}`)).toBeInTheDocument();
    expect(
      screen.queryByText(`${props.promotionalPrice}`)
    ).not.toBeInTheDocument();
  });
});
