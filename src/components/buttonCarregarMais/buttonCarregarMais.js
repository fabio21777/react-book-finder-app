
import React from 'react';
import BuscarService from '../../service/buscaService';
import './buttonCarregarMais.css';
export default class ButtonCarregarMais extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {page:1,startIndex:40};

        this.buscarService = new BuscarService();
    }
    buscar = () => {
        this.setState({startIndex:this.state.startIndex+40});
        this.buscarService.getBooks(this.props.query,this.state.startIndex).then(response => {
            this.props.setLivros(response.data.items);
        })
    }

    buttonCarregarMais = () => {
        if(this.props.passData){
            return(
                <div className='button-mais'>
                    <button onClick={this.buscar}   className='carregar-btn'>Carregar Mais</button>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            this.buttonCarregarMais()
        );
    }
}