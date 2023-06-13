import divider from '../../assets/divider.png';
import './HowWorks.css';

export const HowWorks = () => {
  return (
    <>
        <div className="how-works-container py-28">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className='flex justify-center items-center'>
                  <h2 className='text-first text-5xl font-bold text-center'>¿COMO FUNCIONA?</h2>
                </div>
                <div>
                  <p className='font-roboto text-first text-2xl'>En esta plataforma podrás publicar los objetos que tienes en tu inventario y ver los objetos que otros jugadores están ofreciendo para intercambiar. ¡Encuentra el objeto perfecto para tu personaje!</p>
                </div>
              </div>
            </div>
        </div>
        <img src={divider} alt="" />
    </>
  )
}
