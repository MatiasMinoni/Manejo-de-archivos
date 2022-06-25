import { Fragment } from "react";





const ItemListContainer = (props) => {

console.log(props)
return (
  <Fragment>
<p> Texto de prueba {props.items}</p>
  </Fragment>
 
);
}
export default ItemListContainer;