import React, { useState } from 'react';
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import './feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    alert(`Obrigado pela sua avaliação de ${value} estrela(s)!`);
  };

  return (
    <>
      <Header />

      <div className="container-feedback">
        <div className="card-feedback">
          <div className="mensagem">
            <img src="/assets/prima.png" alt="Personagem policial" />
            <div className="texto">
              <p>Como está sendo sua experiência no nosso sistema?</p>
              <div className="estrelas">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rating ? 'estrela ativa' : 'estrela'}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="subtexto">Seu feedback é importante para nós</p>
            </div>
          </div>

          <div className="campo-enviar">
            <input type="text" placeholder="Escreva seu comentário aqui..." />
            <button>
              <i className="fa fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Feedback;
