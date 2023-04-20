// import logo from './logo.svg';
// import './App1.css';
import Subject from './componante/Invitation/subject/subject';
import To from './componante/Invitation/To/To';
import To_Name from './componante/Invitation/To_Name/To_Name';
import Card from './componante/Invitation/Card/Card';
import Place from './componante/Invitation/Place/Place';
import { From_name } from './componante/Invitation/From_name/From_name'

function App() {
  return (
    <div className="App1">
      <header className="App-header">
        <Subject subject='Birthday party Invitation ' />
        <To to=' jaGdish@gmail.com' />
        <To_Name to_name=' jaGdish' />
        <Card card=' birthday party'
          name1='Ritu'
          name2='Saurabh'
          name3='Kartik'
        />
        <Place place=' Green field Avenue .' />
        <From_name from='JaGdish' />

      </header>
    </div>
  );
}

export default App;