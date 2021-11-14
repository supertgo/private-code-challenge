import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the default heading', () => {
    renderWithTheme(<Heading>children</Heading>);

    expect(
      screen.getByRole('heading', { name: /children/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /children/i })).toHaveStyle({
      color: '#252160',
      fontSize: '2.8rem'
    });
  });

  it('should render the small heading', () => {
    renderWithTheme(<Heading size="small">children</Heading>);

    expect(screen.getByRole('heading', { name: /children/i })).toHaveStyle({
      'font-size': '1.8rem'
    });
  });

  it('should render the huge heading', () => {
    renderWithTheme(<Heading size="huge">children</Heading>);

    expect(screen.getByRole('heading', { name: /children/i })).toHaveStyle({
      'font-size': '4rem'
    });
  });

  it('should render the secundary color when passed', () => {
    renderWithTheme(<Heading color="blue">children</Heading>);

    expect(screen.getByRole('heading', { name: /children/i })).toHaveStyle({
      color: '#32B5FF'
    });
  });
});
