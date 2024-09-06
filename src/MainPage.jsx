import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css'
import MainManutencao from './MainManutencao';

const MainPage = () => {

    return(
        <Router>
            <div>
                <h1>Escolha um sistema</h1>
                <button>
                    <link to="/MainManutencao"> Manutenção</link>
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

export default MainPage;