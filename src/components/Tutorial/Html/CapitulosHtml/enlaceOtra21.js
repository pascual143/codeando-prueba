import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import enlaceOtra21 from '../../../../styles/img/capitulosPics/enlaceOtra21.jpg';

class EnlaceOtra extends Component {
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
							<title>Abrir enlaces en una nueva ventana</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Abrir enlaces en una nueva ventana</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¿Alguna vez habeis hecho clic en un enlace y habeis
							visto que la página web se abre en una nueva ventana del navegador? Si es así, puede
							agradecer el atributo de destino del elemento <code>&lt;a&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El atributo de destino especifica cómo se debe abrir un
							enlace.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es posible que uno o más enlaces en su página web
							enlacen a un sitio web completamente diferente.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para que un enlace se abra en una nueva ventana, el
							atributo de destino requiere un valor de _blank.
						</p>
						<div style={{ margin: 'auto', width: '65%'}}>
							<img
								className="materialboxed"
								width="700"
								height="140"
								alt="Enlaces a otra pagina web"
								data-caption="Enlaces a otra pagina web"
								src={enlaceOtra21}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, establecer el atributo de
							destino en "_blank" indica al navegador que abra la página relevante de Wikipedia en una
							nueva ventana.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Como veis utilizo la terminologia “abrir una nueva
							ventana”. Los nuevos navegadores ya no usan ventanas, añadieron hace tiempo el concepto
							pestanas para ver mas sitos web. Con target=”_blank”, en los navegadores modernos no abre
							una nueva ventana sino una nueva pestana.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EnlaceOtra;
