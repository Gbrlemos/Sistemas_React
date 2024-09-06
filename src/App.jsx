import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import MainManutencao from './MainManutencao';


const App = () => {

    return(
        <Router>
            <div>
                <h1>Escolha um sistema</h1>
                <button>
                    <Link to="/MainManutencao"> Manutenção</Link>
                </button>
                <button>Teste</button>
                <button>Implantação</button>

                <Routes>
                    <Route path="/MainManutencao" element={<MainManutencao />} />
                </Routes>
            </div>
        </Router>
        
    );
};

export default App;