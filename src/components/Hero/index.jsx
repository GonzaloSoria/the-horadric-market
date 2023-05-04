import diabloIVLogo from '../../assets/diabloIV-logo.png';
import './Hero.css';

export const Hero = () => {
  return (
    <>
        <div className="hero-container py-40">
            <div className="container mx-auto py-52">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h1 className='text-first text-6xl leading-tight font-bold font-roboto'>Potencia tu personaje en Diablo IV intercambiando objetos con otros jugadores</h1>
                    </div>
                    <div className='mx-auto'>
                        <img src={diabloIVLogo} alt="Diablo IV logo" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
