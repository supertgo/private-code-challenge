import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Home from '.';

jest.mock('components/Banner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />);

    expect(screen.getByTestId('Mock Banner')).toBeInTheDocument();
  });
});
