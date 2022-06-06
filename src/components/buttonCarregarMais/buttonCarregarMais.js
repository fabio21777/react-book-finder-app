
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
            this.props.passData = [...response.data];
            console.log('data passData botão carregar mais', this.props.passData);
        })
    }

    buttonCarregarMais = () => {
        console.log('eu executo ---------',this.props.passData);
        if(this.props.passData){
            return(
                <button onClick={this.buscar}   className='search-btn'>Carregar Mais</button>
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