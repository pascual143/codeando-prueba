import React, { Component } from 'react'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

// import QueEsHtml from '../../Tutorial/Html/CapitulosHtml/queEsHtml';
// import AnatomiaHtml from '../../Tutorial/Html/CapitulosHtml/anatomiaHtml';

export default class MenuApuntesHtml extends Component {
    	render() {
		return (
			<div>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Categorias Menu Navegacion - Aprende codigo con Codeando Html Css JavaScript Bootstrap jQuery</title>
					</Helmet>
				</div>
				<div>
				<li className="menu--link fontMainButtons">
				<i className=''></i>
								<div className="font" style={{minHeight:"250px"}}>

								<li className="menu--link"><Link to={"/Doctype"} className="menuDropdown">Doctype</Link></li>
								<li className="menu--link"><Link to={"/Html"} className="menuDropdown">Html</Link></li>
								<li className="menu--link"><Link to={"/body"} className="menuDropdown">Body</Link></li>
								<li className="menu--link"><Link to={"/etiquetaHtml"} className="menuDropdown">La etiqueta Html</Link></li>
								<li className="menu--link"><Link to={"/estructuraHtml"} className="menuDropdown">Estructura Html</Link></li>
								<li className="menu--link"><Link to={"/divs"} className="menuDropdown">Divs</Link></li>
								<li className="menu--link"><Link to={"/head"} className="menuDropdown">Head</Link></li>
								<li className="menu--link"><Link to={"/title"} className="menuDropdown">Title</Link></li>
								<li className="menu--link"><Link to={"/headings"} className="menuDropdown">Headings</Link></li>
								<li className="menu--link"><Link to={"/atributos"} className="menuDropdown">Atributos</Link></li>
								<li className="menu--link"><Link to={"/texto"} className="menuDropdown">Texto</Link></li>
								<li className="menu--link"><Link to={"/estilosTexto"} className="menuDropdown">Estilos Texto</Link></li>
								<li className="menu--link"><Link to={"/saltosLinea"} className="menuDropdown">Saltos Linea</Link></li>
								<li className="menu--link"><Link to={"/listasNoOrdenadas"} className="menuDropdown">Listas No Ordenadas</Link></li>
								<li className="menu--link"><Link to={"/listasOrdenadas"} className="menuDropdown">Listas Ordenadas</Link></li>
								<li className="menu--link"><Link to={"/imagenes"} className="menuDropdown">Imagenes</Link></li>
								<li className="menu--link"><Link to={"/videos"} className="menuDropdown">Videos</Link></li>
								<li className="menu--link"><Link to={"/anclasHyperlinks"} className="menuDropdown">Anclas e Hyperlinks</Link></li>
								<li className="menu--link"><Link to={"/enlacePagina"} className="menuDropdown">Enlace a Pagina</Link></li>
								<li className="menu--link"><Link to={"/enlaceOtra"} className="menuDropdown">Enlace Externo</Link></li>
								<li className="menu--link"><Link to={"/imagenesHyperlink"} className="menuDropdown">Imagenes Hyperlink</Link></li>
								<li className="menu--link"><Link to={"/tabla"} className="menuDropdown">Tablas</Link></li>
								<li className="menu--link"><Link to={"/encabezadoTabla"} className="menuDropdown">Encabezado Tabla</Link></li>
								<li className="menu--link"><Link to={"/bordesTabla"} className="menuDropdown">Borde Tabla</Link></li>
								<li className="menu--link"><Link to={"/expandiendoColumnas"} className="menuDropdown">Expandir Columnas</Link></li>
								<li className="menu--link"><Link to={"/ensanchandoFilas"} className="menuDropdown">Ensanchando Filas</Link></li>
								<li className="menu--link"><Link to={"/cuerpoTabla"} className="menuDropdown">Cuerpo Tabla</Link></li>
								<li className="menu--link"><Link to={"/cabezaTabla"} className="menuDropdown">Cabeza Tabla</Link></li>
								<li className="menu--link"><Link to={"/footerTabla"} className="menuDropdown">Pie de Tabla</Link></li>
								<li className="menu--link"><Link to={"/introduccionFormularios"} className="menuDropdown">Intro Formularios</Link></li>
								<li className="menu--link"><Link to={"/entradaTexto"} className="menuDropdown">Entrada Texto</Link></li>
								<li className="menu--link"><Link to={"/agregarEtiqueta"} className="menuDropdown">Agregar Etiqueta</Link></li>
								<li className="menu--link"><Link to={"/entradaContrasena"} className="menuDropdown">Entrada Contraseña</Link></li>
								<li className="menu--link"><Link to={"/entradaNumeros"} className="menuDropdown">Entrada Numeros</Link></li>
								<li className="menu--link"><Link to={"/rangoEntrada"} className="menuDropdown">Rango de Entrada</Link></li>
								<li className="menu--link"><Link to={"/entradaVerificacion"} className="menuDropdown">Entrada Verificacion</Link></li>
								<li className="menu--link"><Link to={"/entradaRadio"} className="menuDropdown">Entrada Radio</Link></li>
								<li className="menu--link"><Link to={"/listaDesplegable"} className="menuDropdown">Lista Desplegable</Link></li>
								<li className="menu--link"><Link to={"/entradaDataList"} className="menuDropdown">Entrada DataList</Link></li>
								<li className="menu--link"><Link to={"/elementoAreaTexto"} className="menuDropdown">Area de Texto</Link></li>
								<li className="menu--link"><Link to={"/validacionFormularios"} className="menuDropdown">Validacion Formularios</Link></li>
								<li className="menu--link"><Link to={"/requerirEntrada"} className="menuDropdown">Requerir Entrada</Link></li>
								<li className="menu--link"><Link to={"/establecerMinMax"} className="menuDropdown">Establecer Minimo y Maximo</Link></li>
								<li className="menu--link"><Link to={"/longitudTexto"} className="menuDropdown">Longitud Texto</Link></li>
								<li className="menu--link"><Link to={"/coincidirPatron"} className="menuDropdown">Coincidir Patron</Link></li>
								<li className="menu--link"><Link to={"/semanticoHtml"} className="menuDropdown">Semantico Html</Link></li>
								<li className="menu--link"><Link to={"/piePagina"} className="menuDropdown">Pie Pagina</Link></li>
								<li className="menu--link"><Link to={"/articuloSeccion"} className="menuDropdown">Article Section</Link></li>
								<li className="menu--link"><Link to={"/aside"} className="menuDropdown">Aside</Link></li>
								<li className="menu--link"><Link to={"/figureFigcaption"} className="menuDropdown">Figure Figcaption</Link></li>

							</div>
					</li>
					</div>
			</div>
		);
	}
}
