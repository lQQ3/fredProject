import React from 'react';
import '../../style.css';
import '../../styleNav.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (

        <div id="navbar">

        {/*fix "create" button when full screen*/}
    {/* Bootstrap-React Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="navbar.html">
            Olivas Mowing Service
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon">
                          </span>
        </button>

        {/* Navbar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

                {/* Homepage */}
                <li className="nav-item active">
                    <a className="nav-link" href="../index.html" title="Pagina Principal">
                        Home
                        <span className="sr-only">
                                              (current)
                                            </span>
                    </a>
                </li>

                {/* Incoming Payments */}
                <li className="nav-item">
                    <a className="nav-link" href="../payments.html" title="Pagos">
                        Payments
                    </a>
                </li>

                {/* Invoice page */}
                <li className="nav-item">
                    <a className="nav-link" href="../billCx.html" title="Facturacion">
                        Invoicing
                    </a>
                </li>


                {/* Create Customer */}
                <li className="nav-item">
                    <a className="nav-link" href="../createCustomer.html" title="Crear Cliente">
                        Create Customer
                    </a>
                </li>

                {/* Create Location */}
                <li className="nav-item">
                    <a className="nav-link" href="../createLocation.html" title="Crear Ubicacion">
                        Create Location
                    </a>
                </li>


                {/* Create Search page and Create Cust or Location pages dropdown
                <li className="nav-item dropdown">

                    <a className="nav-link dropdown-toggle" href="../#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Crear">
                        Create
                    </a>

                    {/* Create
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="../createCustomer.html"
                           title="Crear Cliente">
                            Create Customer
                        </a>
                        <a className="dropdown-item" href="../createLocation.html"
                           title="Crear Ubicacion">
                            Create Location
                        </a>

                        {/* Divider
                        {<div className="dropdown-divider">
                        </div>

                        {/* Search
                        <a className="dropdown-item" href="../search.html"
                           title="Localizar Cliente">
                            Search Customer
                        </a>
                        <a className="dropdown-item" href="../search.html"
                           title="Localizar Ubicacion">
                            Search Location
                        </a>
                        end className="dropdown-menu"
                    </div>
                </li> */}

                {/* Search */}
                <li className="nav-item">
                    <a className="nav-link" href="../search.html" title="Buscar">
                        Search
                    </a>
                </li>

                {/* Sign Out */}
                <li className="nav-item">
                    <a className="nav-link" href="../signout.html" title="desconectar">
                        Sign Out
                    </a>
                </li>

            </ul>

            {/* Inline searchBar
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                       aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Search
                </button>
                {/* end searchBar
            </form>*/}
            {/* end Id="navbarSupportedContent" */}
        </div>
        {/* end navbar */}
    </nav>
    {/* end id="navbar" */}
</div>

    );
}

export default Navigation;