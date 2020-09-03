import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import element from '../../../../styles/img/capitulosPics/element.png';
import InspectorDeGoogle from '../../../../styles/img/capitulosPics/InspectorDeGoogle.jpg';

class AnatomiaHtml extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Anatomia del Html</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Anatomia del Html</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento generalmente consiste en
							una etiqueta(tag) de apertura y una etiqueta de cierre, 
							que contiene el nombre del elemento rodeado de corchetes angulares y el contenido
							intermedio:
						</p>
                        	<img width="400" height="120" alt="elementos" data-caption="elementos" src={element} style={{margin: "auto", width: "50%"}}/>
						<p>
							{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay algunos elementos HTML que no tienen una etiqueta de cierre ni ningún contenido. Estos se llaman elementos vacíos. Estos son algunos <img>, <meta>, <link> e <input>. */}
						</p>						
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML a veces se llama un lenguaje de
							programación pero no tiene lógica, por lo que es un lenguaje de marcado.{' '}
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Html proporciona estructura al contenido que
							aparece en un sitio web, como imágenes, texto o videos. (Haga clic con el botón derecho en
							cualquier página de Internet, seleccione "Inspeccionar" y verá HTML en un panel de su
							pantalla.)
						</p>
						<div style={{margin:"auto", width: "50%"}}>
                            <img className="materialboxed" width="550" height="350" alt="Anatomia Html" data-caption="La estructura basica en html consta de elementos divisores" src={InspectorDeGoogle}></img>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AnatomiaHtml;
