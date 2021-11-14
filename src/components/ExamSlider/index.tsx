import Exam, { ExamProps } from 'components/Exam';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type ExamSliderProps = {
  items: ExamProps[];
};

const settings: SliderSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 8,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        arrows: false,
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4
      }
    },

    {
      breakpoint: 850,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        slidesToShow: 2.1
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 2.1
      }
    },
    {
      breakpoint: 330,
      settings: {
        arrows: false,
        slidesToShow: 1.5
      }
    }
  ]
};

const ExamSlider = ({ items }: ExamSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items?.map((exam, index) => (
        <Exam key={index} {...exam} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default ExamSlider;
