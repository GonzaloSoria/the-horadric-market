import diabloIVLogo from '../../assets/diabloIV-logo.png';
import divider from '../../assets/divider.png';
import './Hero.css';

export const Hero = () => {
  return (
    <>
        <div className="hero-container pt-40">
            <div className="container mx-auto py-52">
                <div className="container mx-auto text-center">
                    <img className='mx-auto diablo-logo' src={diabloIVLogo} alt="Diablo IV logo"/>
                    <h1 className='text-first text-6xl leading-tight uppercase mb-8'>Intercambia objetos con <br /> otros jugadores</h1>
                    <img src="https://eu.diablo3.blizzard.com/static/images/ui/blog-separator-2.png" className='text-center mx-auto' />
                </div>
            </div>
        </div>
        <img src={divider} alt="" />
    </>
  )
}
