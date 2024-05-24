import React from "react";

const Reference = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-10 bg-gray-100 dark:bg-gray-800">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        

      <div className="flex flex-col items-center p-6">
          <div className="chat chat-start">
            <div className="chat-header">
              Tuure Reiman
              <time className="text-xs opacity-50"></time>
            </div>
            <div className="text-white bg-green-500 chat-bubble">Nopeaa ja toimivaa palvelua.</div>
            <div className="opacity-50 chat-footer">
              Yrittäjä, Idair Oy
            </div>
          </div>
        </div>




        <div className="flex flex-col items-center p-6">
          <div className="chat chat-start">
            <div className="chat-header">
              Jaana Seppälä
              <time className="text-xs opacity-50"></time>
            </div>
            <div className="text-white bg-green-500 chat-bubble">Tavoitteisiin ja yhteiseen tekemiseen sitoutuneena hän tuo panoksensa kaikkeen toimintaan ja mahdollistaa sitä kautta myös muiden onnistumisen.</div>
            <div className="opacity-50 chat-footer">
              Toimitusjohtaja, Kasvu Open Oy
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center p-6">
          <div className="chat chat-start">
            <div className="chat-header">
              Joonatan Juurioja
              <time className="text-xs opacity-50"></time>
            </div>
            <div className="text-white bg-green-500 chat-bubble">Suurin osa asiakkaistamme on pieniä yrityksiä, joilla on rajallinen budjetti. Ilarin kautta mainontahommat on aina järjestyneet asiakkaillemme järkevällä hinnalla.</div>
            <div className="opacity-50 chat-footer">
              Yrittäjä, Populentia Oy
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center p-6">
          <div className="chat chat-start">
            <div className="chat-header">
              Riikka Ahmamaniemi
              <time className="text-xs opacity-50"></time>
            </div>
            <div className="text-white bg-green-500 chat-bubble">If you are starting something new, Ilari is the one who you want to get involved. He gets excited on innovation and his enthusiasm energizes everybody in a team. He reads a lot of books and eagerly puts the ideas into practice. In addition, he is a very inspiring and pleasant discussion partner.</div>
            <div className="opacity-50 chat-footer">
              Operatiivinen johtaja, Valmennuspalvelut at Aava '&' Bang Oy
            </div>
          </div>
        </div>


       
      </div>
    </div>
  );
};

export default Reference;
