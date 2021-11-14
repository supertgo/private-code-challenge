import { Story, Meta } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  children: 'Depoimentos',
  color: 'blue'
};

export const Small: Story<HeadingProps> = (args) => <Heading {...args} />;

Small.args = {
  children: 'Recomendados por quem é expert no assunto',
  size: 'small'
};

export const Huge: Story<HeadingProps> = (args) => <Heading {...args} />;

Huge.args = {
  children: 'Recomendados por quem é expert no assunto',
  size: 'huge'
};
