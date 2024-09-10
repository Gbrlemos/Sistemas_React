import React from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

const MainManutencao = () => {

    const navigate = useNavigate();
    const handleVoltar = () => {
        navigate(-1);
    }

    return(
        
        <div>
            <h1>Bem Vindo</h1>
            <h2>Sistema de Manutenção</h2>
            <button onClick={handleVoltar}>Voltar</button>
        </div>
        
        
    );
};

export default MainManutencao;