"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[33835],{54796:(e,o,a)=>{a.r(o),a.d(o,{default:()=>b});var n=a(78e3);const r=(0,n._)("h2",{id:"relacion-de-ventas-en-consignacion",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#relacion-de-ventas-en-consignacion","aria-hidden":"true"},"#"),(0,n.Uk)(" Relación de Ventas en Consignación")],-1),s=(0,n.Uk)("Para la relación de las ventas en consignación, es obligatoria la configuración de las mismas. Dicha configuración se encuentra explicada en el material ''configuración de ventas en consignación'', elaborado por "),c={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},t=(0,n.Uk)("ERPyA"),i=(0,n.Uk)(" y deben ser cumplidas de manera obligatoria para garantizar el correcto funcionamiento del procedimiento de ventas en consignación."),l=(0,n._)("p",null,[(0,n.Uk)('Adicional a ello, la venta no debe estar incluida en ningún documento por pagar. De lo contrario, el registro no podrá ser visualizado al momento ser cargada la información a la pestaña "'),(0,n._)("strong",null,"Línea de Factura"),(0,n.Uk)('", de la ventana "'),(0,n._)("strong",null,"Documentos por Pagar"),(0,n.Uk)('".')],-1),p=(0,n.Uk)("Luego de las modificaciones realizadas por "),d={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("ERPyA"),u=(0,n.Uk)(' no es necesario realizar un documento por pagar (pre-factura), para relacionar la venta o uso interno de los productos en consignación. Si se requiere relacionar al proveedor o simplemente consultar las mismas, se puede generar el "'),m=(0,n._)("strong",null,"Reporte de Detalle de Consignación",-1),q=(0,n.Uk)('".'),f=(0,n.uE)('<p>Para ejemplificar el caso se tienen los siguientes productos en consignación del proveedor &quot;<strong>E.R.P. Consultores y Asociados, C.A.</strong>&quot;</p><pre><code>- 01-Tap            Tapabocas\n- 01-TerCont        Termos Contigo\n- 01-Chup           Chupetas\n- 01-Lib            Libretas (Cuadros)\n</code></pre><p>Dichos productos se encuentran incluidos en la orden de compra &quot;<strong>OCC-10</strong>&quot;.</p><h2 id="reporte-de-detalle-de-consignacion" tabindex="-1"><a class="header-anchor" href="#reporte-de-detalle-de-consignacion" aria-hidden="true">#</a> <strong>Reporte de Detalle de Consignación</strong></h2><p>Genere el &quot;<strong>Reporte de Detalle de Consignación</strong>&quot;, filtrando por &quot;<strong>Socio del Negocio Entrega Directa</strong>&quot;, &quot;<strong>Asignado</strong>&quot; y &quot;<strong>F. Documento</strong>&quot;, que corresponde al rango de fecha de facturación.</p><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/consignment-detail-report.png" alt="reporte de detalle de consignación"></p><p>Imagen 1. Reporte de Detalle de Consignación</p><pre><code>El reporte de relación de productos en consignación se puede generar muchas veces y sirve para ver los productos pendientes por relacionar, los productos relacionados o todos los productos sin importar si está o no relacionado.\n</code></pre><h2 id="registrar-documento-por-pagar" tabindex="-1"><a class="header-anchor" href="#registrar-documento-por-pagar" aria-hidden="true">#</a> <strong>Registrar Documento por Pagar</strong></h2><p>La factura de cuentas por pagar debe ser registrada cuando el proveedor realiza la entrega de la misma a cuentas por pagar. Si el proveedor hace entrega de más de una factura, se debe realizar por cada una de ellas, el procedimiento que se explica a continuación.</p><p>Se debe crear en ADempiere, las facturas entregadas por el proveedor exactamente iguales.</p><h3 id="el-documento-por-pagar-deber-ser-creado-bajo-las-restricciones-contempladas-en-la-factura-entregada-por-el-proveedor" tabindex="-1"><a class="header-anchor" href="#el-documento-por-pagar-deber-ser-creado-bajo-las-restricciones-contempladas-en-la-factura-entregada-por-el-proveedor" aria-hidden="true">#</a> El documento por pagar deber ser creado bajo las restricciones contempladas en la factura entregada por el proveedor</h3><ul><li><p>Introduzca en el campo &quot;<strong>No.</strong>&quot; del Documento, el número de documento que contiene la factura entregada por el proveedor.</p></li><li><p>Seleccione en el campo &quot;<strong>Fecha de Facturación</strong>&quot;, la fecha de facturación que contiene la factura entregada por el proveedor.</p></li><li><p>Seleccione en el campo &quot;<strong>Fecha Contable</strong>&quot;, la fecha contable que contiene la factura entregada por el proveedor.</p></li><li><p>Introduzca en el campo &quot;<strong>Descripción</strong>&quot;, una breve referencia del rango de ventas utilizado para generar los documentos por pagar.</p></li><li><p>Seleccione en el campo &quot;<strong>Lista de Precios</strong>&quot;, la lista de precios que utiliza la organización.</p></li><li><p>Seleccione en el campo &quot;<strong>Tipo de Conversión</strong>&quot;, el tipo de conversión establecido entre la organización y el proveedor.</p></li><li><p>Introduzca en el campo &quot;<strong>Nro de Control</strong>&quot;, el número de control que contiene la factura entregada por el proveedor.</p></li><li><p>Luego de cargar la información necesaria en la pestaña principal &quot;<strong>Factura</strong>&quot;, seleccione el icono &quot;<strong>Proceso</strong>&quot;, ubicado en la barra de herramientas de ADempiere.</p></li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/window-process-icon-documents-payable.png" alt="icono proceso de la ventana documentos por pagar"></p><p>Imagen 2. Icono Proceso de la Ventana Documentos por Pagar</p><ul><li>Seleccione la opción &quot;<strong>Crear Líneas desde Facturas de Consignación</strong>&quot;, desplegada por la selección del icono &quot;<strong>Proceso</strong>&quot;.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/option-create-lines-from-consignment-invoices.png" alt="opción crear líneas desde facturas de consignación"></p><p>Imagen 3. Opción Crear Líneas desde Facturas de Consignación</p><ul><li>Nota: Para registrar un documento por pagar desde un inventario de uso interno, se debe realizar el mismo procedimiento explicado anteriormente en el proceso registrar documentos por pagar por proveedor, con la diferencia de que en vez de seleccionar la opción &quot;<strong>Crear Líneas desde Facturas de Consignación</strong>&quot;, del icono &quot;<strong>Proceso</strong>&quot;, se selecciona la opción &quot;<strong>Crear Líneas desde Inventario de Uso Interno de Consignación</strong>&quot; y posteriormente el inventario de uso interno correspondiente.</li></ul><p>Podrá visualizar la ventana del proceso con diferentes campos que permiten filtrar la información de las ventas.</p><ul><li><p>La información a ser visualizada en el presente proceso, va a depender de las siguientes condiciones:</p><ul><li><p>La información cargada en la orden de compra, dicha orden debe estar en estado &quot;<strong>Completo</strong>&quot;.</p></li><li><p>La información visualizada en el reporte reporte de detalle de consignación.</p></li><li><p>De no coincidir la información del reporte con la información visualizada en el presente proceso, debe realizar lo siguiente:</p></li><li><p>Verificar que se cumpla con la configuración de ventas en consignación.</p></li><li><p>Verificar que el producto se encuentre incluido en una orden de compra, esto lo puede realizar generando el reporte reporte detalle de la orden.</p></li></ul></li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/process-window-create-lines-from-consignment-invoices.png" alt="ventana del proceso crear líneas desde facturas de consignación"></p><p>Imagen 4. Ventana del Proceso Crear Líneas desde Facturas de Consignación</p><ul><li>En el campo &quot;<strong>Socio del Negocio Entrega Directa</strong>&quot;, podrá visualizar el socio del negocio seleccionado en la pestaña principal &quot;<strong>Factura</strong>&quot;.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/business-partner-field-of-the-process.png" alt="campo socio del negocio del proceso"></p><p>Imagen 5. Campo Socio del Negocio</p><ul><li>Seleccione en el campo &quot;<strong>Orden de Venta</strong>&quot;, la orden para filtrar la búsqueda de información.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/process-sales-order-field.png" alt="campo orden de venta del proceso"></p><p>Imagen 6. Campo Orden de Venta</p><pre><code>La orden de compra es un factor clave y se debe colocar para poder crear la factura de cuentas por pagar desde la venta o el uso interno\n</code></pre><ul><li>Seleccione en el campo &quot;<strong>F. Documento</strong>&quot;, el rango de fecha de facturación para filtrar la búsqueda de información.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/process-billing-date-field.png" alt="campo fecha de facturación del proceso"></p><p>Imagen 7. Campo F. Documento</p><ul><li>Seleccione en el campo &quot;<strong>Producto</strong>&quot;, el producto para filtrar la búsqueda de información.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/process-product-field.png" alt="campo producto del proceso"></p><p>Imagen 8. Campo Producto del Proceso</p><ul><li>Seleccione la opción &quot;<strong>Comenzar Búsqueda</strong>&quot;, para filtrar la información en base a lo seleccionado anteriormente.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/option-start-process-search.png" alt="opción comenzar búsqueda del proceso"></p><p>Imagen 9. Opción Comenzar Búsqueda</p><ul><li>Seleccione todos los registros filtrados por el proceso.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/selection-of-filtered-records.png" alt="selección de registros filtrados"></p><p>Imagen 10. Selección de Registros</p><ul><li>Seleccione la opción &quot;<strong>OK</strong>&quot;, para cargar a la pestaña &quot;<strong>Línea de Factura</strong>&quot;, la información seleccionada anteriormente.</li></ul><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/process-ok-option.png" alt="opción ok de proceso"></p><p>Imagen 11. Opción OK</p><p>Seleccione el icono &quot;<strong>Refrescar</strong>&quot;, ubicado en la barra de herramientas de ADempiere, para actualizar la ventana &quot;<strong>Documentos por Pagar</strong>&quot; y se pueda visualizar la información cargada desde el proceso.</p><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/refresh-icon.png" alt="icono refrescar"></p><p>Imagen 12. Icono Refrescar</p><p>Seleccione la pestaña &quot;<strong>Línea de Factura</strong>&quot;, para revisar y verificar la información cargada desde el proceso.</p><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/invoice-line-tab.png" alt="pestaña línea de factura"></p><p>Imagen 13. Pestaña Línea de Factura</p><p>Seleccione la pestaña principal &quot;<strong>Factura</strong>&quot;, para completar el registro del documento por pagar.</p><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/main-tab-invoice.png" alt="pestaña principal factura"></p><p>Imagen 14. Pestaña Principal Factura</p><ul><li><p>Si se requiere cambiar el tipo de conversión, es necesario recalcular la tasa para las líneas de la factura. Para ello, se debe realizar el siguiente procedimiento:</p><ul><li><p>Seleccione el icono &quot;<strong>Proceso</strong>&quot;, ubicado en la barra de herramientas de ADempiere</p></li><li><p>Seleccione la opción &quot;<strong>Recalcular Tasa para Líneas de Factura</strong>&quot;, para recalcular los precios de los productos que contiene el documento por pagar, en base a la lista de precios y tipo de conversión seleccionada anteriormente.</p></li></ul></li><li><p>Podrá visualizar la ventana del proceso &quot;<strong>Recalcular Tasa para Líneas de Factura</strong>&quot;, para recalcular los precios de los productos cargados a la línea de la factura.</p></li><li><p>Seleccione la opción &quot;<strong>OK</strong>&quot;, para ejecutar el proceso.</p></li></ul><p>Seleccione el icono &quot;<strong>Proceso</strong>&quot;, ubicado en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/window-process-icon-documents-payable.png" alt="icono proceso de la ventana documentos por pagar"></p><p>Imagen 15. Icono Proceso</p><p>Seleccione la opción &quot;<strong>Procesar Factura</strong>&quot;, ubicada en el menú desplegado por el icono &quot;<strong>Proceso</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/process-icon-invoice-option.png" alt="opción procesar factura del icono proceso"></p><p>Imagen 16. Opción Procesar Factura</p><p>Seleccione la acción &quot;<strong>Completar</strong>&quot; y la opción &quot;<strong>OK</strong>&quot;, para conmpletar el registro del documentonpor pagar.</p><p><img src="/assets/img/docs/lve/procedures/consigment-management/consignment-sales/resources/action-complete-and-option-ok.png" alt="acción completar y opción ok"></p><p>Imagen 17. Opción Completar y Opción OK</p><p><strong>Al anular una orden de compra o documento por pagar se liberan todos los documentos de ventas o uso interno relacionados a los mismos.</strong></p>',65),v={},b=(0,a(13860).Z)(v,[["render",function(e,o){const a=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[r,(0,n._)("p",null,[s,(0,n._)("a",c,[t,(0,n.Wm)(a)]),i]),l,(0,n._)("p",null,[p,(0,n._)("a",d,[g,(0,n.Wm)(a)]),u,m,q]),f])}]])},75893:(e,o,a)=>{a.r(o),a.d(o,{data:()=>n});const n=JSON.parse('{"key":"v-4ab4854e","path":"/docs/lve/procedures/consignment-management/consignment-sales/consignment-sales-ratio.html","title":"Relación de Ventas en Consignación","lang":"es-ES","frontmatter":{"title":"Relación de Ventas en Consignación","icon":"app","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos"],"article":false,"summary":"Relación de Ventas en Consignación Para la relación de las ventas en consignación, es obligatoria la configuración de las mismas. Dicha configuración se encuentra explicada en el m","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/consignment-management/consignment-sales/consignment-sales-ratio.html"}],["meta",{"property":"og:title","content":"Relación de Ventas en Consignación"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-29T22:12:23.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:modified_time","content":"2023-06-29T22:12:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Relación de Ventas en Consignación","slug":"relacion-de-ventas-en-consignacion","children":[]},{"level":2,"title":"Reporte de Detalle de Consignación","slug":"reporte-de-detalle-de-consignacion","children":[]},{"level":2,"title":"Registrar Documento por Pagar","slug":"registrar-documento-por-pagar","children":[{"level":3,"title":"El documento por pagar deber ser creado bajo las restricciones contempladas en la factura entregada por el proveedor","slug":"el-documento-por-pagar-deber-ser-creado-bajo-las-restricciones-contempladas-en-la-factura-entregada-por-el-proveedor","children":[]}]}],"git":{"createdTime":1686950623000,"updatedTime":1688076743000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":5.11,"words":1533},"filePathRelative":"docs/lve/procedures/consignment-management/consignment-sales/consignment-sales-ratio.md","localizedDate":"16 de junio de 2023"}')}}]);