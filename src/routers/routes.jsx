import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Donate } from '../pages/Donate'
import { Info } from '../pages/Info'
import { Objects } from '../pages/Objects'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/objects" element={<Objects />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/donate" element={<Donate />}/>
        </Routes>
    </BrowserRouter>
  )
}
