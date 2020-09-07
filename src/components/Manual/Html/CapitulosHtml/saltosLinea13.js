import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import saltosLinea13 from '../../../../styles/img/capitulosPics/saltosLinea13.jpg';
import comentarios13 from '../../../../styles/img/capitulosPics/comentarios13.jpg';

class SaltosLinea extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Saltos de Linea</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Saltos de Linea</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El espacio entre el código en un archivo HTML no afecta
							el posicionamiento de los elementos en el navegador.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para ello puedes usar el elemento de salto de línea
							HTML: <code>&lt;br&gt;</code>.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es único porque solo está compuesto por una etiqueta de
							inicio.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puede usarlo en cualquier lugar dentro de su
							código HTML.
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="750"
								height="450"
								alt="Saltos de pagina"
								data-caption="Saltos de pagina"
								src={saltosLinea13}
							/>
						</div>
						<br />
						<h1 className="h1__tituloCapitulos">Comentar párrafos en nuestro codigo</h1>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los archivos HTML también le permiten agregar
							comentarios a su código.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los comentarios comienzan con <code>&lt;!-</code> y
							terminan con <code>-&gt;</code>. Cualquier carácter intermedio, palabra, signo, etcétera,
							será ignorado por el navegador.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incluir comentarios en su código es útil por muchas
							razones:
						</p>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Le ayudan a usted (y a otros) a
							comprender su código si decide regresar y revisarlo en una fecha mucho más tardía.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Le permiten experimentar con código
							nuevo, sin tener que eliminar el código antiguo.
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="450"
								height="350"
								alt="Los comentarios son utiles para guardar informacion que luego no se vera en el navegador"
								data-caption="Los comentarios nos sirven para organizar mejor nuestro codigo"
								src={comentarios13}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default SaltosLinea;
