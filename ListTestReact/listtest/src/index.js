import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Kale component
var Kale = () => (
  <li>
  Kale
  </li>
)
//cucumber component
var Cucumbers = () => (
  <li>
    cucumbers
  </li>
)
//Grocerylist function which create UL
function Grocerylist() {
  return(
  <ul>
    <Kale/>
    <Cucumbers/>
  </ul>
  )
}


//GroceryListItem component
// var GrocerylistItem = (props) => (
//   <ul>
//     <li onClick={onListItemClick}>{ props.list[0]}  </li>
//     <li>{ props.list[1]} </li>
//     <li>{ props.list[2]} </li>
//   </ul>
// )
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      purchased: false
    };
  }
 onListItemClick() {
  this.setState({
    purchased: !this.state.purchased
  })
}
 makebold(e) {
  e.target.style.fontWeight = 'bold'
}
  render() {
    var style = {
      textDecoration: this.state.purchased ? 'line-through' : 'none'
    };

    return(
      <li style={style} onMouseEnter={this.makebold}>{this.props.list}</li>    
     
    
    );
  }


}
//NewList Component
var NewList = (props) => (
  <div>
    <h2>My Grocerylist</h2>
    {/* ared inside of render call */}
    {props.list.map(foods => <GroceryListItem list = {foods}/>)
    }
  </div>
)

//render function
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Grocerylist/>
  <React.StrictMode>
    {/* <App /> */}
    <NewList list={['bananas','bread','apples']} />
    <Grocerylist/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
