import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/helper';

import ReviewSlider from '.';

import props from './mock';

describe('<ReviewSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ReviewSlider items={props} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(3);
  });
});
