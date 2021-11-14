import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Service from '.';

const props = {
  img: '/img/image-45.png',
  title: 'title',
  content: 'content'
};

describe('<Service />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Service {...props} />);

    expect(
      screen.getByRole('img', { name: /service image/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();

    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
