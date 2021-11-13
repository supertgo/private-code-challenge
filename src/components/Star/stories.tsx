import { Story, Meta } from '@storybook/react';
import Star, { StartProps } from '.';

export default {
  title: 'Star',
  component: Star
} as Meta;

export const Default: Story<StartProps> = (args) => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Star {...args} />
  </div>
);

Default.args = {
  children: '70%'
};
