import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import Slider, { SliderProps } from '.';
import { Settings } from 'react-slick';

export default {
  title: 'Slider',
  component: Slider
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </Slider>
);

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
};
