import logo from './media/logo.jpg'
import './styles/App.css';
import borderCollie from './media/bodercollie.jpg'
import rhodesian from './media/rhodesian.jpg'

function App() {
  return (
    <div className="App">
      
          <header>
            <ul className="navbar">
                <li>
                    <img className="logo" src={logo} alt="logoPerro"/>
                </li>
                <li>
                    <button className="button mainButton" >Nuevo Post</button>
                </li>
            
                <li>
                    <div className="buscar">
                        <input  placeholder="buscar una raza" type="text"/>
                        <i className="fas fa-search button iconobusqueda"></i>
                    </div>
                </li>
            
                <li> <button className="button secondaryButton">Login</button> </li>
                <li>
                    <button className="button mainButton" >Registro</button>
                </li>
           
            </ul>
          </header>
          <main>
            <section>
                <h1>Razas de Perros</h1>
                  <ul className="breedCardContainer">
                    <CardRazasPerros nombreRaza='BorderCollie' imagen={borderCollie}/>                 
                    <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian}/>                                                        
                  </ul>
            </section>
          </main>
          <footer></footer>

    </div>
  );
}

function CardRazasPerros (props) {
  return (
  <li class="breedCard"> 
  <div className="contenedorImagen">
    <img src={props.imagen} alt={props.nombreRaza}/>
  </div>
<span className="breedTittle">{props.nombreRaza}</span>
</li>)
}

export default App;
