import { Story, Meta } from '@storybook/react';
import CardReview, { CardReviewProps } from '.';

export default {
  title: 'CardReview',
  component: CardReview
} as Meta;

export const Default: Story<CardReviewProps> = (args) => (
  <CardReview {...args} />
);

Default.args = {
  review:
    'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
  name: 'Amanda Merien',
  occupation: 'Analista junior',
  img: 'img/girl-image.png'
};
