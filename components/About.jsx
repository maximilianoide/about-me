import React from 'react'

const About = () => {
  return (
    <div className="flex justify-center">
      <section className="">
        <h1
          id="sobre-mi"
          className="text-3xl pt-6 py-5 text-teal-800 font-medium"
        >
          Sobre Mí
        </h1>
        <p className="max-w-md flex  leading-6 text-gray-700 font-mono">
          Tengo 24 años y me fascina la tecnología desde que tengo memoria. Mis
          hobbies favoritos son escuchar/tocar música, conocer lugares nuevos y
          los videojuegos. Actualmente me encuentro trabajando part-time en un
          bar/restaurant, en mis otras pasiones, la comida 🍔 y la cerveza
          artesanal 🍻
        </p>
        <span class="h-1 w-full bg-purple-600 lg:w-1/3"></span>

        <p className="max-w-md flex leading-6 text-gray-700 font-mono py-9">
          Decidí postular a esta beca porque quiero perfeccionarme como
          desarrollador web y la duración de esta calza muy bien con lo que me
          queda de carrera. Llevo un tiempo aprendiendo por mi cuenta pero
          considero que mi progreso será más rápido en un ambiente mas ordenado.
          Ademas de eso, no siempre se tiene la oportunidad de poder llegar a
          trabajar en una de las empresas mas grandes del continente, por lo que
          estoy muy entusiasmado con el proyecto.
        </p>
      </section>
    </div>
  );
}

export default About