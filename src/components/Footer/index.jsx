import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer className='container mx-auto py-20'>
        <h4 className="text-first text-4xl font-bold mb-8 uppercase text-center">The horadric market</h4>
        <nav>
          <ul className="footer-nav">
            <li><a href="">Inicio</a></li>
            <li><a href="">Objetos</a></li>
            <li><a href="">Info</a></li>
            <li><a href="">Donar</a></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
