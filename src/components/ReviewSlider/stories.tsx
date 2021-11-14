import { Story, Meta } from '@storybook/react';
import ReviewSlider, { ReviewSliderProps } from '.';

const items = [
  {
    review:
      'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    name: 'Amanda Merien',
    occupation: 'Analista junior',
    img: 'img/girl-image.png'
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    name: 'Amanda Merien',
    occupation: 'Analista junior',
    img: 'img/girl-image.png'
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    name: 'Amanda Merien',
    occupation: 'Analista junior',
    img: 'img/girl-image.png'
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    name: 'Amanda Merien',
    occupation: 'Analista junior',
    img: 'img/girl-image.png'
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    name: 'Amanda Merien',
    occupation: 'Analista junior',
    img: 'img/girl-image.png'
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
    name: 'Amanda Merien',
    occupation: 'Analista junior',
    img: 'img/girl-image.png'
  }
];

export default {
  title: 'ReviewSlider',
  component: ReviewSlider,
  args: { items }
} as Meta;

export const Default: Story<ReviewSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ReviewSlider {...args} />
  </div>
);
