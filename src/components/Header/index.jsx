import profile from '../../assets/profile.jpg';
import bullet from '../../assets/bullet.png';
import { useAuthContext } from '../../context/AuthContext';
import './Header.css';
import { useEffect } from 'react';


export const Header = () => {
    const { user, handleSignIn, handleSignOut } = useAuthContext();

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
                            <img src={profile} alt="menu" className='menu-icon' />
                            <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span>
                        </label>
                        <ul className="menu-container">
                            <li className='flex items-baseline'>
                                <a href="/" className='anchor'><img src={bullet} alt="bullet" className='bullet'/>Inicio</a>
                            </li>
                            <li className='flex items-center'>
                                <a href="/objects"><img src={bullet} alt="bullet" className='bullet'/>Objetos</a>
                            </li>
                            <li className='flex items-center'>
                                <a href="/info"><img src={bullet} alt="bullet" className='bullet'/>Info</a>
                            </li>
                            <li className='flex items-center'>
                                <a href="/donate"><img src={bullet} alt="bullet" className='bullet'/>Donar</a>
                            </li>
                            {
                                user ? 
                                <li className='flex items-center'>
                                    <a style={{cursor: 'pointer'}} onClick={handleSignOut}><img src={bullet} alt="bullet" className='bullet'/>Log out</a>
                                </li>
                                :
                                <li className='flex items-center'>
                                    <a style={{cursor: 'pointer'}} onClick={handleSignIn}><img src={bullet} alt="bullet" className='bullet'/>Log in</a>
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
