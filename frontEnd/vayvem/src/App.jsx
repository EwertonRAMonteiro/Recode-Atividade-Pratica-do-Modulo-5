import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Clientes from "./Pages/Clientes";
import ClientesCreate from "./Pages/Clientes/Create";
import Destinos from "./Pages/Clientes";
import DestinosCreate from "./Pages/Clientes/Create";
import Hospedagems from "./Pages/Hospedagems";
import HospedagemsCreate from "./Pages/Hospedagems/Create";



function App() {
	return (
		<div ClassName="App">
		<Router>
			<Header />
			<Footer />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Clientes-Create" element={<ClientesCreate />} />
        <Route path="/Clientes-Update/:id" element={<ClientesCreate />} />
      	<Route path="/Destinos" element={<Destinos />} />
        <Route path="/Detinos-Create" element={<DestinosCreate />} />
        <Route path="/Destinos-Update/:id" element={<DestinosCreate />} />
        <Route path="/Hospedagems" element={<Hospedagems />} />
        <Route path="/Hospedagems-Create" element={<HospedagemsCreate />} />
        <Route path="/Hospedagems-Update/:id" element={<HospedagemsCreate />} />
      </Routes>
    </Router>
		</div>
	)
}

export default App
