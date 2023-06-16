import { AuthContextProvider } from './context/AuthContext';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MyRoutes } from './routers/routes';
import startSound from './assets/sounds/start.mp3';
import './App.css';

export const App = () => {

  return (
    <>
      <AuthContextProvider>
        <Header />
        <MyRoutes />
        <Footer />
      </AuthContextProvider>
    </>
  );
};
