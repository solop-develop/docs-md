"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[12337],{88055:(e,a,o)=>{o.r(a),o.d(a,{default:()=>c});var r=o(78e3);const n=[(0,r.uE)('<p>En ADempiere es posible generar una devolución de los productos o materiales comprados a un proveedor determinado, el presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar una “Devolución a Proveedor” de la forma correcta.</p><p>El proceso para realizar una devolución a proveedor parte de una autorización de devolución a proveedor, generada para asegurar que se aplico un análisis y revisión de los productos recibidos, surgiendo de ello una contradicción que acarrea devolver uno, varios, o todos los productos recibidos. El procedimiento se realiza generando una autorización de devolución, para luego generar una devolución a proveedor. Todo el proceso culmina con una nota de crédito para reflejar en la factura de la compra el monto a disminuir por la cantidad de productos involucrados en la devolución.</p><p>A continuación se especifican los pasos a seguir para generar en ADempiere una devolución de productos o materiales comprados al proveedor por una determinada empresa.</p><ul><li>Autorización de Devolución a Proveedor</li><li>Devolución a Proveedor</li><li>Completar Nota de Crédito Generada</li><li>Consultar Saldos Abiertos</li><li>Consultar Detalle de Transacciones</li></ul><h2 id="autorizacion-de-devolucion-a-proveedor" tabindex="-1"><a class="header-anchor" href="#autorizacion-de-devolucion-a-proveedor" aria-hidden="true">#</a> Autorización de Devolución a Proveedor</h2><p>Es el documento elaborado por la empresa luego de una evaluación de la condición de los productos o materiales comprados al proveedor, cuando estos no se encuentran en buenas condiciones o simplemente no cumplen con lo requerido, el mismo autoriza la devolución de uno, varios, o todos los productos o materiales comprados.</p><p>Para realizar una devolución a proveedor deben existir los documentos “Orden de Compra”, “Factura de Cuentas por Pagar” y “Recepción”. Para ejemplificar el registro de la devolución a proveedor se tienen los siguientes documentos.</p><p>Puede visualizar el documento “Orden de Compra” en estado “Completo”, con monto “10.000.000,00”.</p><p><img src="/assets/img/docs/return-management/rem-return-image46.png" alt="Campo"></p><p>Imagen 1. Documento Orden de Compra</p><p>Puede visualizar el “Factura de Cuentas por Pagar” en estado “Completo”, con monto “10.000.000,00”.</p><p><img src="/assets/img/docs/return-management/rem-return-image47.png" alt="Campo"></p><p>Imagen 2. Factura de Cuentas por Pagar</p><p>Puede visualizar el documento de “Recepción” en estado “Completo”, con monto “10.000.000,00”.</p><p><img src="/assets/img/docs/return-management/rem-return-image48.png" alt="Campo"></p><p>Imagen 3. Documento de Recepción</p><p>Al consultar saldos abiertos se puede visualizar el saldo correspondiente al monto de la factura de cuentas por pagar mostrado anteriormente.</p><p><img src="/assets/img/docs/return-management/rem-return-image49.png" alt="Campo"></p><p>Imagen 4. Saldos Abiertos</p><p>A continuación se define el proceso para la creación de una autorización de devolución a proveedor en ADempiere.</p><p>Ubique en el menú de ADempiere la ventana “Gestión de Compras”, luego seleccione la ventana “Orden de Devolución (Proveedor)”.</p><p><img src="/assets/img/docs/return-management/rem-return-image50.png" alt="Campo"></p><p>Imagen 5. Menú de ADempiere</p><p>Seleccione el icono “Registro Nuevo” en la barra de herramientas de ADempiere y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/return-management/rem-return-image51.png" alt="Campo"></p><p>Imagen 6. Icono de Registro Nuevo</p><p>Warning</p><p>Recuerde que cada campo es necesario e importante para obtener el registro exitoso del documento en ADempiere.</p><p>Seleccione en el campo “Organización”, la organización para la cual esta realizando el documento “Autorización de Devolución a Proveedor”.</p><p><img src="/assets/img/docs/return-management/rem-return-image52.png" alt="Campo"></p><p>Imagen 7. Campo Organización</p><p>Seleccione el tipo de documento a generar en el campo “Tipo de Documento Destino”, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA. Para este ejemplo el tipo de documento es “Autorización Devolución Proveedor Nacional”.</p><p><img src="/assets/img/docs/return-management/rem-return-image53.png" alt="Campo"></p><p>Imagen 8. Campo Tipo de Documento</p><p>Seleccione en el campo “Tipo Autorización Devolución”, el motivo o la condición del producto por el cual es requerida una autorización de devolución. Para este ejemplo el tipo de autorización es “Dañado”.</p><p><img src="/assets/img/docs/return-management/rem-return-image54.png" alt="Campo"></p><p>Imagen 9. Campo Tipo Autorización Devolución</p><p>Seleccione en el campo “Socio del Negocio”, el socio del negocio proveedor al cual se le realizará la devolución.</p><p><img src="/assets/img/docs/return-management/rem-return-image55.png" alt="Campo"></p><p>Imagen 10. Campo Socio del Negocio</p><p>Seleccione la dirección de localización del socio del negocio, en el campo “Dirección del Socio del Negocio”.</p><p><img src="/assets/img/docs/return-management/rem-return-image56.png" alt="Campo"></p><p>Imagen 11. Dirección del Socio del Negocio</p><p>Warning</p><p>Recuerde guardar los cambios realizados en cada pestaña del documento con ayuda del icono “Guardar” en la barra de herramientas de ADempiere, al guardar los cambios realizados se asigna automáticamente el número del documento en el campo “No. del Documento”.</p><p>Seleccione el icono “Proceso” ubicado en la barra de herramientas de ADempiere, luego seleccione la opción “Crear Orden de Devolución desde Entrega / Recibo” para crear la “Orden de Devolución” desde la recepción del producto.</p><p><img src="/assets/img/docs/return-management/rem-return-image57.png" alt="Campo"></p><p>Imagen 12. Icono Proceso</p><p>Podrá visualizar la siguiente ventana del proceso, donde debe seleccionar el documento de recepción donde se encuentra el producto.</p><p><img src="/assets/img/docs/return-management/rem-return-image58.png" alt="Campo"></p><p>Imagen 13. Ventana del Proceso y Selección del Documento de Recepción</p><p>Note</p><p>El campo “Socio del Negocio” viene precargado con la información seleccionada en el campo “Socio del Negocio” ubicado en la ventana “Orden de Devolución (Proveedor)”. Al seleccionar el identificador del campo “Entrega / Recibo” podrá visualizar las diferentes recepciones asociadas al socio del negocio que se encuentra seleccionado en dicho campo, permitiendole seleccionar la línea del documento de recepción donde se encuentra el producto involucrado en la devolución.</p><p>Seleccione la opción “Comenzar Búsqueda” para buscar las líneas del documento de recepción seleccionado.</p><p><img src="/assets/img/docs/return-management/rem-return-image59.png" alt="Campo"></p><p>Imagen 14. Opción Comenzar Búsqueda</p><p>Seleccione la línea del documento de recepción donde se encuentra el producto que se va a devolver, luego seleccione la opción “OK” para cargar el registro a la pestaña “Línea de Autorización”.</p><p><img src="/assets/img/docs/return-management/rem-return-image60.png" alt="Campo"></p><p>Imagen 15. Seleccionar Línea con el Producto a Devolver</p><p>Warning</p><p>Recuerde actualizar el registro de la ventana con ayuda del icono “Refrescar” ubicado en la barra de herramientas de ADempiere.</p><p>Seleccione la pestaña “Línea de Autorización” para verificar que los datos fueron cargados correctamente.</p><p><img src="/assets/img/docs/return-management/rem-return-image61.png" alt="Campo"></p><p>Imagen 16. Pestaña Línea de Autorización</p><p>Note</p><p>Si la cantidad de productos a devolver es menor a la cantidad de productos recepcionados, recuerde ingresar en el campo “Cantidad”, el valor o la cantidad de productos a devolver.</p><p>Regrese a la ventana principal “Autorización Devolución Proveedor”, seleccione la opción “Completar” en la parte inferior del documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image62.png" alt="Campo"></p><p>Imagen 17. Opción Completar</p><p>Seleccione la acción “Completar” y la opción “OK” para completar el documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image63.png" alt="Campo"></p><p>Imagen 18. Acción Completar</p><h2 id="devolucion-a-proveedor" tabindex="-1"><a class="header-anchor" href="#devolucion-a-proveedor" aria-hidden="true">#</a> Devolución a Proveedor</h2><p>Es el documento que refleja la devolución de uno, varios, o todos los productos o materiales comprados a un proveedor determinado. A continuación se define el proceso para la creación de una devolución a proveedor en ADempiere.</p><p>Ubique en el menú de ADempiere la ventana “Gestión de Devoluciones” y seleccione la ventana “Devolución a Proveedor”.</p><p><img src="/assets/img/docs/return-management/rem-return-image64.png" alt="Campo"></p><p>Imagen 19. Menú de ADempiere</p><p>Seleccione el icono “Registro Nuevo” en la barra de herramientas de ADempiere y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/return-management/rem-return-image65.png" alt="Campo"></p><p>Imagen 20. Icono Registro Nuevo</p><p>Warning</p><p>Recuerde que cada campo es necesario e importante para obtener el registro exitoso del documento en ADempiere.</p><p>Seleccione en el campo “Organización”, la organización para la cual esta realizando el documento “Devolución a Proveedor”.</p><p><img src="/assets/img/docs/return-management/rem-return-image66.png" alt="Campo"></p><p>Imagen 21. Campo Organización</p><p>Seleccione el tipo de documento a generar en el campo “Tipo de Documento Destino”, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA. Para este ejemplo el tipo de documento es “Devolución a Proveedor Nacional”.</p><p><img src="/assets/img/docs/return-management/rem-return-image67.png" alt="Campo"></p><p>Imagen 22. Campo Tipo de Documento</p><p>Seleccione en el campo “Socio del Negocio”, el socio del negocio proveedor al cual se le ralizará la devolución del producto.</p><p><img src="/assets/img/docs/return-management/rem-return-image68.png" alt="Campo"></p><p>Imagen 23. Campo Socio del Negocio</p><p>Warning</p><p>Recuerde guardar los cambios realizados en cada pestaña del documento con ayuda del icono “Guardar” en la barra de herramientas de ADempiere, al guardar los cambios realizados se asigna automáticamente el número del documento en el campo “No. del Documento”.</p><p>Seleccione el icono “Proceso” ubicado en la barra de herramientas de ADempiere, luego seleccione la opción “Crear Devolución Desde Orden (ADM)” para crear la “Devolución a Proveedor” desde la “Orden de Devolución” del producto.</p><p><img src="/assets/img/docs/return-management/rem-return-image69.png" alt="Campo"></p><p>Imagen 24. Icono Proceso</p><p>Podrá visualizar la siguiente ventana del proceso, donde debe seleccionar el documento de autorización de devolución creado anteriormente.</p><p><img src="/assets/img/docs/return-management/rem-return-image70.png" alt="Campo"></p><p>Imagen 25. Ventana del Proceso y Selección del Documento de Recepción</p><p>Note</p><p>El campo “Socio del Negocio” viene precargado con la información seleccionada en el campo “Socio del Negocio” ubicado en la ventana “Devolución a Proveedor”. Al seleccionar el identificador del campo “Orden de Venta” podrá visualizar las diferentes autorizaciones de devoluciones asociadas al socio del negocio que se encuentra seleccionado en dicho campo, permitiendole seleccionar la línea del documento de autorización de devolución a proveedor, donde se encuentra el producto involucrado en la devolución.</p><p>Seleccione la opción “Comenzar Búsqueda” para buscar las líneas del documento de autorización seleccionado.</p><p><img src="/assets/img/docs/return-management/rem-return-image71.png" alt="Campo"></p><p>Imagen 26. Opción Comenzar Búsqueda</p><p>Seleccione la línea del documento de autorización de devolución donde se encuentra el producto que se va a devolver, luego seleccione la opción “OK” para cargar el registro a la pestaña “Línea de Devolución”.</p><p><img src="/assets/img/docs/return-management/rem-return-image72.png" alt="Campo"></p><p>Imagen 27. Seleccionar Línea con el Producto a Devolver</p><p>Warning</p><p>Recuerde actualizar el registro de la ventana con ayuda del icono “Refrescar” ubicado en la barra de herramientas de ADempiere.</p><p>Seleccione la pestaña “Línea de Autorización” para verificar que los datos fueron cargados correctamente.</p><p><img src="/assets/img/docs/return-management/rem-return-image73.png" alt="Campo"></p><p>Imagen 28. Pestaña Línea de Autorización</p><p>Regrese a la ventana principal “Devolución a Proveedor”, seleccione la opción “Completar” en la parte inferior del documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image74.png" alt="Campo"></p><p>Imagen 29. Opción Completar</p><p>Seleccione la acción “Completar” y la opción “OK” para completar el documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image75.png" alt="Campo"></p><p>Imagen 30. Acción Completar</p><p>Seleccione la opción “Generar Facturas desde Recibos”, para generar el documento “Nota de Crédito” desde la ventana “Devolución a Proveedor”.</p><p><img src="/assets/img/docs/return-management/rem-return-image76.png" alt="Campo"></p><p>Imagen 31. Generar Facturas desde Recibos</p><p>Podrá visualizar la siguiente ventana donde debe seleccionar la opción “OK”.</p><p><img src="/assets/img/docs/return-management/rem-return-image77.png" alt="Campo"></p><p>Imagen 32. Ventana Generar Facturas desde Recibos y Seleccionar Opción OK</p><p>Note</p><p>El documento “Nota de Crédito” es generado en estado “Borrador”, el número del mismo se puede visualizar en la parte inferior derecha de la ventana “Devolución a Proveedor”.</p><h2 id="completar-nota-de-credito-generada" tabindex="-1"><a class="header-anchor" href="#completar-nota-de-credito-generada" aria-hidden="true">#</a> Completar Nota de Crédito Generada</h2><p>Podrá visualizar el documento “Nota de Crédito” generado desde la ventana “Devolución a Proveedor”, al buscar el mismo con número de documento “1000080”.</p><p><img src="/assets/img/docs/return-management/rem-return-image78.png" alt="Campo"></p><p>Imagen 33. Nota de Crédito</p><p>Seleccione en el campo “Factura Afectada”, la factura de cuentas por pagar al cual le será aplicada la nota de crédito. Para ejemplificar el registro, es seleccionada la factura “1000076”.</p><p><img src="/assets/img/docs/return-management/rem-return-image79.png" alt="Campo"></p><p>Imagen 34. Campo Factura Afectada</p><p>Seleccione la opción “Completar” ubicada en la parte inferior derecha del documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image80.png" alt="Campo"></p><p>Imagen 35. Opción Completar</p><p>Seleccione la acción “Completar” y la opción “OK”, para completar el documento “Nota de Crédito”.</p><p><img src="/assets/img/docs/return-management/rem-return-image81.png" alt="Campo"></p><p>Imagen 36. Acción Completar</p><h2 id="consultar-saldos-abiertos" tabindex="-1"><a class="header-anchor" href="#consultar-saldos-abiertos" aria-hidden="true">#</a> Consultar Saldos Abiertos</h2><p>Al consultar saldos abiertos se verifica que la nota de crédito haya sido aplicada a la factura, generando un descuento al saldo abierto de la factura de cuentas por pagar de la siguiente manera.</p><p><img src="/assets/img/docs/return-management/rem-return-image82.png" alt="Campo"></p><p>Imagen 37. Saldos Abiertos a la Fecha</p><h2 id="consultar-detalle-de-transacciones" tabindex="-1"><a class="header-anchor" href="#consultar-detalle-de-transacciones" aria-hidden="true">#</a> Consultar Detalle de Transacciones</h2><p>Al consultar los detalles de transacciones se verifican los movimientos de entrada de productos por medio de una recepción, generando con ello un aumento al total de productos. De igual manera es reflejada la salida de productos por medio de una devolución a proveedor, generando con ello un descuento al total de productos en existencia.</p><p><img src="/assets/img/docs/return-management/rem-return-image83.png" alt="Campo"></p><p>Imagen 38. Detalle de Transacciones</p>',147)],i={},c=(0,o(13860).Z)(i,[["render",function(e,a){return(0,r.wg)(),(0,r.iD)("div",null,n)}]])},98002:(e,a,o)=>{o.r(a),o.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-47527337","path":"/docs/return-management/provider-return.html","title":"Devolución a Proveedor","lang":"es-ES","frontmatter":{"title":"Devolución a Proveedor","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"En ADempiere es posible generar una devolución de los productos o materiales comprados a un proveedor determinado, el presente material elaborado por ERPyA pretende ofrecerle una e","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/return-management/provider-return.html"}],["meta",{"property":"og:title","content":"Devolución a Proveedor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Autorización de Devolución a Proveedor","slug":"autorizacion-de-devolucion-a-proveedor","children":[]},{"level":2,"title":"Devolución a Proveedor","slug":"devolucion-a-proveedor","children":[]},{"level":2,"title":"Completar Nota de Crédito Generada","slug":"completar-nota-de-credito-generada","children":[]},{"level":2,"title":"Consultar Saldos Abiertos","slug":"consultar-saldos-abiertos","children":[]},{"level":2,"title":"Consultar Detalle de Transacciones","slug":"consultar-detalle-de-transacciones","children":[]}],"git":{"createdTime":1678314887000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":7.22,"words":2166},"filePathRelative":"docs/return-management/provider-return.md","localizedDate":"8 de marzo de 2023"}')}}]);