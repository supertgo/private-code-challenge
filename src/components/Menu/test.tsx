import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });

  it('dawda', () => {
    renderWithTheme(<Menu />);
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should close menu and clicked', () => {
    renderWithTheme(<Menu />);
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });
    const menuNav = screen.getByLabelText('menu nav');

    fireEvent.click(menuNav);
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
});
