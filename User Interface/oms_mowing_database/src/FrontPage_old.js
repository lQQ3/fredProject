/* Olivas Mowing Service Database Frontpage */
/* 9-10-2018 */
/* Shawn Rice */

import React, { Component } from 'react';
import './style.css';
import './styleNav.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class FrontPage extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="navbar">
        /*fix "create" button when full screen*/
        /* Bootstrap-React Navbar */
	      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="navbar.html">
            Olivas Mowing Service
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          /* Navbar */
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              /* Homepage */
              <li className="nav-item active">
                <a className="nav-link" href="index.html" title="Casa">Home <span className="sr-only">(current)</span></a>
              </li>

              /* Invoice page */
              <li className="nav-item">
                <a className="nav-link" href="billCx.html" title="Facturacion">Invoicing</a>
              </li>

              /* Incoming Payments */
              <li className="nav-item">
                <a className="nav-link" href="payments.html" title="Pagos">Payments</a>
              </li>

              /* Create Search page and Create Cust or Location pages dropdown */
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#create" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Crear">Create</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="createCustomer.html" title="Crear Cliente">Create Customer</a>
                    <a className="dropdown-item" href="createLocation.html" title="Crear Ubicacion">Create Location</a>
                      /* Divider */
                      <div className="dropdown-divider">
                      </div>
                    <a className="dropdown-item" href="search.html" title="Localizar Cliente">Search Customer</a>
                    <a className="dropdown-item" href="search.html" title="Localizar Ubicacion">Search Location</a>
                  </div> /* end className="dropdown-menu" */
              </li>

              /* Search */
              <li className="nav-item">
                <a className="nav-link" href="search.html" title="Buscar">Search</a>
              </li>
            </ul>

            /* Inline searchBar */
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form> /* end searchBar */

          </div> /* end Id="navbarSupportedContent" */
        </nav> /* end navbar */
      </div> /* end id="navbar" */
      </React.Fragment>


      /* titlebar */
      <React.Fragment>
        <div id="titlebar">
          /* titlebar background */
          <div className="gradient">
            <center>
              <h1>
                Olivas Mowing Service Customer Database
              </h1>
            </center>
            <hr />
          </div> /* end className="gradient" */
        </div> /* end titlebar */
      </React.Fragment>

      <center> /* center the buttons */

      <React.Fragment>
        /* setDate calendar */
        <div className="setDate">
          <form method="GET">
            <div className="boxmodel">
              <p>Which day would you like to work with?<br />
                <input type="date" name="date" title="Con que dia te gustaria trabajar?" />
              </p>
            </div> /* end className="boxmodel" */
          </form>
        </div> /* end className="setDate" */
      </React.Fragment>

      <React.Fragment>
        /* setDate button */
        <div className="setDate">
          <p>
            <a href="index.html"><input type="button" className="btn btn-outline-dark" value="Set Date (Link Working)" title="Buscar"/></a>
          </p>
        </div> /* end className="setDate" */
      </React.Fragment>

      <React.Fragment>
        /* changeOMSInfo page button */
        <div className="changeOMSInfo">
          <form method="POST" action="changeOMSInfo.html">
            <p><a href="changeOMSInfo.html"><input type="button" className="btn btn-outline-dark" value="Change Olivas Mowing Service Company Information" title="Cambiar Informacion de Olivas Mowing Service" onclick="changeInfo()"/></a></p>
          </form>
        </div> /* end className="changeOMSInfo" */
      </React.Fragment>

      <React.Fragment>
        /* newYearRoutine button */
        <div className="newYearRoutine">
          <p><input type="submit" className="btn btn-outline-dark" value="New Year Routine (Not Working)" title="Rutina de Nuevo Ano" /></p>
        </div> /* end className="newYearRoutine" */
      </React.Fragment>

      <br />
      <hr />
      <br />

      <React.Fragment>
        /* closeProgram button */
        <div className="closeProgram">
          <input type="submit" className="btn btn-outline-dark" value="Close Program (Not Working)" title="Cerrar Programa" />
        </div> /* end className="closeProgram" */
      </React.Fragment>

    </center> /* end centering the buttons */


      <script src="../node_modules/jquery/dist/jquery.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>

      <script src="../node_modules/popper.js/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>

      <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>


		);

  }
}

export default FrontPage
