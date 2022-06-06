import React from 'react';
export default  class ImagemCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <figure>
                <img height="168" width="128" src={this.props.urlImagem} alt="Minha Figura"/>
            </figure>
        )
    }
}