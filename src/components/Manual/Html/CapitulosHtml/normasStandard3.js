import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
// import element from '../../../../styles/img/element.png';

class NormasStandar extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Normas standar de los documentos HTML</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Normas standar de los documentos HTML</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Preparándose para HTML, es hora de aprender cómo configurar un archivo HTML.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los archivos HTML requieren ciertos elementos para configurar el documento correctamente. 
                            Puede informar a los navegadores web que está utilizando HTML comenzando su documento con una declaración de tipo de documento.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esta declaración se ve así:
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CTYPE html
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esta declaración es una instrucción y debe ser la primera línea de código en su documento HTML. 
                            Le dice al navegador qué tipo de documento esperar, junto con qué versión de HTML se está utilizando en el documento. Por ahora, el navegador 
                            supondrá correctamente que el html en  DOCTYPE html se refiere a HTML5, ya que es el estándar actual.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por último, el código HTML siempre se guarda en un archivo con una extensión .html.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default NormasStandar;
