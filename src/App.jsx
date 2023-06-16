import { AuthContextProvider } from './context/AuthContext';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MyRoutes } from './routers/routes';
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
