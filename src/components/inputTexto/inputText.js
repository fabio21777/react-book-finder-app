import React from 'react';
import './input.css';
import ButtonSubmit from '../buttonSubmit/buttonSubmit';
import BuscarService from '../service/buscaService';
export default class InputText extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '',book:[]};
        this.buscarService = new BuscarService();
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    passData = (data) => {
       this.props.passData(data);
     };
    
     buscar = () => {
        this.buscarService.getBooks(this.state.value).then(response => {
            this.props.passData(response.data);
        })
    }

    render(){
        return(
            <div className='div-input' >
               <input 
               type="text" 
               placeholder='Tipo, Autor, Nome do livro ou Assunto' 
               value={this.state.value} 
               onChange={this.handleChange}
               onKeyPress={(e) => e.key === 'Enter' && this.buscar()}
               />
               <ButtonSubmit  
               passData={this.passData} 
               onClick={this.buscar}  
               search = {this.state.value}  />
            </div>
        );
    }
}

