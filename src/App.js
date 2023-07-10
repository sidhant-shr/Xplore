import { Alchemy, Network } from 'alchemy-sdk';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};



 export const alchemy = new Alchemy(settings);

function App() {

  

  return (
 
  <div className="App">
    <NavBar />
    <Routes>
      <Route path = "/specific" element = {<SpecificPage />}/>
      <Route path = "/xplore" element = {<XplorerPage />}/>
      <Route path = "/transaction:id" element = {<TransactionDetails />}/>
      <Route path = "/" element = {<XplorerPage />}/>
      <Route path = "*" element = {<DnePage />}/>

    </Routes>


  </div>
 

  )
}

export default App;
