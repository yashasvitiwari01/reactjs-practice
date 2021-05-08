// created to demonstrate the props.children functionality of REACT
//props.children is used if there is other content inside the opening 
//and closing component tags which need to be processed.


//to set all the classes on the card component using props.className.
// So anything we receive from outside is added to the string giving us the entire css 
 
import "./Card.css";

function Card(props) {
    const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
