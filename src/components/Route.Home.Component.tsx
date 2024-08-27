import React from 'react';
import { Header127 } from './Hero.Component';

const HomeComponent: React.FC = () => {
  return (
    <div className="my-component">
    <h1 className="text-2xl font-bold">HomeComponent</h1>
    <p className="text-gray-700">
      This is a basic React component built with Vite and TypeScript.
    </p>
  </div>
  );
};

export default HomeComponent;