import divider from '../../assets/divider.png';
import classes from '../../assets/classes.png';
import './WhatsIs.css';

export const WhatsIs = () => {
  return (
    <>
        <div className="whats-is-container pt-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className='flex justify-center items-center'>
                  
                  <img src={classes} className='classes'/>
                </div>
                <div className='flex flex-col justify-center'>
                  <h2 className='text-first text-4xl font-bold mb-8'>¿QUE ES THE HORADRIC MARKET?</h2>
                  <p className='font-roboto text-first text-2xl mb-8'>¡Bienvenido a la plataforma innovadora que transforma la forma en que los jugadores de Diablo IV intercambian objetos!</p>
                  <p className='font-roboto text-first text-2xl mb-8'>Conectamos a la comunidad de jugadores y les simplificamos encontrar, compartir y negociar luego en el juego objetos de manera fácil, rápida y segura.</p>
                </div>
              </div>
            </div>
        </div>
        <img src={divider} alt="" />
    </>
  )
}
