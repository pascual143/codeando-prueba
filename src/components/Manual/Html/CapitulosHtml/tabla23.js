import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import tabla23 from '../../../../styles/img/capitulosPics/tabla23.jpg';

class Tabla extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Crear una tabla</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Crear una tabla y sus filas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento HTML <code>&lg;table&gt;</code> permite a los autores web mostrar datos tabulares (como texto, imágenes, enlaces, otras tablas,
                            etc.) en una tabla bidimensional con filas y columnas de celdas.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Antes de mostrar los datos, primero debe crear la tabla que contendrá los datos utilizando el elemento <code>&lg;table&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lg;table&gt;</code> contendrá todos los datos tabulares que quieres mostrar.
						</p>
						<br />
						<h2>
							&nbsp;&nbsp;&nbsp;Filas de la tabla
						</h2>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En muchos programas que usan tablas, la tabla ya está predefinida para usted, lo que significa que contiene las filas, columnas y celdas que contendrán datos. En HTML, se deben crear todos estos componentes.
						</p>
						<br />
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El primer paso para ingresar datos en la tabla es agregar filas usando el elemento de fila de la tabla: <code>&lg;tr&gt;</code>.
						</p>
						<div style={{ margin: 'auto', width: '70%' }}>
							<img
								className="materialboxed"
								width="450"
								height="400"
								alt="Imagenes como hyperlinks son utilizados muy a menudo y dan un resultado llamativo"
								data-caption="Imagenes como hyperlinks son utilizados muy a menudo y dan un resultado llamativo"
								src={tabla23}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, se han agregado dos filas a la tabla.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Tabla;
