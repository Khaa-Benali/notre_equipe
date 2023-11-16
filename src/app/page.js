import Image from 'next/image';
import './page.css';
import Equipe from '../app/components/Equipe/Equipe.js';
import Cartes from '../app/components/Cartes/Cartes';

export default function Home() {
  const pageStyle = {
    backgroundColor: '#2A4466',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
  };

  return (
    <div style={pageStyle}>
      <div style={{ height: '100%', width: '100%' }}>
        <Equipe />
      </div>
      <div style={{ height: '100%' }}>
        <Cartes />
      </div>
    </div>
  );
}
