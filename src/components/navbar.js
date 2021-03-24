import React from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./navbar.module.css"
import hamburger from "../assets/icons/hamburger.svg"
import logo from "../assets/icons/logo.svg"
import closeIcon from "../assets/icons/close.svg"

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenu : false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render () {
    return (
      <main>
        <div className={navbarStyles.container}>
          <div className={navbarStyles.menuButton} onClick={this.showMenu}>
            <span className={navbarStyles.menuText}>Menú</span> 
            {   
              this.state.showMenu ?
              (<img className={navbarStyles.closeIcon} src={closeIcon} alt="Menu"/>)
              : 
              (<img className={navbarStyles.hamburger} src={hamburger} alt="Menu"/>)
            }
          </div>
          <Link
            to="/"
          >
          <img className={navbarStyles.logo} src={logo} alt="Mi Casa Mis Derechos"/>
          </Link>
        </div>
        {
          this.state.showMenu ? 
          (
            <section className={navbarStyles.dropDownMenu}>
              <nav>
                <div className={navbarStyles.dropDownItem}>
                  <Link
                      to="/Recursos/"
                      id={navbarStyles.item}
                      >
                      Todos los recursos
                  </Link>
                 </div>

                  <div className={navbarStyles.dropDownItem}>
                    <Link
                    to="/story-select/"
                    id={navbarStyles.item}
                    >
                    Selección de historias
                    </Link>
                  </div>

                <div className={navbarStyles.dropDownItem}>
                  <Link
                      to="/about-us/"
                      id={navbarStyles.item}
                      >
                      Sobre esta página web
                  </Link>
                </div>

              </nav>
            </section>
          )
          : 
          (null)
        }

      </main>
    ); 
  }
}