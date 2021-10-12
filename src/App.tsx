import React from 'react';

import './css/reset.css';
import './App.css';

import { HeadTags } from './components/HeadTags';
import { Intro } from './components/Intro';

export function App() {
  return (
    <>
      <HeadTags />
      <Intro />
    </>
  );
}