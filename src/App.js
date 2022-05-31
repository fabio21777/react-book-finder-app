import React from 'react';
import './App.css';
import Titulo from './components/titulo';
import InputText from './components/inputTexto/inputText';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book:[]
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
      <div>
        {this.state.book.items?.map((book) => <h1 key={book.etag}> {book.volumeInfo.title} </h1>)}
      </div>
    </div>
  )}
}
