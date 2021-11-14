import { Story, Meta } from '@storybook/react';
import ExamSlider, { ExamSliderProps } from '.';
import items from './mock';

export default {
  title: 'ExamSlider',
  component: ExamSlider,
  args: { items }
} as Meta;

export const Default: Story<ExamSliderProps> = (args) => (
  <ExamSlider {...args} />
);
