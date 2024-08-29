import React from 'react';
import { Header127 } from './Hero.Component';
import ContactFormComponent from './ContactForm.Component';
import ExpandHorizonsComponent from './ExpandHorizons.Component';
import TransformingComponent from './Transforming.Component';
import BlogSliderComponent from './GlobalInsightsSliderComponent';


const HomeComponent: React.FC = () => {
  return (
    <>
    <Header127 />
    <ExpandHorizonsComponent />
    <BlogSliderComponent />
    <TransformingComponent />
    <ContactFormComponent />
    </>
  );
};

export default HomeComponent;