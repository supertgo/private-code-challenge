import { Story, Meta } from '@storybook/react';
import Plan, { PlanProps } from '.';

export default {
  title: 'Plan',
  component: Plan
} as Meta;

export const Default: Story<PlanProps> = (args) => <Plan {...args} />;

Default.args = {
  color: 'white',
  acessTime: '1 ano',
  title: 'Plano Recomendado',
  price: '178,80',
  promotionalPrice: '49,90',
  benefits: [
    'Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios, Apostilas e muito mais)',
    '36 aulas ao vivo',
    'Revisão para o ENEM',
    'Grupo no Whatsapp com professores e alunos',
    'Reforço para FUVEST, Unicamp e Vestibulares de Medicina'
  ],
  aditionalInformation: 'Menos de 5 reais por mês :)',
  typePayment: 'ano'
};
