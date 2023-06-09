"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[68922],{20826:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var n=o(78e3);const i=[(0,n.uE)('<p>En ADempiere un inventario físico permite modificar las cantidades de productos en existencia. Este es un procedimiento delicado, que solo se debe realizar cuando la cantidad en existencia registrada en ADempiere difiera de la cantidad real de existencia en la organización o almacén. El proceso consta en reemplazar la cantidad en existencia por la cantidad real contada.</p><p>Warning</p><p><strong>ERPyA</strong> no recomienda realizar inventario físico.</p><p>El procedimiento de inventario físico sólo debe ser realizado en casos críticos como la inconsistencia de cantidades de productos por motivo de robo, hurto o casos similares. De igual forma, deben estar presentes los responsables y supervisores del almacén donde existe la inconsistencia, así como también debe estar presente un representante de contabilidad y un jefe o gerente de la empresa para avalar el procedimiento.</p><p>El presente material elaborado por <strong>ERPyA</strong>, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar en ADempiere un inventario físico, en su versión 3.9.2 para la localización Venezuela.</p><ul><li>Registro de Inventario Físico</li><li>Consultar Detalle de Almacenamiento</li></ul><h3 id="registro-de-inventario-fisico" tabindex="-1"><a class="header-anchor" href="#registro-de-inventario-fisico" aria-hidden="true">#</a> Registro de Inventario Físico</h3><p>Para visualizar completamente el procedimiento del inventario físico, es generado el reporte <strong>Detalle de Almacenamiento</strong> seleccionando la ubicación donde será realizado el inventario físico y el producto por el cual es realizado dicho inventario. Ejemplificando el caso, el reporte puede ser visualizado de la siguiente manera.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image75.png" alt="Icono Guardar Cambios"></p><p>Imagen 1. Primer Reporte de Detalle de Almacenamiento</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Materiales</strong>, luego seleccione la ventana <strong>Inventario Físico</strong>.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image76.png" alt="Icono Guardar Cambios"></p><p>Imagen 2. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Inventario Físico</strong>, donde debe seleccionar el icono <strong>Registro Nuevo</strong> para crear un nuevo registro de inventario físico.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image77.png" alt="Icono Guardar Cambios"></p><p>Imagen 3. Ventana Inventario Físico y Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta realizando el documento de inventario físico.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image78.png" alt="Icono Guardar Cambios"></p><p>Imagen 4. Campo Organización</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción referente al documento de inventario físico que esta realizando en la organización seleccionada.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image79.png" alt="Icono Guardar Cambios"></p><p>Imagen 5. Campo Descripción|</p><p>Seleccione en el campo <strong>Almacén</strong>, el lugar donde es almacenado el producto por el cual se esta realizando el inventario físico.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image80.png" alt="Icono Guardar Cambios"></p><p>Imagen 6. Campo Almacén</p><p>Introduzca en el campo <strong>Fecha del Movimiento</strong>, la fecha en la cual es realizado en el almacén el conteo real del producto por el cual se esta realizando el inventario físico.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image81.png" alt="Icono Guardar Cambios"></p><p>Imagen 7. Campo Fecha de Movimiento</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image82.png" alt="Icono Guardar Cambios"></p><p>Imagen 8. Campo Tipo de Documento</p><p>Note</p><p>Recuerde guardar el registro de los campos de la pestaña seleccionando el icono <strong>Guardar Registros</strong> ubicado en la barra de herramientas de ADempiere.</p><p>Seleccione la pestaña <strong>Línea de Conteo de Inventario</strong> y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image83.png" alt="Icono Guardar Cambios"></p><p>Imagen 9. Pestaña Línea de Conteo de Inventario</p><p>Seleccione en el campo <strong>Ubicación</strong>, la ubicación exacta donde se encuentra localizado el producto dentro del almacén seleccionado. El mismo se puede seleccionar con ayuda del identificador ubicado del lado derecho del campo.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image84.png" alt="Icono Guardar Cambios"></p><p>Imagen 10. Campo Ubicación</p><p>Seleccione en el campo <strong>Producto</strong>, el producto por el cual se esta realizando el inventario físico.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image85.png" alt="Icono Guardar Cambios"></p><p>Imagen 11. Campo Producto</p><p>Introduzca en el campo <strong>Cantidad Contada</strong>, la cantidad real en existencia del producto seleccionado.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image86.png" alt="Icono Guardar Cambios"></p><p>Imagen 12. Campo Cantidad Contada</p><p>Note</p><p>Debe ser ingresada la cantidad real que existe físicamente en el almacén seleccionado.</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image87.png" alt="Icono Guardar Cambios"></p><p>Imagen 13. Icono Guardar Cambios</p><p>Podrá visualizar que es cargada automáticamente la cantidad de productos en existencia que se encuentran registrados en ADempiere.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image88.png" alt="Icono Guardar Cambios"></p><p>Imagen 14. Campo Cantidad en Libros</p><p>Seleccione la pestaña principal <strong>Conteo de Inventario</strong> y luego la opción <strong>Completar</strong>, ubicada en la parte inferior derecha de la ventana.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image89.png" alt="Icono Guardar Cambios"></p><p>Imagen 15. Pestaña Conteo de Inventario</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para completar el documento <strong>Inventario Físico</strong> que esta realizando.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image90.png" alt="Icono Guardar Cambios"></p><p>Imagen 16. Acción Completar y Opción OK</p><h3 id="consultar-detalle-de-almacenamiento" tabindex="-1"><a class="header-anchor" href="#consultar-detalle-de-almacenamiento" aria-hidden="true">#</a> Consultar Detalle de Almacenamiento</h3><p>Al generar el reporte <strong>Detalle de Almacenamiento</strong> seleccionando la ubicación donde fue realizado el inventario físico y el producto por el cual fue realizado dicho inventario, se puede visualizar el reporte de la siguiente manera.</p><p><img src="/assets/img/docs/materials-management/mam-materials-image999.png" alt="Icono Guardar Cambios"></p><p>Imagen 17. Segundo Reporte de Detalle de Almacenamiento</p>',63)],r={},t=(0,o(13860).Z)(r,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,i)}]])},93124:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-6ba97072","path":"/docs/material-management/physical-inventory.html","title":"Inventario Físico","lang":"es-ES","frontmatter":{"title":"Inventario Físico","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"En ADempiere un inventario físico permite modificar las cantidades de productos en existencia. Este es un procedimiento delicado, que solo se debe realizar cuando la cantidad en ex","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/material-management/physical-inventory.html"}],["meta",{"property":"og:title","content":"Inventario Físico"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:21:37.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:21:37.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"Registro de Inventario Físico","slug":"registro-de-inventario-fisico","children":[]},{"level":3,"title":"Consultar Detalle de Almacenamiento","slug":"consultar-detalle-de-almacenamiento","children":[]}],"git":{"createdTime":1683130897000,"updatedTime":1683130897000,"contributors":[{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":3.09,"words":926},"filePathRelative":"docs/material-management/physical-inventory.md","localizedDate":"3 de mayo de 2023"}')}}]);