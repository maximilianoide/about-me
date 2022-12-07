import React from 'react';
import Image from 'next/image';
import dev from '../public/dev.png'
import html from '../public/html.png'
import css from '../public/css.png'
import js from '../public/javascript.png'
import python from '../public/python.png'
import tailwind from '../public/tailwind.png'
import react from '../public/react.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full p-1'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h1
          id="habilidades"
          className="text-3xl py-3 text-teal-800 font-medium"
        >
          Habilidades
        </h1>
        <p className="flex  leading-6 py-5  text-gray-700 font-mono justify-center">
        
          Tengo un excelente manejo del ingles y conocimientos de Datos y Algoritmos. Actualmente me encuentro trabajando en mejorar mi maestría en el Frontend con los frameworks más populares y aprendiendo TypeScript, para eventualmente dar el paso al backend. Cuento con conocimientos de los siguientes lenguajes/frameworks:
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 py-3'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={js} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={react} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills