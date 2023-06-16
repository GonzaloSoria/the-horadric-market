import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Donate } from '../pages/Donate';
import { Info } from '../pages/Info';
import { Objects } from '../pages/Objects';
import { Profile } from '../pages/Profile';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/objects" element={<Objects />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/donate" element={<Donate />}/>
            <Route path="/profile" element={<Profile />}/>
        </Routes>
    </BrowserRouter>
  )
}
