import diabloIVLogo from '../../assets/diabloIV-logo.png';
import divider from '../../assets/divider.png';
import './Hero.css';

export const Hero = () => {
  return (
    <>
        <div className="hero-container py-40">
            <div className="container mx-auto py-52">
                <div className="container mx-auto text-center">
                    <img className='mx-auto' src={diabloIVLogo} alt="Diablo IV logo"/>
                    <h1 className='text-first text-6xl leading-tight uppercase'>Intercambia objetos con <br /> otros jugadores</h1>
                </div>
            </div>
        </div>
        <img src={divider} alt="" />
    </>
  )
}
