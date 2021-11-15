import { ArrowUp2 } from '@styled-icons/icomoon/ArrowUp2';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type BackButtonProps = ButtonType;

const BackButton: React.ForwardRefRenderFunction<BackButtonProps> = () => (
  <S.Wrapper onClick={() => window.scrollTo(0, 0)}>
    <ArrowUp2 aria-label="Arrow Icon" size={30} color="white" />
  </S.Wrapper>
);

export default BackButton;
