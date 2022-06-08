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
                <div className="card-inf">
                    <p className="titulo-book" >{this.props.volumeInfo.title}</p>
                     <div>
                        <span className= "inf-book-label" >Autor : </span>
                        <span className="inf-book-value" >{this.props.volumeInfo?.authors?.shift() || 'Api não encontrou um autor'}</span>
                    </div>
                    <div>
                        <span className= "inf-book-label" >Publicadora : </span>
                        <span className="inf-book-value" >{this.props.volumeInfo.publisher || 'Api não encontrou uma publicadora'}</span>
                     </div>
                     <div>
                        <span className= "inf-book-label" >Publicado : </span>
                        <span className="inf-book-value" >{this.props.volumeInfo.publishedDate || 'Api não encontrou a  data de publicação'}</span>
                     </div>
                </div>
                <ImagemCard urlImagem ={this.props.volumeInfo?.imageLinks?.thumbnail}></ImagemCard>
            </div>
        )
    }
}
