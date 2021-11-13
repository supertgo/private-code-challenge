import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Banner from '.';

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner />);

    expect(
      screen.getByRole('heading', { name: /Você escolhe o que aprender/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Aqui você terá toda assistência que precisa com materiais desenvolvido por'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText('Seja aprovado no Enem e Vestibulares :/')
    ).toBeInTheDocument();
  });
});
