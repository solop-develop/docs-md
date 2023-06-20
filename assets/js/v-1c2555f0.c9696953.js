"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[34898],{22591:(e,o,t)=>{t.r(o),t.d(o,{default:()=>d});var a=t(78e3);const r=(0,a.Uk)("Para la exportación de los archivos desde ADempiere al banco provincial, "),n={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("ERPyA"),s=(0,a.Uk)(" soporta los siguientes formatos facilitados por el banco, que pueden ser descargados para su análisis y adaptación."),l=(0,a.uE)('<p>El banco cuenta con los documentos <a href="DR_Abonos.pdf">Archivo de Pago a Proveedores</a> y <a href="DR_Afiliacion_RRHH.pdf">Archivo de Pago de Nómina</a>, <a href="provincial_conf.docx">Archivo de Configuración</a>, que explican los formatos para la construcción del archivo a cargar.</p><h2 id="provincial-proveedores" tabindex="-1"><a class="header-anchor" href="#provincial-proveedores" aria-hidden="true">#</a> <strong>Provincial Proveedores</strong></h2><p><strong>Archivo para Pagos</strong></p><p>Al ejecutar el proceso de selección de pago de las siguientes facturas en ADempiere:</p><ul><li>Factura &quot;<strong>1000737</strong>&quot; al socio del negocio &quot;<strong>Proveedor Estándar</strong>&quot; por monto total de &quot;<strong>1.392.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000738</strong>&quot; al socio del negocio &quot;<strong>Proveedor Estándar</strong>&quot; por monto total de &quot;<strong>1.554.400,00</strong>&quot;.</li><li>Factura &quot;<strong>1000739</strong>&quot; al socio del negocio &quot;<strong>Dhl Express Aduanas Venezuela C.A.</strong>&quot; por monto total de &quot;<strong>3.480.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000740</strong>&quot; al socio del negocio &quot;<strong>Bolivariana de Puertos ( Bolipuertos) S A</strong>&quot; por monto total de &quot;<strong>2.200.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000741</strong>&quot; al socio del negocio &quot;<strong>Servicio Nacional Integrado de Administración (SENIAT)</strong>&quot; por monto total de &quot;<strong>3.944.000,00</strong>&quot;.</li></ul><p>Se obtiene como resultado del proceso &quot;<strong>Imprimir /Exportar</strong>&quot;, un documento en formato &quot;<strong>.txt</strong>&quot; con los detalles de los pagos a ser realizados desde el banco mercantil a terceros en el mismo banco, así como también a terceros en otros bancos. El mismo se puede descargar en el enlace <a href="Banco_Provincial__SA_Banco_Universal_10433.txt">Archivo de Pago a Proveedores del Provincial</a> y visualizar de la siguiente manera:</p><p>::</p><pre><code>G000200003030 01020000000000000000 0000394400000 00000101 Servicio Nacional Integrado de Admi                                    \nJ000000000001 01050000000000000000 0000348000000 00000102 Dhl Express Aduanas Venezuela CA                                       \nJ000000000002 01340000000000000000 0000220000000 00000103 Bolivariana de Puertos  ( Bolipuert                                    \nJ000000000004 01050000000000000000 0000294640000 00000104 Proveedor Estndar                   proveedor-estandar@gmail.com       \n</code></pre><p><strong>Descripción del Archivo</strong></p><pre><code>- **Referencia:** Número de Identificación del beneficiario. En el ejemplo anterior, los valores son &quot;**G000200003030**&quot;, &quot;**J000000000001**&quot;, &quot;**J000000000002**&quot;, &quot;**J000000000004**&quot;\n- **Número de Cuenta del Tercero**: Número de cuenta de 20 dígitos del BBVA Provincial. Este se compone de veinte (20) dígitos. En el ejemplo anterior, los valores son &quot;**01020000000000000000**&quot;, &quot;**01050000000000000000**&quot;, &quot;**01340000000000000000**&quot;, &quot;**01050000000000000000**&quot;\n- **Importe:** En ninguno de los casos debe ser &quot;**0**&quot; y debe estar alineada a la izquierda. Importe total son 15 enteros, 2 decimales alinear a la derecha y justificar con ceros a la izquierda sin separadores. En el ejemplo anterior, los valores son &quot;**0000394400000**&quot;, &quot;**0000348000000**&quot;, &quot;**0000220000000**&quot;, &quot;**0000294640000**&quot;\n- **Número de Recibo:** La empresa asigna al registro de detalle en número de factura o recibo que refiere a la gestión realizada. En el ejemplo anterior, los valores son &quot;**00000101**&quot;, &quot;**00000102**&quot;, &quot;**00000103**&quot;, &quot;**00000104**&quot;\n- **Nombre del Tercero:** Nombre del titular de la cuenta del beneficiario o domiciliado. Este posee un límite de cuarenta (40) caracteres.\n- **Email:** Dirección de correo electrónico del beneficiario\n</code></pre><h2 id="provincial-nomina" tabindex="-1"><a class="header-anchor" href="#provincial-nomina" aria-hidden="true">#</a> <strong>Provincial Nómina</strong></h2><p><strong>Archivo para Pagos</strong></p><p>Al ejecutar el proceso de selección de pago de la nómina quincenal &quot;<strong>NQ-19</strong>&quot; procesada en ADempiere, con los siguientes empleados:</p><ul><li>Socio del Negocio &quot;<strong>Empleado</strong>&quot;, con cédula de identidad &quot;<strong>V0000005</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li><li>Socio del Negocio &quot;<strong>Estándar</strong>&quot;, con cédula de identidad &quot;<strong>V00000009</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li><li>Socio del Negocio &quot;<strong>Empleado Dos</strong>&quot;, con cédula de identidad &quot;<strong>V00000008</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li><li>Socio del Negocio &quot;<strong>Empleado Tres</strong>&quot;, con cédula de identidad &quot;<strong>V00000098</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li></ul><p>Se obtiene como resultado del proceso &quot;<strong>Imprimir /Exportar</strong>&quot;, un documento en formato &quot;<strong>.txt</strong>&quot; con los detalles de los pagos a ser realizados desde el mercantil a terceros en el mismo banco, así como también a terceros en otros bancos. El mismo se puede descargar en el enlace <a href="Banco_Provincial__SA_Banco_Universal_Transito_1545.txt">Archivo de Pago de Nómina del Provincial</a> y visualizar de la siguiente manera:</p><p>::</p><pre><code>V000000000009 01340000000000000039 0054000000000 00000100 Estndar                                                                \nV000000000098 01340000000000000067 0000990219231 00000101 Empleado Tres                                                          \nV000000000008 01340000000000000048 0054983169231 00000102 Empleado Dos                                                           \nV000000000005 01050000000000000075 0000059344492 00000103 Empleado                            empleado@gmail.com                 \n</code></pre><p><strong>Descripción del Archivo</strong></p><pre><code>- **Referencia:** Número de Identificación del beneficiario. En el ejemplo anterior, los valores son &quot;**V000000000009**&quot;, &quot;**V000000000098**&quot;, &quot;**V000000000008**&quot;, &quot;**V000000000005**&quot;\n- **Número de Cuenta del Tercero**: Número de cuenta de 20 dígitos del BBVA Provincial. Este se compone de veinte (20) dígitos. En el ejemplo anterior, los valores son &quot;**01340000000000000039**&quot;, &quot;**01340000000000000067**&quot;, &quot;**01340000000000000048**&quot;, &quot;**01050000000000000075**&quot;\n- **Importe:** En ninguno de los casos debe ser &quot;**0**&quot; y debe estar alineada a la izquierda. Importe total son 15 enteros, 2 decimales alinear a la derecha y justificar con ceros a la izquierda sin separadores\n- **Número de Recibo:** La empresa asigna al registro de detalle en número de factura o recibo que refiere a la gestión realizada. En el ejemplo anterior, los valores son &quot;**00000100**&quot;, &quot;**00000101**&quot;, &quot;**00000102**&quot;, &quot;**00000103**&quot;\n- **Nombre del Tercero:** Nombre del titular de la cuenta del beneficiario o domiciliado. Este posee un límite de cuarenta (40) caracteres.\n- **Email:** Dirección de correo electrónico del beneficiario\n</code></pre>',19),c={},d=(0,t(13860).Z)(c,[["render",function(e,o){const t=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[r,(0,a._)("a",n,[i,(0,a.Wm)(t)]),s]),l])}]])},24745:(e,o,t)=>{t.r(o),t.d(o,{data:()=>a});const a=JSON.parse('{"key":"v-1c2555f0","path":"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/provincial/provincial.html","title":"Banco Provincial","lang":"es-ES","frontmatter":{"title":"Banco Provincial","icon":"app","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos","Gestión de Tesorería"],"article":false,"summary":"Para la exportación de los archivos desde ADempiere al banco provincial, ERPyA soporta los siguientes formatos facilitados por el banco, que pueden ser descargados para su análisis","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/provincial/provincial.html"}],["meta",{"property":"og:title","content":"Banco Provincial"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-20T19:52:22.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Tesorería"}],["meta",{"property":"article:modified_time","content":"2023-06-20T19:52:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Provincial Proveedores","slug":"provincial-proveedores","children":[]},{"level":2,"title":"Provincial Nómina","slug":"provincial-nomina","children":[]}],"git":{"createdTime":1687290742000,"updatedTime":1687290742000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/provincial/provincial.md","localizedDate":"20 de junio de 2023"}')}}]);