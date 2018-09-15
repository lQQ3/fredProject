import React, { Component } from '../node_modules/react';
import './style.css';
import './styleNav.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/Navigation.js';


/* Olivas Mowing Service Database Frontpage*/
/* 9-10-2018 */
/* Shawn Rice */



class FrontPage extends Component {

render() {
    return (
        <body>
            <Navigation/>
            <div id="titlebar">
                {/* titlebar background */}
                <div className="gradient">
                    <h1>
                        Olivas Mowing Service Customer Database
                    </h1>
                    <hr/>
                {/* end className="gradient" */}
                </div>
            {/* end titlebar */}
            </div>

            {/* center the buttons */}
            <center>

                <React.Fragment>
                    {/* setDate calendar */}
                    <div className="setDateCal">
                        <form method="GET">
                            <div className="boxmodel">
                                <p>Which day would you like to work with?<br/>
                                    <input type="date" name="date" title="Con que dia te gustaria trabajar?" />
                                </p>
                            {/* end className="boxmodel" */}
                            </div>
                        </form>
                    {/* end className="setDateCal" */}
                    </div>
                </React.Fragment>
    
                <React.Fragment>
                    {/* setDate button */}
                    <div className="setDate">
                        <p>
                            <a href="../public/index.html"><input type="button" className="btn btn-outline-dark"
                            value="Set Date (Link Working)" title="Buscar"/>
                            </a>
                        </p>
                    {/* end className="setDate" */}
                    </div>
                 </React.Fragment>
    
                <React.Fragment>
                    {/* changeOMSInfo page button */}
                    <div className="changeOMSInfo">
                        <form method="POST" action="../public/changeOMSInfo.html">
                            <p>
                                <a href="../public/changeOMSInfo.html">
                                    <input type="button" className="btn btn-outline-dark"
                                    value="Change Olivas Mowing Service Company Information"
                                    title="Cambiar Informacion de Olivas Mowing Service" onClick={"changeOMSInfo()"} />
                                </a>
                            </p>
                        </form>
                    {/* end className="changeOMSInfo" */}
                    </div>
                </React.Fragment>
    
                <React.Fragment>
                    {/* newYearRoutine button */}
                    <div className="newYearRoutine">
                        <p>
                            <input type="submit" className="btn btn-outline-dark" value="New Year Routine (Not Working)"
                            title="Rutina de Nuevo Ano"/>
                        </p>
                    {/* end className="newYearRoutine" */}
                    </div>
                </React.Fragment>
    
                <br/>
                <hr/>
                <br/>
    
                <React.Fragment>
                    {/* closeProgram button */}
                    <div className="closeProgram">
                        <input type="submit" className="btn btn-outline-dark" value="Close Program (Not Working)"
                        title="Cerrar Programa"/>
                    {/* end className="closeProgram" */}
                    </div>
                </React.Fragment>
            {/* end centering the buttons */}
            </center>


            <script src="../node_modules/jquery/dist/jquery.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous">
            </script>
        
            <script src="../node_modules/popper.js/dist/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous">
            </script>
        
            <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossOrigin="anonymous">
            </script>
    
        </body>

        );

    }

}

export default FrontPage;
