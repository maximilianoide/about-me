import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacto = () => {
    const notify = () => toast("Mensaje Enviado!");
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_uxv23kk",
          "template_53hh3rp",
          form.current,
          "4pdw2zpzwXLClVqND"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div
      id="contacto"
      className="container mx-auto my-20 w-1/2 border border-teal-500 bg-white"
    >
      <div class="p-5 space-y-5 shadow-xl">
        <h4 class="text-center text-3xl pt-6 py-5 text-teal-800 font-medium">
          Contáctame!
        </h4>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-5">
            <input
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-cyan-500 col-span-2"
              placeholder="Nombre"
              type="text"
              name="user_name"
            />
            <input
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-cyan-500 col-span-2"
              placeholder="Email"
              type="email"
              name="user_email"
            />
            <textarea
              className="border border-gray-500 px-4 py-2 focus:outline-none foccus:border-cyan-500 col-span-2"
              cols="10"
              rows="5"
              placeholder="Escribe tu mensaje..."
              name="message"
            />
            <div>
              <button
                onClick={notify}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-lg text-lg px-4 py-2 font-bold w-full"
                type="submit"
              >
                Enviar Mensaje
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacto