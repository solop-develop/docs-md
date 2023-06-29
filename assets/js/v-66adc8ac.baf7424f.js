"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22672],{51847:(e,o,a)=>{a.r(o),a.d(o,{default:()=>g});var n=a(78e3);const i=(0,n._)("h1",{id:"nomina-anticipo-de-vacaciones",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#nomina-anticipo-de-vacaciones","aria-hidden":"true"},"#"),(0,n.Uk)(),(0,n._)("strong",null,"Nómina Anticipo de Vacaciones")],-1),t=(0,n.Uk)("Para procesar una “"),r=(0,n._)("strong",null,"Nómina de Anticipo de Vacaciones",-1),c=(0,n.Uk)("” debemos realizar el proceso de nómina estándar mencionado en el documento ''procedimiento para procesar nómina'' elaborado por "),s={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("ERPya"),d=(0,n.Uk)(". En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de anticipo de vacaciones, en el comportamiento de está nómina usted evidenciará la asignación de días de disfrute de vacaciones, mientras que la asignación de bono vacacional estará representada solamente en la nómina de vacaciones, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:"),l=(0,n.uE)('<ul><li><p>Estatus del Documento:</p><ul><li><p>Seleccione “<strong>Nómina Vacaciones</strong>” en el campo “<strong>Tipo de Documento</strong>”</p><ul><li><p>El tipo de documento le permitirá definir la acción del documento que esté registrando en ADempiere.</p></li><li><p>Selecciones “<strong>Nómina Anticipo de Vacaciones</strong>” en el campo “<strong>Nómina</strong>”</p></li></ul><p>La nómina de anticipo de vacaciones define el comportamiento de la nómina, para este caso por ser una nómina especial cuenta con las siguientes características:</p><pre><code>- Regla de Pago: Débito Directo\n- Contrato de Nómina: Contrato Mensual\n- Cargo: Vacaciones por Pagar\n</code></pre><p>Seleccione la fecha en la que esté ejecutando la nómina en el campo <strong>Fecha Contable</strong></p><p>Seleccione el “<strong>Socio de Negocio Empleado</strong>” a quién se le procesa la nómina de anticipo de vacaciones en el campo <strong>Socio de Negocio</strong>:</p></li></ul></li></ul><p><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/anticipodevacaciones22.png" alt="Nómina Anticipo de Vacaciones"></p><p>Imagen 1. Nómina Anticipo de Vacaciones</p><p>Está nómina por ser una nómina especial no debe registrarse con período</p><p><strong>Incidencias: Para esta nómina son obligatorias las incidencias, es decir, que antes de procesar la nómina de vacaciones debe registrar al empleado las siguientes incidencias</strong></p><table><thead><tr><th><strong>INCIDENCIA</strong></th><th><strong>CÓDIGO</strong></th><th><strong>TIPO</strong></th></tr></thead><tbody><tr><td>Fecha de Inicio de Anticipo de Vacaciones</td><td>(&quot;IN_FIAV&quot;)</td><td>Fecha</td></tr><tr><td>Días de Anticipo de Vacaciones</td><td>(&quot;CR_DAV&quot;)</td><td>Cantidad</td></tr></tbody></table><p><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/novedadanticipovacaciones.png" alt="Novedades Anticipo de Vacaciones"></p><p>Imagen 2. Novedades Anticipo de Vacaciones</p><ul><li>Resultados:</li></ul><p>&quot;<strong>Reportes</strong>&quot;</p><ul><li><p>Para visualizar los reportes de nóminas puede seguir los pasos que se encuentran en el documento &#39;&#39;Reporte de nómina&#39;&#39; con los datos adicionales que se indican a continuación para cada reporte</p><ul><li><p>“<strong>Recibo de Pago</strong>”</p><pre><code>  - **Nómina**: Nómina Anticipo de Vacaciones \n\n  - **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.\n\n  - **Configuración de Reporte de Nómina**: Anticipo de Vacaciones\n</code></pre></li></ul></li></ul><p><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/reciboanticipovacaciones33.png" alt="Recibo de Pago Nómina Anticipo de Vacaciones"></p><p>Imagen 2. Recibo de Pago Nómina Anticipo de Vacaciones</p><ul><li><p>“<strong>Detalle de Pago</strong>”</p></li><li><p><strong>Nómina</strong>: Nómina Anticipo de Vacaciones</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Anticipo de Vacaciones</p></li><li><p><strong>Plantilla de Reporte de Nómina</strong>: Detalle de Pago</p></li></ul><p><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/detalleanticipovacaciones11.png" alt="Detalle de Pago Nómina Anticipo de Vacaciones"></p><p>Imagen 3. Detalle de Pago Nómina Anticipo de Vacaciones</p><ul><li><p>“<strong>Resumen de Pago</strong>”</p></li><li><p><strong>Nómina</strong>: Nómina Anticipo de Vacaciones</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Anticipo de Vacaciones</p></li><li><p><strong>Plantilla de Reporte de Nómina</strong>: Resumen de Pago</p></li></ul><p><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/resumenanticipovacaciones11.png" alt="Resumen de Pago Nómina Anticipo de Vacaciones"></p><p>Imagen 4. Resumen de Pago Nómina Anticipo de Vacaciones</p><p>“<strong>Retenciones</strong>”</p><ul><li><p><strong>Nómina</strong>: Nómina Anticipo de Vacaciones</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Retenciones Parafiscales</p></li></ul><p><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/retencionesanticipovacaciones11.png" alt="Retenciones Nómina Anticipo de Vacaciones"></p><p>Imagen 5. Retenciones Nómina Anticipo de Vacaciones</p><p>“<strong>Aportes</strong>”</p><ul><li><p><strong>Nómina</strong>: Nómina Anticipo de Vacaciones</p></li><li><p><strong>Proceso de Nómina</strong>: Ubique el número de documento del proceso de nómina que está ejecutando.</p></li><li><p><strong>Configuración de Reporte de Nómina</strong>: Aportes Parafiscales</p></li></ul><p><img src="/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/aportesanticipovacaciones11.png" alt="Aportes Nómina Anticipo de Vacaciones"></p><p>Imagen 6. Aportes Nómina Anticipo de Vacaciones</p><p><strong>Nota: Cabe destacar que los reportes de Aportes y Retenciones se deben pasar al Departamento de Contabilidad</strong></p>',28),m={},g=(0,a(13860).Z)(m,[["render",function(e,o){const a=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[i,(0,n._)("p",null,[t,r,c,(0,n._)("a",s,[p,(0,n.Wm)(a)]),d]),l])}]])},99441:(e,o,a)=>{a.r(o),a.d(o,{data:()=>n});const n=JSON.parse('{"key":"v-66adc8ac","path":"/docs/lve/procedures/payroll/procedure-to-process-payroll/holiday-advance-payroll.html","title":"Nómina Anticipo de Vacaciones","lang":"es-ES","frontmatter":{"title":"Nómina Anticipo de Vacaciones","icon":"app","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos","Gestión de Nóminas","Procedimiento para Procesar Nómina"],"article":false,"summary":"Nómina Anticipo de Vacaciones ================================= Para procesar una “Nómina de Anticipo de Vacaciones” debemos realizar el proceso de nómina estándar mencionado en el","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/payroll/procedure-to-process-payroll/holiday-advance-payroll.html"}],["meta",{"property":"og:title","content":"Nómina Anticipo de Vacaciones"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-29T22:12:23.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Nóminas"}],["meta",{"property":"article:tag","content":"Procedimiento para Procesar Nómina"}],["meta",{"property":"article:modified_time","content":"2023-06-29T22:12:23.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1686950623000,"updatedTime":1688076743000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":2.2,"words":659},"filePathRelative":"docs/lve/procedures/payroll/procedure-to-process-payroll/holiday-advance-payroll.md","localizedDate":"16 de junio de 2023"}')}}]);