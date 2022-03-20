import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Contacts from './components/Contacts';
import Info from "./components/Info";
import Message from "./components/Message";
import Navbar from './components/Navbar';
import Sent from "./components/Sent";
import ContactState from "./context/ContactState";
import SentState from "./context/SentState";

function App() {
  return (
    // JSX Fragment
    <>
    {/* Using ContextAPI */}
    <ContactState>  
   <BrowserRouter>
    <Navbar/>
    <div className="container" style = {{"marginTop" : "2.5rem"}}>
    <SentState>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Contacts />} />
      <Route path="info" element = {<Info/>} />
     
      <Route path="sent" element={<Sent />} />
      <Route path="message" element = {<Message/>} />
    
    </Routes>
    </SentState>
 
    </div>
    </BrowserRouter>
    </ContactState>
  
    </>
  );
}

export default App;
