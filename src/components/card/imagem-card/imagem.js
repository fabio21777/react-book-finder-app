import React from 'react';
export default  class ImagemCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <figure>
                <img src={this.props.urlImagem} alt="Minha Figura"/>
            </figure>
        )
    }
}