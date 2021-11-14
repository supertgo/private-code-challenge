import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Section from '.';

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Heading"></div>;
    }
  };
});

const props = {
  title: 'title',
  subtitle: 'subtitle'
};

describe('<Section />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Section {...props}>Children</Section>);

    expect(screen.getAllByTestId('Mock Heading')).toHaveLength(4);
    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
