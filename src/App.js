import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card className="mainCard">
        <Card.Title className="cardHandWrite">Dear Tasya </Card.Title>
        <Card.Body className="cardContent">
          Selamat ulang tahun, gua gada kata kata bagus yah anjim, udeh kek gini aje kalimatnya
          doa sendiri aja yah, gua aamiin-in, selama doanya baik wkwkwkwkw
        </Card.Body>
        <Card.Title className="cardHandWrite">-HnF-</Card.Title>
      </Card>
    </div>
  );
}

export default App;
