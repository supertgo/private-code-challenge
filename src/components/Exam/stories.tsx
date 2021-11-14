import { Story, Meta } from '@storybook/react';
import Exam, { ExamProps } from '.';

export default {
  title: 'Exam',
  component: Exam
} as Meta;

export const Default: Story<ExamProps> = (args) => <Exam {...args} />;

Default.args = {
  image: '/img/enem.png'
};
