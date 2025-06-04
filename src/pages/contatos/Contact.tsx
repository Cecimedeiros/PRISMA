import { useState } from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';    
import Header from '../../components/Header/Header';


const team = [
  { name: 'Beatriz Paredes', photo: '/bia.jpg' },
  { name: 'Catarina Loureiro', photo: '/cata.jpg' },
  { name: 'Cecília Medeiros', photo: '/ceci.jpg' },
  { name: 'Isabella Batista', photo: '/bella.jpg' },
  { name: 'Melissa Filgueiras', photo: '/mel.jpg' }
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
