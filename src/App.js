import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import "tachyons"

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      people:[],
    }
    this.getPeople=this.getPeople.bind(this); 
  }

  getPeople(){
    fetch("https://swapi.co/api/people/")
    .then((response)=>response.json())
      .then(data =>
        this.setState({
          people: data.results,
          isLoading: false,
        })
      )
    }
  
  componentDidMount(){
    this.getPeople()
  }
  render(){   
    const{people}=this.state;
    return (
      <div className="tc">
        <img src="https://images.cooltext.com/5309767.png" alt="starwar"/>
        <CardList people={people}/>   
        &copy;yoursweetnightmare     
      </div>
    );
}}

export default App;
