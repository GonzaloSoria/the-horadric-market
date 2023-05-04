import './Header.css';

export const Header = () => {
  return (
    <>
    <div className="container mx-auto">
    <header className="container mx-auto px-5 sm:px-10 py-5 fixed top-8 w-full">
            <nav className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <a href="/" className="logo">The Horadric Market</a>
                    </div>
                    <div className="icon-container">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="checkbox-label">
                            <span className="span1"></span>
                            <span className="span2"></span>
                            <span className="span3"></span>
                        </label>
                        <ul className="menu-container">
                            <li className='flex justify-center items-baseline'>
                                <a href="/info">Home</a>
                            </li>
                            <li className='flex justify-center items-center'>
                                <a href="/info">Objetos</a>
                            </li>
                            <li className='flex justify-center items-center'>
                                <a href="/info">Nosotros</a>
                            </li>
                            <li className='flex justify-center items-center log-in'>
                                <a href="/info">Log in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
        
    </>
  )
}
