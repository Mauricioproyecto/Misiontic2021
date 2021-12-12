
function CardRazasPerros (props) {
    return (
    <li class="breedCard"> 
    <div className="contenedorImagen">
      <img src={props.imagen} alt={props.nombreRaza}/>
    </div>
  <span className="breedTittle">{props.nombreRaza}</span>
  </li>)
  }

  export default CardRazasPerros;