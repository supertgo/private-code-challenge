import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

const settings: SliderSettings = {
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  speed: 2000
};

const StudentsSlider = () => (
  <S.Wrapper>
    <Slider settings={settings}>
      <S.Image src={'img/pretty-teenager-happy-to-be-back-at-university.png'} />
      <S.Image src={'img/pretty-teenager-happy-to-be-back-at-university.png'} />
    </Slider>
  </S.Wrapper>
);

export default StudentsSlider;
