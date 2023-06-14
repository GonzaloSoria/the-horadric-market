import profile from '../../assets/profile.jpg';
import login from '../../assets/login.png';
import bullet from '../../assets/bullet.png';
import './Header.css';

export const Header = () => {

  return (
    <>
        <header className="py-5 fixed top-0 w-full">
            <nav className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <a href="/" className="logo pr-10">The Horadric Market</a>
                    </div>
                    <div className="icon-container">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="checkbox-label">
                            <img src={profile} alt="menu" className='menu-icon' />
                            {/* <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span> */}
                        </label>
                        <ul className="menu-container">
                            <li className='flex items-baseline'>
                                <a href="/info" className='anchor'><img src={bullet} alt="bullet" className='bullet'/>Inicio</a>
                            </li>
                            <li className='flex items-center'>
                                <a href="/info"><img src={bullet} alt="bullet" className='bullet'/>Objetos</a>
                            </li>
                            <li className='flex items-center'>
                                <a href="/info"><img src={bullet} alt="bullet" className='bullet'/>Nosotros</a>
                            </li>
                            <li className='flex items-center'>
                                <a href=""><img src={login} alt="login" className='login'/></a>
                            </li>
                            {/* <li className='flex items-center log-in'>
                                <a href="/info">Iniciar sesión</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>        
    </>
  )
}
