import diabloIVLogo from '../../assets/diabloIV-logo.png';
import divider from '../../assets/divider.png';
import './Hero.css';

export const Hero = () => {
  return (
    <>
        <div className="hero-container py-40">
            <div className="container mx-auto py-52">
                {/* <div className="grid grid-cols-2 gap-4">
                    <div>
                        <img src={diabloIVLogo} alt="Diablo IV logo" />

                        <h1 className='text-first text-6xl leading-tight font-bold font-roboto'>Potencia tu personaje en Diablo IV intercambiando objetos con otros jugadores</h1>
                    </div>
                    <div className='mx-auto'>
                        <img src={diabloIVLogo} alt="Diablo IV logo" />
                    </div>
                </div> */}
                <div className="container mx-auto text-center">
                    <img className='mx-auto' src={diabloIVLogo} alt="Diablo IV logo"/>
                    <h1 className='text-first text-6xl leading-tight font-bold font-cinzel'>Potencia tu personaje intercambiando objetos con otros jugadores</h1>
                </div>
                
            </div>
        </div>
        <img src={divider} alt="" />
    </>
  )
}
