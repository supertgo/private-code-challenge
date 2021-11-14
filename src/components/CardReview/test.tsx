import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import CardReview from '.';

const props = {
  review:
    'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
  name: 'Amanda Merien',
  occupation: 'Analista junior',
  img: 'img/girl-image.png'
};

describe('<CardReview />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardReview {...props} />);

    expect(
      screen.getByRole('heading', { name: /amanda merien/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /amanda merien photo/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /tick icon/i })).toBeInTheDocument();

    expect(screen.getByText(props.occupation)).toBeInTheDocument();

    expect(screen.getByText(props.review)).toBeInTheDocument();
  });
});
