import { useState } from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';    
import Header from '../../components/Header/Header';

const team = [
  { name: 'Beatriz Paredes', photo: 'https://via.placeholder.com/150' },
  { name: 'Catarina Loureiro', photo: 'https://via.placeholder.com/150' },
  { name: 'Cecília Medeiros', photo: 'https://via.placeholder.com/150' },
  { name: 'Isabella Batista', photo: 'https://via.placeholder.com/150' },
  { name: 'Melissa Filgueiras', photo: 'https://via.placeholder.com/150' }
];

function Contact() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="contact-page">
      <Header />
      <main className="contact-container">
        <h1>Contato</h1>
        <ul className="contact-list">
          {team.map(member => (
            <li key={member.name}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(member.photo);
                }}
              >
                {member.name}
              </a>
            </li>
          ))}
        </ul>
        {selected && (
          <div className="photo-preview">
            <h2>Foto:</h2>
            <img src={selected} alt="Foto do membro" />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
