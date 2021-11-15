import Home, { HomeTemplateProps } from 'templates/Home';

import mockReview from 'components/ReviewSlider/mock';
import mockExams from 'components/ExamSlider/mock';
import mockPlans from 'components/Plan/mock';
import mockServices from 'components/Service/mock';
import mockCalls from 'components/CardContext/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      reviews: mockReview,
      exams: mockExams,
      plans: mockPlans,
      services: mockServices,
      calls: mockCalls
    }
  };
}
