import CardRazasPerros from "components/CardRazasPerros";
import logo from 'media/logo.jpg'
import borderCollie from 'media/bodercollie.jpg'
import rhodesian from 'media/rhodesian.jpg'
import rottweiler from 'media/rottweiler.jpg'
import bulldogsIngles from 'media/bulldogsIngles.jpg'

function Index () {
    return (
        <div>
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
                    <CardRazasPerros nombreRaza='rottweiler' imagen={rottweiler}/>                 
                    <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian}/>                                                        
                    <CardRazasPerros nombreRaza='bulldogsIngles' imagen={bulldogsIngles}/>                                                        
                  </ul>
            </section>
          </main>
          <footer></footer>
        </div>
    )
}

export default Index;
