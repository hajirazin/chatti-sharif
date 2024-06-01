import React from 'react';
import LanguageSelection from './components/LanguageSelection';
import './index.css';
import { App, Page, Navbar } from 'konsta/react';

const MyApp: React.FC = () => {
  return (
    <App theme="material">
      <Page>
        <Navbar title="Chhatti sharif" />
        <LanguageSelection />
      </Page>
    </App>
  );
};

export default MyApp;
