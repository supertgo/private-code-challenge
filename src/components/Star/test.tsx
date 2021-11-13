import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Star from '.';

describe('<Star />', () => {
  it('should render the default configs', () => {
    const { container } = renderWithTheme(<Star>70%</Star>);

    expect(screen.getByText('70%')).toBeInTheDocument();
    expect(screen.getByLabelText(/star/i)).toHaveStyle({
      backgroundColor: '#3AFFE5',
      width: '10rem',
      height: '10rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the primary color when passed', () => {
    renderWithTheme(<Star color="primary">70%</Star>);
    expect(screen.getByLabelText(/star/i)).toHaveStyle({
      backgroundColor: '#252160'
    });
  });

  it('it should render the small start when passed small', () => {
    renderWithTheme(<Star size="small">70%</Star>);
    expect(screen.getByLabelText(/star/i)).toHaveStyle({
      width: '8rem',
      height: '8rem'
    });
  });
});
