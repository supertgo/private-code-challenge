import { render, screen } from '@testing-library/react';

import Exam from '.';

const props = {
  image: '/img/enem.png'
};

describe('<Exam />', () => {
  it('should render the heading', () => {
    const { container } = render(<Exam {...props} />);

    expect(screen.getByRole('img', { name: /exam image/i })).toMatchSnapshot();

    expect(container.firstChild).toMatchSnapshot();
  });
});
