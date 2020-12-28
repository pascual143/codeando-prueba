import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import cuerpoTablas28 from '../../../../styles/img/capitulosPics/cuerpoTablas28.jpg';

class CuerpoTabla28 extends Component {
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
							<title>Codeando</title>
							<title>Cuerpo de la Tabla</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Cuerpo de las Tablas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Con el tiempo, una tabla puede crecer para contener muchos datos y llegar a ser muy larga. Cuando esto sucede, la tabla se puede seccionar para que sea más fácil de administrar.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las tablas largas se pueden seccionar utilizando el elemento del cuerpo de la tabla: <code>&lt;tbody&gt;</code>.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;tbody&gt;</code> debe contener todos los datos de la tabla, excluyendo los encabezados de la tabla (más sobre esto en un ejercicio posterior).
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="400"
								height="450"
								alt="Cuerpo de la Tabla"
								data-caption="Cuerpo de la Tabla"
								src={cuerpoTablas28}
							/>
						</div>
						<br />
						<p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, todos los datos de la tabla están contenidos dentro de un elemento del cuerpo de la tabla. Sin embargo, tenga en cuenta que los encabezados también se guardaron en el cuerpo de la tabla; cambiaremos esto en el próximo ejercicio.
                        </p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CuerpoTabla28;
