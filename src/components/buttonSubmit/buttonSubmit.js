
import React from 'react';
import BuscarService from '../service/buscaService';
import './buttpnSubmit.css';
export default class ButtonSubmit extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.buscarService = new BuscarService();
    }
    buscar = () => {
        this.buscarService.getBooks(this.props.search).then(response => {
            this.props.passData(response.data);
        })
    }
    render(){
        return(
                <button onClick={this.buscar}   className='search-btn'>Buscar</button>
        );
    }
}