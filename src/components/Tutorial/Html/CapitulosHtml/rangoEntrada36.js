import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import rangoEntrada36 from '../../../../styles/img/capitulosPics/rangoEntrada36.jpg';

class RangoEntrada36 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>codeando</title>
							<title>Rango de Entrada</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Rango de Entrada o input "rango"</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usar un <code>&lt;</code>input type = "number"<code>&gt;</code>{' '}
							es excelente si queremos permitir que los usuarios escriban cualquier número de su elección.
							Pero, si quisiéramos limitar qué números podrían escribir nuestros usuarios, podríamos
							considerar usar un valor de tipo diferente. Otra opción que podríamos usar es establecer el
							tipo en "rango" que crea un control deslizante.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para establecer los valores mínimos y máximos del
							control deslizante, asignamos valores al atributo min y max del <code>&lt;input&gt;</code>.
							También podríamos controlar qué tan suave y fluido funciona el control deslizante asignando
							un valor al atributo de paso. Los valores de paso más pequeños harán que el control
							deslizante sea más fluido, mientras que los valores de paso más grandes harán que el control
							deslizante se mueva más notablemente. Eche un vistazo al código para crear un control
							deslizante:
						</p>
						<br />
						<div style={{ margin: 'auto', width: '70%' }}>
							<img
								className="materialboxed"
								width="700"
								height="200"
								alt="Rango de entrada o Input range"
								data-caption="Rango de entrada o Input range"
								src={rangoEntrada36}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El código anterior representa un control deslizante
							renderizado para control de volumen.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, cada vez que el control
							deslizante se mueve, el valor del atributo de valor <code>&lt;input&gt;</code> también
							cambia.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default RangoEntrada36;
