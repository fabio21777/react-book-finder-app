import React from 'react';
import './App.css';
import Titulo from './components/titulo';
import InputText from './components/inputTexto/inputText';
import Card from './components/card/card';
import ButtonCarregarMais from './components/buttonCarregarMais/buttonCarregarMais';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book:'',
      query:''
    };
  }
  passData = (data) => {
    this.setState({book: data});
    console.log('data passData app', data);
 };
 setQuery = (query) => {
  this.setState({query: query});
 }

  render() {
    return (
    <div className="App">
      <Titulo titulo = "Book Finder" />
      <InputText passData={this.passData} setQuery={this.setQuery} />
        <div className='card-app'>
          {this.state.book.items?.map((book) => <Card key={book.etag} volumeInfo={book.volumeInfo} > </Card>)}
        </div>
      <ButtonCarregarMais passData={this.state.book} query ={this.state.query}  />  
    </div>
  )}
}
