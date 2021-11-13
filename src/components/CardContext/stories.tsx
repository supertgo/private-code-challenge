import { Story, Meta } from '@storybook/react';
import CardContext, { CardContextProps } from '.';

export default {
  title: 'CardContext',
  component: CardContext
} as Meta;

export const Default: Story<CardContextProps> = (args) => (
  <CardContext {...args} />
);

Default.args = {
  title: '100% MATEMÁTICA',
  subtitle: 'Matemática para quem quer entrar na facul.',
  content:
    'Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.',
  image: '/img/Ilustracao.png',
  aligment: 'top'
};
