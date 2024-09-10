import React from "react";
import './App.css';
import { Navigate } from "react-router-dom";

const MainTeste = () => {

    const navigate = useNavigate();
    const handleVoltar = () => {
        navigate(-1);
    }

    return(
        
        <div>
            <h1>Bem Vindo</h1>
            <h2>Sistema de Teste</h2>
            <button onClick={handleVoltar}>Voltar</button>
        </div>
        
        
    );
};

export default MainTeste;