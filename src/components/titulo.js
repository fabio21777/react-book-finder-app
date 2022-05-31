/* eslint-disable no-useless-constructor */
import React from 'react';
export default class Titulo extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div style={myStyle}>
                <h1 style={myStyleh1} >{this.props.titulo}</h1>
            </div>
        );
    }
}

const myStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#ffa000',
    fontWeight: 'bold',
    paddingTop: '50px'
}
const myStyleh1 = {
    display: 'block',
    fontSize: '2.5rem',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontFamily: 'Oleo Script,cursive',
    textShadow: '1px 1px rgb(0 0 0 / 40%)'
}