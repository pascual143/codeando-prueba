import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import creandoNormas3 from '../../../../styles/img/capitulosPics/creandoNormas3.jpg';

class CreandoNormas3 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" />
							<meta
								name="keywords"
								content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender"
							/>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>TandGo</title>
							<title>
								Selectores Css - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
							</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
						<div className="left_section menu_left">
							<div className="left_section" style={{ margin: '10px' }}>
								<MenuTutorialCss />
							</div>
						</div>
					</nav>
					<div>
						<h1 className="h1__tituloCapitulos">Creando las Normas de los Estilos</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En CSS, en cada norma del estilo se
							comprenden dos partes principals:
						</p>
						<p>• Selector: especifica que elemento/s del documento Html se alcanzan en esta normas.</p>
						<p>• Bloque de Declaracion: especifica que propiedades deberian estilizarse en el elemento
							seleccionado.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="100"
								alt="Creando las normas de los estilos en el archivo css que iran descendiendo en cascada por los tag de html"
								data-caption="Creando las normas de los estilos en el archivo css que iran descendiendo en cascada por los tag de html"
								src={creandoNormas3}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En este ejemplo, estamos llamando al
							selector h1. Lo que significa que cada element h1 tendra los estilos que le aportemos. En el
							bloque de declaración, la propiedad color de CSS es asignada con un valor red. Es decir, que
							cada elemento h1 del archivo Html tendra un el texto en rojo. La segunda declaracion CSS es
							una propiedad asignada al valor azul, lo que significa que cada element h1 de Html tendra un
							fondo azul.
						</p>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Externo es el mas utilizado. Todo se hace
							externamente en un archivo .css. Esto significa que puedes hacer todo el estilizado en un
							archivo separado y aplicar el CSS a cualquier página que quieras. El estilo Externo también
							puede mejorar los tiempos de carga.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En la declaracion CSS se usan los dos puntos
							( : ) para asignar una valor a la propiedad. A su vez, cada declaracion en separada por un
							punto y coma ( ; )
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CreandoNormas3;
