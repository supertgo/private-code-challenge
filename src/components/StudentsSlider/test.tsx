import 'match-media-mock';
import { render } from '@testing-library/react';

import StudentsSlider from '.';

describe('<StudentsSlider />', () => {
  it('should render the heading', () => {
    const { container } = render(<StudentsSlider />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(1);
  });
});
