import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Section from '.';

const props = {
  title: 'title section',
  subtitle: 'subtitle'
};

describe('<Section />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Section {...props}>Children</Section>);

    expect(
      screen.getByRole('heading', { name: /title section/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /subtitle/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
