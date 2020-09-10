import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import bordesTablas25 from '../../../../styles/img/capitulosPics/bordesTablas25.jpg';
import bordesTablas25b from '../../../../styles/img/capitulosPics/bordesTablas25b.jpg';

class BordesTablas25 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Bordes de las Tablas</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Los Bordes de las Tablas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hasta ahora, las tablas que ha creado han sido un poco
							difíciles de leer porque no tienen bordes.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En versiones anteriores de HTML, se podía agregar un
							borde a una tabla usando el atributo de borde y configurándolo igual a un entero. Este
							entero representaría el grosor del borde.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="500"
								height="350"
								alt="Bordes de las tablas en html"
								data-caption="Bordes de las tablas en html"
								src={bordesTablas25}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El código que se muestra en el ejemplo anterior está en
							desuso, así que no lo use. Su objetivo es ilustrar las convenciones más antiguas que puede
							encontrar al leer el código de otros desarrolladores.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es probable que el navegador aún interprete su código
							correctamente si usa el atributo de borde, pero eso no significa que deba usarse el
							atributo. En cambio, puede lograr el mismo efecto usando CSS.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="450"
								height="300"
								alt="Bordes de las tablas en css. Esta es una manera mas profesional que veramos mas adelante"
								data-caption="Bordes de las tablas en css. Esta es una manera mas profesional que veremos mas adelante"
								src={bordesTablas25b}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El código en el ejemplo anterior usa CSS en lugar de
							HTML para mostrar los bordes de la tabla.
						</p>
						<br />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default BordesTablas25;
