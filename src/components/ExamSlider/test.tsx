import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/helper';

import mock from './mock';

import ExamSlider from '.';

describe('<ExamSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ExamSlider items={mock} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(8);
  });
});
