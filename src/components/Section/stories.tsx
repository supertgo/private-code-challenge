import { Story, Meta } from '@storybook/react';
import Section, { SectionProps } from '.';

export default {
  title: 'Section',
  component: Section
} as Meta;

export const Default: Story<SectionProps> = (args) => <Section {...args} />;

Default.args = {
  title: 'title',
  subtitle: 'subtitle',
  children: <div>Children</div>
};
