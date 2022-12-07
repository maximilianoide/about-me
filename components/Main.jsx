import React from 'react'
import Image from 'next/image'
import photo from '../public/photo1.jpeg'
import {AiFillGithub} from 'react-icons/ai';

const Main = () => {
  return (
    <div>
      <div className="py-4 font-montserrat">
        <h2 className="text-5xl py-2 ">
          Hola, soy{" "}
          <span className="text-teal-500 font-bold  ">Maximiliano Ide</span>
        </h2>
        <h3 className="text-2xl py-5 leading-2 text-gray-800">
          Estudiante de Ingeniería Civil en Informática en la Universidad
          Austral de Chile
        </h3>
      </div>

      <div className="relative mx-auto rounded-full w-80 h-80 mt-7 overflow-hidden">
        <Image src={photo} />
      </div>
      <div className="text-5xl flex justify-center mt-6">
        <a href="https://github.com/maximilianoide">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default Main