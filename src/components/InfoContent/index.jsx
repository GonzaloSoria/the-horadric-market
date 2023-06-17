import React from 'react'

export const InfoContent = () => {
  return (
    <>
        <div className="info-content py-20">
            <div className="container mx-auto">
                <p className='text-first text-2xl leading-tight my-8 text-center'>Aquí encontrarás detalles sobre las restricciones para el comercio, <br /> incluyendo objetos que no se pueden intercambiar y las reglas impuestas por Diablo IV.</p>
                <article className='py-10 text-center'>
                    <h3 className='text-first text-3xl leading-tight uppercase my-8'>¿Cómo negociar con otro jugador?</h3>
                    <p className='text-first text-2xl leading-tight my-8 px-60'>Comerciar con otros jugadores en Diablo 4 es bastante sencillo. Solo te hace falta encontrar a otro jugador que esté interesado en negociar contigo. Recuerda que puedes usar los foros oficiales de Battle.net para encontrar otros usuarios interesados en el mercado, o directamente proponerle un intercambio a otro jugador mientras estás en partida.</p>
                    <img src="https://eu.diablo3.blizzard.com/static/images/ui/blog-separator-2.png" className='py-10 mx-auto' />
                </article>
                <article className='py-10 text-center'>
                    <h3 className='text-first text-3xl leading-tight uppercase my-8'>¿Qué objetos está permitido intercambiar?</h3>
                    <p className='text-first text-2xl leading-tight my-8 px-60'>Esta es la lista de objetos que están permitidos para intercambiar entre jugadores:</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>1.</strong> Artículos comunes</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>2.</strong> Artículos mágicos</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>3.</strong> Artículos raros</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>4.</strong> Elixires</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>5.</strong> Gemas</p>
                    <img src="https://eu.diablo3.blizzard.com/static/images/ui/blog-separator-2.png" className='py-10 mx-auto' />
                </article>
                <article className='py-10 text-center'>
                    <h3 className='text-first text-3xl leading-tight uppercase my-8'>Restricciones comerciales entre jugadores</h3>
                    <p className='text-first text-2xl leading-tight my-8 px-60'>Estos son los objetos y artículos no se pueden intercambiar entre jugadores en Diablo IV y están prohibidos en este sistema</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>1.</strong> No puedes intercambiar objetos que lleves <strong>equipados</strong> en tu personaje actualmente.</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>2.</strong> No puedes intercambiar <strong>objetos directamente desde tu alijo</strong> (tienen que estar en tu inventario).</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>3.</strong> El <strong>oro</strong> es la única moneda o divisa que se puede intercambiar.</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>4.</strong> No está permitido intercambiar <strong>objetos legendarios</strong> ni <strong>aspectos legendarios</strong>.</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>5.</strong> No se pueden intercambiar <strong>objetos encantados</strong>.</p>
                    <p className='text-first text-2xl leading-tight my-4 px-60'><strong>6.</strong> No es posible intercambiar <strong>objetos de misión</strong> ni <strong>artículos únicos</strong>.</p>
                    <img src="https://eu.diablo3.blizzard.com/static/images/ui/blog-separator-2.png" className='py-10 mx-auto' />
                </article>
            </div>
        </div>
    </>
  )
}
