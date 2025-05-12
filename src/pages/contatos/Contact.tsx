
import { useState } from 'react';

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
    <div>
      <h1>Contato</h1>
      <ul>
        {team.map(member => (
          <li key={member.name}>
            <a href="#" onClick={() => setSelected(member.photo)}>
              {member.name}
            </a>
          </li>
        ))}
      </ul>
      {selected && (
        <div>
          <h2>Foto:</h2>
          <img src={selected} alt="Foto do membro" style={{ width: '150px' }} />
        </div>
      )}
    </div>
  );
}

export default Contact;
