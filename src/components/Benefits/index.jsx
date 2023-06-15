import divider from '../../assets/divider.png';
import './Benefits.css';

export const Benefits = () => {
  return (
    <>
        <div className="benefits-container py-20">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-4">
              <div className='flex flex-col justify-center'>
                  <h2 className='text-first text-4xl font-bold mb-8 uppercase'>Beneficios principales:</h2>
                  <p className='font-roboto text-first text-2xl mb-2'><strong>1.</strong> Accede con tu cuenta de Google, <strong>sin registro</strong></p>
                  <p className='font-roboto text-first text-2xl mb-2'><strong>2.</strong> Acceso a objetos únicos</p>
                  <p className='font-roboto text-first text-2xl mb-2'><strong>3.</strong> Conexión con la comunidad de jugadores</p>
                  <p className='font-roboto text-first text-2xl mb-2'><strong>4.</strong> Interacciones seguras y eficientes</p>
                  <p className='font-roboto text-first text-2xl mb-8'><strong>5.</strong> Control de tus objetos a intercambiar</p>
                  <p className='font-roboto text-first text-2xl mb-8'><strong>¡Únete hoy y transforma tu experiencia en Diablo IV!</strong></p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-first text-xl font-bold mb-8 uppercase'>Desarrollo ilimitado de personaje</h3>
                    <img src="https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt791384acea37b4de/636d8134abdffc469fad21aa/SideBySide_Blizzard.png?width=1200&format=webply&dpr=2&disable=upscale&quality=80" className='personalization'/>
                </div>
              </div>
            </div>
        </div>
        <img src={divider} alt="" />
    </>
  )
}
