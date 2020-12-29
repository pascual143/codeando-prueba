import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import tabla23 from '../../../../styles/img/capitulosPics/tabla23.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class Tabla extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Crear una tabla - Aprende codigo con Codeando Html Css JavaScript Bootstrap jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
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
						<div style={{ margin: '10px', textAlign: 'center' }}>
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
