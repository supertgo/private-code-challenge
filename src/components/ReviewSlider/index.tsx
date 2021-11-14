import { ArrowForwardIos } from '@styled-icons/material-outlined/ArrowForwardIos';
import { ArrowBackIos } from '@styled-icons/material-outlined/ArrowBackIos';
import CardReview, { CardReviewProps } from 'components/CardReview';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type ReviewSliderProps = {
  items: CardReviewProps[];
};

const settings: SliderSettings = {
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowForwardIos aria-label="next reviews" />,
  prevArrow: <ArrowBackIos aria-label="previous reviews" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.5
      }
    },

    {
      breakpoint: 850,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        slidesToShow: 1.5
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    }
  ]
};

const ReviewSlider = ({ items }: ReviewSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items?.map((review) => (
        <CardReview key={review.name} {...review} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default ReviewSlider;
