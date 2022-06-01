import React from 'react';
import './App.css';
import Titulo from './components/titulo';
import InputText from './components/inputTexto/inputText';
import Card from './components/card/card';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book:'',
    };
  }
  passData = (data) => {
    this.setState({book: data});
    console.log('data passData app', data);
 };

  render() {
    return (
    <div className="App">
      <Titulo titulo = "Book Finder" />
      <InputText passData={this.passData} />
        <div className='card-app'>
          {this.state.book.items?.map((book) => <Card key={book.etag} volumeInfo={book.volumeInfo} > </Card>)}
        </div>
    </div>
  )}
}
