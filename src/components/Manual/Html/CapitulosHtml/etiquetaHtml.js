import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import doctype from '../../../../styles/img/capitulosPics/doctype.jpg';

class EtiquetaHtml extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>La etiqueta HTML</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">La etiqueta HTML</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La declaración <code>&lt;!DOCTYPE html&gt;</code> proporciona al navegador dos datos 
                            (el tipo de documento y la versión HTML que se espera), pero en realidad no agrega ninguna estructura o contenido HTML.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para crear contenido y estructura HTML, debemos agregar etiquetas de apertura y 
                            cierre <code>&lt;html&gt;</code> después de declarar <code>&lt;!DOCTYPE html&gt;</code>:
						</p>
                        <div style={{margin:"auto", width: "50%"}}>
                            <img className="materialboxed" width="350" height="250" alt="Anatomia Html" data-caption="doctype es la expresion para especificar al navegador de que tipo de documento se trata" src={doctype}></img>
						</div>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento HTML <code>&lt;html&gt;</code> (o elemento HTML raiz) representa la raiz de un documento HTML. El resto de elementos descienden de este elemento.
                            Dado que el elemento <code>&lt;html&gt;</code> es el primero en un documento, aparte de los comentarios, se llama el elemento raíz.
						</p>                        
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por último, el código HTML siempre se guarda en un archivo con una extensión .html. Su archivo principal suele ser index.html.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EtiquetaHtml;
