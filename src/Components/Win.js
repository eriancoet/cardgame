import React from 'react';
import './custom.css';
//Import the components.
import { Component } from 'react/cjs/react.production.min';
import { Header, Layout } from './Layout.components';
import CardGameBoard from './CardGameBoard';

//I changed the className for the onClick function to become inactive.
export default class WinClassChange extends Component {
  constructor() {
      super();
      this.state = {
        winClassChange: "beforeClick",
        tryBtn: "tryBtn"
      };
      console.log(this.state.winClassChange);
  }
  
  addClassName() {
    this.setState({winClassChange: "afterClick", tryBtn: 'tryBtnActive' }); 
    console.log(this.state.tryBtn);

  }
 
  render() {
    return (
      <div>
      <div className={this.state.winClassChange} onClick={this.addClassName.bind(this)}>
      <Header>This is a card game!</Header>
      <Layout>
     <CardGameBoard  />
     <CardGameBoard  />
     <CardGameBoard  />
      </Layout>
  
    </div>
        <div className="btnLayout">
        <button className={this.state.tryBtn} onClick={() => window.location.reload(false)}>Try Again</button>
        <button className={this.state.tryBtn} onClick={()=> window.open("./Home")}>Quit</button>
        </div>
        </div>
    )
  }
}
