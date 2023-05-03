import './Header.css';

export const Header = () => {
  return (
    <>
        <header className="px-5 sm:px-10 py-5 fixed top-0 w-full">
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/info">Objetos</a></li>
                            <li><a href="/info">Perfiles</a></li>
                            <li><a href="/info">Noticias</a></li>
                            <li><a href="/info">Nosotros</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}
