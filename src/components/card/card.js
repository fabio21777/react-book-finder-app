import React from 'react';
import './card.css';
import ImagemCard from './imagem-card/imagem';
export default  class Card extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="card">
                <p>{this.props.volumeInfo.title}</p>
                <ImagemCard urlImagem ={this.props.volumeInfo.imageLinks.smallThumbnail}></ImagemCard>
            </div>
        )
    }
}
