import React from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

import Header from '../../components/Header'
import styles from './styles.css';
import InputPerson from '../../components/InputPerson';
import TextInputPerson from '../../components/TextInputPerson';
import ButtonPerson from '../../components/ButtonPerson';

function Appointment() {
    return (
        <div>
            <Sidebar />

            <div className="content">
                <Header name="Agendar consulta">
                    <BsReverseLayoutTextWindowReverse size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    <h1 id="Title">Informe os dados para agendar uma consulta</h1>
                    <form className="centered">
                        <InputPerson type="time"/>
                        <InputPerson type="date"/>
                        <InputPerson type="number" min="0" max="10"/>
                        <InputPerson placeholder="Selecionar psicologo" hasIcon={true} funcao={()=>alert("hi")}/>
                        <InputPerson placeholder="Selecionar psicologo" hasIcon={true} funcao={()=>alert("hi")}/>
                        <InputPerson placeholder="Selecionar psicologo" hasIcon={true} funcao={()=>alert("hi")}/>
                        <TextInputPerson placeholder="Descreva sua solicitação"/>
                        <ButtonPerson text="Marcar"/>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Appointment;