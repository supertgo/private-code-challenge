import { Story, Meta } from '@storybook/react';
import Service, { ServiceProps } from '.';

export default {
  title: 'Service',
  component: Service
} as Meta;

export const Default: Story<ServiceProps> = (args) => <Service {...args} />;

Default.args = {
  img: 'img/group-56.png',
  title: '100% focado na Matemática',
  content:
    'Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular.'
};
