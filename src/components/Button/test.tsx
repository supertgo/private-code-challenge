import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Button>children</Button>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small button', () => {
    renderWithTheme(<Button size="small">children</Button>);

    expect(screen.getByRole('button', { name: /children/i })).toHaveStyle({
      width: '13rem'
    });
  });

  it('should render the medium button', () => {
    renderWithTheme(<Button>children</Button>);

    expect(screen.getByRole('button', { name: /children/i })).toHaveStyle({
      width: '30rem'
    });
  });

  it('should render the small button', () => {
    renderWithTheme(<Button size="large">children</Button>);

    expect(screen.getByRole('button', { name: /children/i })).toHaveStyle({
      width: '38rem'
    });
  });

  it('should render the secundary color', () => {
    renderWithTheme(<Button color="secundary">children</Button>);

    expect(screen.getByRole('button', { name: /children/i })).toHaveStyle({
      backgroundColor: '#3AFFE5'
    });
  });

  it('should render the buttun with icon', () => {
    renderWithTheme(<Button icon>children</Button>);

    expect(screen.getByRole('button', { name: /children/i })).toHaveStyle({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    });
  });
});
