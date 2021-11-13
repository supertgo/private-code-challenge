import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Base from '.';

describe('<Base />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Base>
        <div>Base</div>
      </Base>
    );

    expect(screen.getByText(/base/i)).toBeInTheDocument();
  });
});
