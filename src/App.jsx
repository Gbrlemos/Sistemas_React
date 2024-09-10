import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import MainManutencao from './MainManutencao';
import MainTeste from './MainTeste';


const App = () => {

    return(
        <Router>
            <div>
                <h1>Escolha um sistema</h1>
                <button>
                    <Link to="/MainManutencao">Manutenção</Link>
                </button>
                <button>
                    <Link to="/MainTeste">Teste</Link>
                </button>
                <button>Implantação</button>

                <Routes>
                    <Route path="/MainManutencao" element={<MainManutencao />} />
                    <Route path="/MainTeste" element={<MainTeste />} />
                </Routes>
            </div>
        </Router>
        
    );
};

export default App;