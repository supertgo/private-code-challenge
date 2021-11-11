import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Footer />);

    expect(screen.getByText('Localização')).toBeInTheDocument();
    expect(screen.getByText(/fale conosco/i)).toBeInTheDocument();
    expect(screen.getByText('Políticas')).toBeInTheDocument();
  });
});
