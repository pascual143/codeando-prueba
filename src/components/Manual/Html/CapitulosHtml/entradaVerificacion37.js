import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import entradaVerificacion37 from '../../../../styles/img/capitulosPics/entradaVerificacion37.jpg';

class EntradaVerificacion37 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Entrada de la casilla de Verificacion o checkbox entry</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">
							Entrada de la casilla de verificacion o casilla checkbox{' '}
						</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hasta ahora, los tipos de entradas que permitimos eran
							todas opciones únicas. Pero, ¿qué pasa si presentamos múltiples opciones a los usuarios y
							les permitimos seleccionar cualquier cantidad de opciones? En un <code>&lt;form&gt;</code>{' '}
							usaremos el elemento <code>&lt;input&gt;</code> y estableceremos type = "checkbox".
						</p>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
						<br />
						<div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="600"
								height="400"
								alt="Entrada de la casilla de verificacion o casilla checkbox "
								data-caption="Entrada de la casilla de verificacion o casilla checkbox "
								src={entradaVerificacion37}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El codigo anterior representa un formulario HTML que le
							pide al usuario que seleccione ingredientes de pizza y tres selecciones de ingredientes como
							casillas de verificación
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, hay valores asignados al
							atributo de valor de las casillas de verificación. Estos valores no son visibles en el
							formulario en sí, por eso es importante que usemos una <code>&lt;etiqueta&gt;</code>{' '}
							asociada para identificar la casilla de verificación.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cada <code>&lt;input&gt;</code> tiene el mismo valor
							para el atributo de nombre. El uso del mismo nombre para cada casilla de verificación agrupa
							los <code>&lt;input&gt;</code>s juntos. Sin embargo, cada <code>&lt;input&gt;</code> tiene
							una identificación única para emparejar con un <code>&lt;label&gt;</code>.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EntradaVerificacion37;
