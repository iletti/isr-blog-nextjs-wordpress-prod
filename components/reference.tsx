import React from "react"

const reference = () => {
    return (
<div className=" lg:w-5/6  flex-col justify-center m-auto">
    <h2 className="mt-20 text-center text-3xl">Referenssit</h2>

    <div className="chat chat-start">
      <div className="chat-header">
        Joonatan Juurioja
        <time className="text-xs opacity-50"></time>
      </div>
      <div className="chat-bubble bg-green-500 text-white">Suurin osa asiakkaistamme on pieniä yrityksiä, joilla on rajallinen budjetti. Ilarin kautta mainontahommat on aina järjestyneet asiakkaillemme järkevällä hinnalla.</div>
      <div className="chat-footer opacity-50">
       Yrittäjä, Populentia Oy
      </div>
    </div>

    <div className="chat chat-start">
      <div className="chat-header">
        Tuure Reiman
        <time className="text-xs opacity-50"></time>
      </div>
      <div className="chat-bubble bg-green-500 text-white"> Nopeaa ja toimivaa palvelua.</div>
      <div className="chat-footer opacity-50">
       Yrittäjä, Idair Oy
      </div>
    </div>

    <div className="chat chat-start">
      <div className="chat-header">
        Riikka Ahmamaniemi
        <time className="text-xs opacity-50"></time>
      </div>
      <div className="chat-bubble bg-green-500 text-white">If you are starting something new, Ilari is the one who you want to get involved. He gets excited on innovation and his enthusiasm energizes everybody in a team. He reads a lot of books and eagerly puts the ideas into practice. In addition, he is a very inspiring and pleasant discussion partner.</div>
      <div className="chat-footer opacity-50">
        Operatiiinen johtaja, Valmennuspalvelut at Aava '&' Bang Oy
      </div>
    </div>
    <div className="chat chat-start">
      <div className="chat-header">
        Jaana Seppälä
        <time className="text-xs opacity-50"></time>
      </div>
      <div className="chat-bubble bg-green-500 text-white">Tavoitteisiin ja yhteiseen tekemiseen sitoutuneena hän tuo panoksensa kaikkeen toimintaan ja mahdollistaa sitä kautta myös muiden onnistumisen.</div>
      <div className="chat-footer opacity-50">
       Toimitusjohtaja, Kasvu Open Oy
      </div>
    </div>
</div>
);
};
export default reference;