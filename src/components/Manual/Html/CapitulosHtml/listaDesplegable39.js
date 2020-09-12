import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import listaDesplegable39 from '../../../../styles/img/capitulosPics/listaDesplegable39.jpg';

class ListaDesplegable39 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>La lista desplegable</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">La Lista Despeglable</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los botones de opción son geniales si queremos que nuestros usuarios elijan una opción entre algunas opciones visibles, ¡pero imagínense si tenemos una lista completa de opciones! Esta situación podría conducir rápidamente a una gran cantidad de botones de radio para realizar un seguimiento.
						</p>
                        <br />
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Una solución alternativa es usar una lista desplegable para permitir a nuestros usuarios elegir una opción de una lista organizada. Aquí está el código para crear un menú desplegable:
						</p>
						<div style={{ margin: 'auto', width: '55%' }}>
							<img
								className="materialboxed"
								width="650"
								height="500"
								alt="Enlaces a una pagina en el mismo sitio web"
								data-caption="Enlaces a una pagina en el mismo sitio web"
								src={listaDesplegable39}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qué representa: lista desplegable representada con la primera opción mostrando
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y si hacemos clic en el campo que contiene la primera opción, se revela la lista: lista desplegable representada con todas las opciones mostrando.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Observe en el código que estamos usando el elemento <code>&lt;seleccionar&gt;</code> para crear la lista desplegable. Para completar la lista desplegable, agregamos múltiples elementos <code>&lt;opcion&gt;</code>, cada uno con un atributo de valor. Por defecto, solo se puede seleccionar una de estas opciones.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El texto representado es el texto incluido entre las etiquetas <code>&lt;opcion&gt;</code> de apertura y cierre. Sin embargo, es el valor del atributo de valor que se utiliza en el envío de <code>&lt;formulario&gt;</code> (observe la diferencia en el texto y la capitalización del valor). Cuando se envía <code>&lt;forulario&gt;</code>, la información de este campo de entrada se enviará utilizando el nombre de <code>&lt;seleccionar&gt;</code> y el valor de la <code>&lt;opcion&gt;</code> elegida. Por ejemplo, si un usuario seleccionó Pizza de la lista desplegable, la información se enviaría como "lunch = pizza".
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ListaDesplegable39;
