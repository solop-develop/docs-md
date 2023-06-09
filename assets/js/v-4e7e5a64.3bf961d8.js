"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[51053],{75380:(a,e,n)=>{n.r(e),n.d(e,{default:()=>s});var r=n(78e3);const o=[(0,r.uE)('<p>Una transferencia bancaria en ADempiere es el proceso mediante el cual se realizan los traslados de fondos entre cuentas, para simular y reflejar en ADempiere los movimientos realizados en los bancos reales, el procedimiento reflejará en la cuenta <strong>Banco Desde</strong>, un egreso y a su vez un ingreso en la cuenta <strong>Banco Hasta</strong>.</p><p>El presente material elaborado por <strong>ERPyA</strong>, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar una transferencia bancaria en ADempiere, en su versión 3.9.2 para la localización Venezuela.</p><ul><li>Registro de Transferencia Bancaria <ul><li>Consultar Egreso Generado de la Transferencia Bancaria</li><li>Consultar Ingreso Generado de la transferencia Bancaria</li></ul></li><li>Transferencia Bancaria de Nómina</li></ul><h2 id="registro-de-transferencia-bancaria" tabindex="-1"><a class="header-anchor" href="#registro-de-transferencia-bancaria" aria-hidden="true">#</a> Registro de Transferencia Bancaria</h2><p>Para realizar una transferencia bancaria en ADempiere deben seguir los siguientes pasos:</p><p>Ubique yseleccione en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione el proceso <strong>Transferencia Bancaria</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image369.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana del proceso <strong>Transferencia Bancaria</strong> y proceder al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image370.png" alt="Campo"></p><p>Imagen 2. Ventana Transferencia Bancaria</p><p>Seleccione en el campo <strong>Cuenta bancaria desde</strong>, la cuenta a debitar el monto de la transferencia realizada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image371.png" alt="Campo"></p><p>Imagen 3. Campo Cuenta Bancaria Desde</p><p>Note</p><p>La cuenta a debitar desde es la cuenta bancaria de donde saldrá la transferencia.</p><p>Seleccione en el campo <strong>Cuenta Bancaria a Transferir</strong>, la cuenta a acreditar el monto de la transferencia realizada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image372.png" alt="Campo"></p><p>Imagen 4. Campo Cuenta Bancaria a Transferir</p><p>Note</p><p>La cuenta bancaria a transferir, es la cuenta en donde caerá la transferencia.</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio titular de la cuenta seleccionada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image373.png" alt="Campo"></p><p>Imagen 5. Campo Socio del Negocio</p><p>Seleccione en el campo <strong>Moneda</strong>, la moneda en la cual fue realizada la transferencia.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image374.png" alt="Campo"></p><p>Imagen 6. Campo Moneda</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo correspondiente a la transferencia entre cuentas que se está realizando.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image375.png" alt="Campo"></p><p>Imagen 7. Campo Cargo</p><p>Note</p><p>El cargo a colocar en la transferencia bancaria depenrá de que tipo de transferencia se este realizando.</p><p>Introduzca en el campo <strong>No. del Documento</strong>, la referencia correspondiente a la transferencia bancaria realizada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image376.png" alt="Campo"></p><p>Imagen 8. Campo No. del Documento</p><p>Note</p><p>El número de documento a colocar en este campo es el número de la transferencia bancaria realizada del banco colocado en el campo <strong>Cuenta bancaria desde</strong>.</p><p>Introduzca en el campo <strong>Documento Destino</strong>, la referencia correspondiente a la transferencia bancaria realizada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image377.png" alt="Campo"></p><p>Imagen 9. Campo Documento Destino</p><p>Note</p><p>El número de documento a colocar en este campo es el número de la transferencia bancaria realizada al banco seleccionado en el campo <strong>Cuenta Bancaria a Transferir</strong> (banco destino),el llenado de este campo aplicaría para aquellas transacciones de intercompañía el cual el personal que esté realizado el procedimiento conozca el número de transferencia en ambas cuentas bancarias (Banco a emisor/banco destino), si se desconoce el número de transferencia simplemente no se coloca, este campo no es un campo obligatorio por ello se puede obviar el llenado de este campo.</p><p>Introduzca en el campo <strong>Monto</strong>, el monto total de la transferencia bancaria realizada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image378.png" alt="Campo"></p><p>Imagen 10. Campo Monto</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción referente a la transferencia entre cuentas que está realizando.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image379.png" alt="Campo"></p><p>Imagen 11. Campo Descripción</p><p>Introduzca en el campo <strong>Fecha de Estado de Cuenta</strong>, la fecha de la transferencia bancaria realizada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image380.png" alt="Campo"></p><p>Imagen 12. Campo Fecha de Estado de Cuenta</p><p>Introduzca en el campo <strong>Fecha Contable</strong>, la fecha de la transferencia bancaria realizada.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image381.png" alt="Campo"></p><p>Imagen 13. Campo Fecha Contable</p><p>Si desea que los pagos/cobros que se generen de esta transferencia bancarias se concilien de una vez puede tildar la opción <strong>Conciliar Automáticamente</strong>, si no tilda esta opción los pagos/cobros no se conciliaran y deberán ser conciliados a través Registro de Conciliación Automática</p><p><img src="/assets/img/docs/balance-management/bam-balance-image382.png" alt="Campo"></p><p>Imagen 14. Campo Conciliar Automáticamente</p><p>Seleccione la opción <strong>OK</strong>, para generar en ADempiere la transferencia entre cuentas bancarias.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image383.png" alt="Campo"></p><p>Imagen 15. Opción OK</p><p>Podrá apreciar el resultado del proceso de la siguiente manera.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image384.png" alt="Campo"></p><p>Imagen 16. Resultado de Transferencia</p><p>Note</p><p>Al realizar el proceso de transferencia bancaria, es generado un egreso en la cuenta seleccionada en el campo <strong>Cuenta bancaria desde</strong> y un ingreso en la cuenta seleccionada en el campo <strong>Cuenta Bancaria a Transferir</strong>.</p><p>De igual manera, cuando se está trabajando las transferencias bancarias con cajas es creado un documento de cobro en la ventana <strong>Caja</strong> reflejando el ingreso a la cuenta seleccionada en el campo <strong>Cuenta Bancaria a Transferir</strong> y un pago en la ventana <strong>Pago/Cobro</strong> reflejando el egreso de la cuenta seleccionada en el campo <strong>Cuenta bancaria desde</strong>.</p><h3 id="consultar-egreso-generado-de-la-transferencia-bancaria" tabindex="-1"><a class="header-anchor" href="#consultar-egreso-generado-de-la-transferencia-bancaria" aria-hidden="true">#</a> Consultar Egreso Generado de la Transferencia Bancaria</h3><p>Si en la transferencia bancaria en el campo <strong>Cuenta Bancaria Desde</strong> fue seleccionada una cuenta bancaria el pago caerá en la ventana <strong>Pago/Cobro</strong> y tendrá como número de documento el número colocado en el campo <strong>No. del Documento</strong> de la transacción bancaria.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image385.png" alt="Campo"></p><p>Imagen 17. Pago en Ventana Pago/Cobro</p><p>Si en la transferencia bancaria en el campo <strong>Cuenta Bancaria Desde</strong> fue seleccionada una cuenta de caja el pago caerá en la ventana <strong>Caja</strong> y tendrá como número de documento el número colocado en el campo <strong>No. del Documento</strong> de la transacción bancaria.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image386.png" alt="Campo"></p><p>Imagen 18. Pago en Ventana Caja</p><h2 id="consultar-ingreso-generado-de-la-transferencia-bancaria" tabindex="-1"><a class="header-anchor" href="#consultar-ingreso-generado-de-la-transferencia-bancaria" aria-hidden="true">#</a> Consultar Ingreso Generado de la transferencia Bancaria</h2><p>Si en la transferencia bancaria en el campo <strong>Cuenta Bancaria a Transferir</strong> fue seleccionada una cuenta bancaria el cobro caerá en la ventana <strong>Pago/Cobro</strong>, si en el campo <strong>Documento Destino</strong> de la transferencia bancaria se colocó el número de la transacción este mismo debe aparecer como el número de documento del campo <strong>No. del Documento</strong> en la ventana <strong>Pago/Cobro</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image387.png" alt="Campo"></p><p>Imagen 19. Cobro en Ventana Pago/Cobro</p><p>Note</p><p>Si en el campo <strong>Documento Destino</strong> de la transferencia bancaria no se colocó el número de la transacción, el número de documento a mostrar del cobro en la ventana <strong>Pago/Cobro</strong> será el mismo que se número colocado en el campo <strong>No. del Documento</strong> de la transferencia bancaria.</p><p>Si en la transferencia bancaria en el campo <strong>Cuenta Bancaria a Transferir</strong> fue seleccionada una cuenta de caja el cobro caerá en la ventana <strong>Caja</strong>, si en el campo <strong>Documento Destino</strong> de la transferencia bancaria se colocó el número de la transacción este mismo debe aparecer como el número de documento del campo <strong>No. del Documento</strong> en la ventana <strong>Caja</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image388.png" alt="Campo"></p><p>Imagen 20. Cobro en Ventana Caja</p><p>Note</p><p>Si en el campo <strong>Documento Destino</strong> de la transferencia bancaria no se colocó el número de la transacción, el número de documento a mostrar del cobro en la ventana <strong>Caja</strong> será el mismo que se número colocado en el campo <strong>No. del Documento</strong> de la transferencia bancaria.</p><h2 id="transferencia-bancaria-de-nomina" tabindex="-1"><a class="header-anchor" href="#transferencia-bancaria-de-nomina" aria-hidden="true">#</a> Transferencia Bancaria de Nómina</h2><p>Luego de completar la selección de pago y de generar los pagos de nómina en la ventana imprimir exportar pagos procedemos a realizar la transferencia bancaria, ubicamos en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione <strong>Transferencia Bancaria</strong>. Este proceso es realizado con la finalidad que la empresa cancele a la cuenta de caja el monto total cancelado a los empleados por la nómina procesada.</p><p>Cabe acotar que debe realizar la transferencia según el monto transferido a cada empleado</p><p>Si usted utiliza un txt para transferirle a todo el personal puede realizar una transferencia por el monto total del pago a los trabajadores.</p><p>Si usted paga particularmente a cada uno de sus empleados debe realizar una transferencia por cada pago que fué realizado para cada uno de sus empleados.</p><p>Warning</p><p>Recuerde que al realizar la transferencia usted esta es registrando cada uno de los pagos que salen del banco. Por tal motivo debe tener especial cuidado en cuanto a monto y a número de referencia</p><p>Seleccione en el campo <strong>Cuenta Bancaria Desde</strong> el nombre la cuenta bancaria original que utiliza la compañía para cancelar la nómina a los empleado. Esa será la cuenta que emitirá la transferencia bancaria.</p><p>Seleccione en el campo <strong>Cuenta Bancaria a Transferir</strong> el nombre de la cuenta de la caja, esa cuenta es igual a la cuenta bancaria que usted seleccionó en su selección de pago, la cual se identifica al final del nombre con la palabra tránsito. Esa cuenta representará la cuenta que recibirá la transferencia bancaria.</p><p>Seleccione en el campo <strong>Socio de Negocio</strong>, el socio de negocio registrado con los datos de su compañía.</p><p>Seleccione en el campo <strong>Moneda</strong> debe registrar la moneda con la cual se está cancelando la nómina, en este caso será bolívares (VES).</p><p>Seleccione en el campo <strong>Cargo</strong> el cargo denominado Efectivo en Tránsito Nómina, esté cargo se utiliza para indicar contablemente el registro del pago de la nómina.</p><p>Seleccione en el campo <strong>No. del Documento</strong> debe registrar el mismo número de documento que le generó la selección de pago creada para la cancelación de su proceso de nómina. En caso de que realice transferencia bancarias particulares debe registrar el número de referencia de la transferencia.</p><p>Seleccione en el campo <strong>Documento Destino</strong> el mismo número de documento que registró en el campo Nro. del Documento.</p><p>Seleccione en el campo <strong>Monto</strong> el monto total de la selección de pago que realizó anteriormente, ubique en la selección de pago el campo total total y allí encontrará el monto total de la selección de pago.</p><p>Seleccione en el campo <strong>Descripción</strong> una breve descripción de la transferencia realizada.</p><p>Seleccione en el campo <strong>Fecha de Estado de Cuenta</strong> la misma fecha con la que registró su selección de pago.</p><p>Seleccione en el campo <strong>Fecha Contable</strong> la misma fecha con la que registró su selección de pago.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image389.png" alt="Campo"></p><p>Imagen 1. Transferencia Bancaria</p><p>Warning</p><p>Por favor NO tildar el check que dice conciliación automática</p><p>Luego de que tenga todos los datos correctos proceda a culminar el proceso de transferencia bancaria tildando la opción de <strong>OK</strong></p><p><img src="/assets/img/docs/balance-management/bam-balance-image390.png" alt="Campo"></p><p>Imagen 2. Opción OK</p><p>Después de esto le aparecerá una ventana indicando que su transferencia bancaria fué creada</p><p><img src="/assets/img/docs/balance-management/bam-balance-image391.png" alt="Campo"></p><p>Imagen 3. Transferencia Creada</p>',112)],c={},s=(0,n(13860).Z)(c,[["render",function(a,e){return(0,r.wg)(),(0,r.iD)("div",null,o)}]])},52538:(a,e,n)=>{n.r(e),n.d(e,{data:()=>r});const r=JSON.parse('{"key":"v-4e7e5a64","path":"/docs/balance-management/transfer.html","title":"Transferencia Bancaria","lang":"es-ES","frontmatter":{"title":"Transferencia Bancaria","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Una transferencia bancaria en ADempiere es el proceso mediante el cual se realizan los traslados de fondos entre cuentas, para simular y reflejar en ADempiere los movimientos reali","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/balance-management/transfer.html"}],["meta",{"property":"og:title","content":"Transferencia Bancaria"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Registro de Transferencia Bancaria","slug":"registro-de-transferencia-bancaria","children":[{"level":3,"title":"Consultar Egreso Generado de la Transferencia Bancaria","slug":"consultar-egreso-generado-de-la-transferencia-bancaria","children":[]}]},{"level":2,"title":"Consultar Ingreso Generado de la transferencia Bancaria","slug":"consultar-ingreso-generado-de-la-transferencia-bancaria","children":[]},{"level":2,"title":"Transferencia Bancaria de Nómina","slug":"transferencia-bancaria-de-nomina","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":6.19,"words":1857},"filePathRelative":"docs/balance-management/transfer.md","localizedDate":"9 de marzo de 2023"}')}}]);