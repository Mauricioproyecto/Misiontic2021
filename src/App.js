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
                    <li className="breedCard">
                        <div className="contenedorImagen">
                            <img src={borderCollie} alt="border collie"/>
                        </div>
                          <span className="breedTittle">Border Collie</span>

                    </li>
                    <li class="breedCard"> 
                          <div className="contenedorImagen">
                            <img src={rhodesian} alt="Rhodesian"/>
                          </div>
                        <span className="breedTittle">Rhodesian</span>
                    </li>
                  </ul>
            </section>
          </main>
          <footer></footer>

    </div>
  );
}

export default App;
