import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'hoist-non-react-statics/node_modules/@types/react';
import * as S from './styles';

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  color?: 'primary' | 'secundary';
  size?: 'small' | 'medium' | 'large';
  icon?: boolean;
  children: React.ReactNode;
} & ButtonType;

const Button = ({
  color = 'primary',
  size = 'medium',
  icon = false,
  children
}: ButtonProps) => (
  <S.Wrapper color={color} size={size} icon={icon}>
    <span>{children}</span>
    {icon && size != 'small' && (
      <svg
        width="18"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.02165 9.89163H15.8188L11.5959 14.9638C11.4981 15.0814 11.4245 15.2171 11.3791 15.3632C11.3338 15.5093 11.3177 15.6629 11.3318 15.8152C11.3601 16.1229 11.5095 16.4066 11.7471 16.6041C11.9847 16.8015 12.291 16.8965 12.5986 16.8682C12.9062 16.8398 13.19 16.6904 13.3874 16.4528L19.2041 9.47283C19.2432 9.41731 19.2782 9.35899 19.3088 9.29833C19.3088 9.24016 19.3669 9.20526 19.3902 9.1471C19.4429 9.01371 19.4706 8.87172 19.4716 8.7283C19.4706 8.58487 19.4429 8.44288 19.3902 8.3095C19.3902 8.25133 19.332 8.21643 19.3088 8.15826C19.2782 8.09761 19.2432 8.03928 19.2041 7.98376L13.3874 1.00376C13.278 0.872443 13.1411 0.766836 12.9862 0.694452C12.8314 0.622068 12.6626 0.584686 12.4916 0.584963C12.2198 0.584432 11.9564 0.679099 11.7471 0.85253C11.6293 0.950191 11.5319 1.07013 11.4606 1.20548C11.3892 1.34083 11.3452 1.48893 11.3312 1.6413C11.3171 1.79367 11.3333 1.94732 11.3787 2.09344C11.4241 2.23955 11.4979 2.37528 11.5959 2.49283L15.8188 7.56496H2.02165C1.71311 7.56496 1.41721 7.68753 1.19905 7.9057C0.98088 8.12386 0.858315 8.41976 0.858315 8.7283C0.858315 9.03683 0.98088 9.33273 1.19905 9.5509C1.41721 9.76907 1.71311 9.89163 2.02165 9.89163Z"
          fill={color == 'primary' ? '#FFFFFF' : '#252160'}
        />
      </svg>
    )}
  </S.Wrapper>
);

export default Button;
