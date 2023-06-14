import './App.css'
import { Benefits } from './components/Benefits';
import { Community } from './components/Community';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatsIs } from './components/WhatsIs';

export const App = () => {

  return (
    <>
      <Header />
      <Hero />
      <WhatsIs />
      <Benefits />
      <Community />
    </>
  );
};
