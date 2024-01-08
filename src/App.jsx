
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Detailsdoc from './components/Detailsdoc'

function App() {
  return (
    <div className="App">
     <header><Header/></header>
     <section>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='detail/:id' element={<Detailsdoc/>}/>
      </Routes>
     </section>
     <footer><Footer/></footer>
    </div>
  );
}

export default App;
