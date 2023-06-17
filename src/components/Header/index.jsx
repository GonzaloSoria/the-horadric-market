import { useEffect } from 'react';
import navlinkhover from '../../assets/sounds/navlink-hover.mp3';
import { useAuthContext } from '../../context/AuthContext';
import './Header.css';

export const Header = () => {
    const { user, handleSignIn, handleSignOut } = useAuthContext();

    const navlinkHover = () => {
        new Audio(navlinkhover).play();
    }
    
    useEffect(() => {

    }, [])

    return (
        <>  
            
            <header className="pt-5 fixed top-0 w-full">
                <nav className="container mx-auto">
                    <div className="flex justify-between items-center pb-5">
                        <div className="flex justify-start items-center">
                            <a href="/" className="logo pr-10">The Horadric Market</a>
                        </div>
                        <div className="icon-container">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" className="checkbox-label">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                            </label>
                            <ul className="menu-container">
                                <li className='flex items-baseline'>
                                    <a onMouseOver={navlinkHover} href="/" className='navlink'>Inicio</a>
                                </li>
                                <li className='flex items-center'>
                                    <a onMouseOver={navlinkHover} href="/objects">Objetos</a>
                                </li>
                                <li className='flex items-center'>
                                    <a onMouseOver={navlinkHover} href="/info">Info</a>
                                </li>
                                <li className='flex items-center'>
                                    <a onMouseOver={navlinkHover} href="/donate">Donar</a>
                                </li>
                                {
                                    user ? 
                                    <>
                                        <li className='flex items-center'>
                                            <a onMouseOver={navlinkHover} href="/profile">Perfil</a>
                                        </li>
                                        <li className='flex items-center'>
                                            <a onMouseOver={navlinkHover} style={{cursor: 'pointer'}} onClick={handleSignOut}>Log out</a>
                                        </li>
                                    </>
                                    
                                    :
                                    <li className='flex items-center'>
                                        <a onMouseOver={navlinkHover} style={{cursor: 'pointer'}} onClick={handleSignIn}>Log in</a>
                                    </li>
                                }
                                
                            </ul>
                        </div>
                    </div>
                    <img src="https://eu.diablo3.blizzard.com/static/images/ui/blog-separator-2.png" className='text-center mx-auto line' />
                </nav>
            </header>        
        </>
    )
}
