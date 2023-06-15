import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LoginContextProvider } from './context/LoginContext';
import { Home } from './routes/Home';
import './App.css';

export const App = () => {

  return (
    <>
      <BrowserRouter>
      <LoginContextProvider>
        <Header />
        <Home />
        <Footer />
      </LoginContextProvider>
      </BrowserRouter>
    </>
  );
};
