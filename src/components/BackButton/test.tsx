import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import BackButton from '.';

describe('<BackButton />', () => {
  it('should render the icon', () => {
    renderWithTheme(<BackButton />);

    expect(screen.getByLabelText(/arrow icon/i)).toBeInTheDocument();
  });
});
