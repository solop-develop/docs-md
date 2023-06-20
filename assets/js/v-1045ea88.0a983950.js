"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[56070],{52501:(e,o,t)=>{t.r(o),t.d(o,{default:()=>c});var r=t(78e3);const n=(0,r.Uk)("Para la exportación de los archivos desde ADempiere al banco banesco, "),a={href:"http://erpya.com",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("ERPyA"),d=(0,r.Uk)(" soporta los siguientes formatos facilitados por el banco, que pueden ser descargados para su análisis y adaptación."),i=(0,r.uE)('<p>El banco cuenta con los documentos <a href="Generacion_de_Archivos_de_Pagos.pdf">Generación del Archivo de Pago (PAYMUL) Asociado Comercial</a> y <a href="ARCHIVOS_DE_PAGOS.pdf">Archivos de Pagos</a>, que explican los formatos para la construcción el archivo a cargar.</p><p>Adicional a ello, cuenta con el documento <a href="Codigo_Swift_actualizado.xlsx">Código Swift Actualizado</a>, mismo que se puede visualizar de la siguiente manera, luego de descargarlo.</p><p>| <strong>INSTITUCIONES FINANCIERAS VENEZOLANAS EN SWIFT</strong> | | | | <strong>BIC</strong>* | <strong>RELACION DE CORRESPONSALIA</strong> |</p><table><thead><tr><th><strong>INSTITUCIÓN</strong></th><th><strong>LOCALIDAD</strong></th><th></th><th><strong>CON CUENTA</strong></th><th><strong>COSWIFT</strong></th></tr></thead><tbody><tr><td>Banesco Banco Universal</td><td>Baruta</td><td>UNIOVECA</td><td>SI</td><td>SI</td></tr><tr><td>ABN-Amrobank</td><td>Caracas</td><td>ABNAVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Canarias de Venezuela</td><td>Caracas</td><td>BOCAVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Caroní Banco Universal</td><td>Caracas</td><td>CAROVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Central de Venezuela</td><td>Caracas</td><td>BCVEVECA</td><td>NO</td><td>SI</td></tr><tr><td>Banco de Comercio Exterior</td><td>Caracas</td><td>BCEVVECA</td><td>NO</td><td>SI</td></tr><tr><td>Banco de Crédito de Colombia</td><td>Caracas</td><td>BCTOVECA</td><td>NO</td><td>SI</td></tr><tr><td>Banco de Desarrollo Económico y Social de Venezuela</td><td>Caracas</td><td>FIVVVECA</td><td>NO</td><td>SI</td></tr><tr><td>Banco de Venezuela S.A.C.A., Grupo Santader</td><td>Caracas</td><td>BSCHVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco del Caribe S.A.C.A.</td><td>Caracas</td><td>CARBVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Exterior, C.A.</td><td>Caracas</td><td>BEXTVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Federal, C.A.</td><td>Caracas</td><td>BAFIVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Industrial de Venezuela, C.A.</td><td>Caracas</td><td>INDSVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Mercantil C.A. Banco Universal</td><td>Caracas</td><td>BAMRVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Nacional de Crédito, C.A.</td><td>Caracas</td><td>NCRTVECA</td><td>NO</td><td>NO</td></tr><tr><td>Banco Occidental de Descuento S.A.C.A.</td><td>Maracaibo</td><td>BODEVE2M</td><td>SI</td><td>SI</td></tr><tr><td>Banco Plaza</td><td>Caracas</td><td>PLZAVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Provincial S.A. Banco Universal</td><td>Caracas</td><td>BPROVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Standard Chartered Venezuela</td><td>Caracas</td><td>BSCVVECA</td><td>SI</td><td>SI</td></tr><tr><td>Banco Tequendama Caracas</td><td>Caracas</td><td>BATEVECA</td><td>NO</td><td>SI</td></tr><tr><td>Bolívar Banco, C.A.</td><td>Caracas</td><td>BLVRVECA</td><td>SI</td><td>SI</td></tr><tr><td>C.A. Central Banco Universal</td><td>Caracas</td><td>CETLVECA</td><td>SI</td><td>SI</td></tr><tr><td>Citibank, Caracas</td><td>New York-Caracas</td><td>CITIUS33VEC</td><td>SI</td><td>SI</td></tr><tr><td>Corp Banca C.A. Venezuela</td><td>Caracas</td><td>CONSVECA</td><td>SI</td><td>SI</td></tr><tr><td>Deutsche Bank</td><td>Caracas</td><td>DEUTVECA</td><td>SI</td><td>SI</td></tr><tr><td>Fondo de Valores Inmobiliarios</td><td>Caracas</td><td>FVIMVECA</td><td>SI</td><td>SI</td></tr><tr><td>General Securities C.A.</td><td>Caracas</td><td>GEBNVECA</td><td>SI</td><td>SI</td></tr><tr><td>JP Morgan</td><td>Caracas</td><td>CHASVECA</td><td>SI</td><td>SI</td></tr><tr><td>Merrill Lynch, Caracas</td><td>New York-Caracas</td><td>MLCFVEC</td><td>SI</td><td>SI</td></tr><tr><td>Mi Casa Entidad de Ahorro y Préstamo</td><td>Caracas</td><td>MCAVVECA</td><td>SI</td><td>SI</td></tr><tr><td>Morgan Stanley Dean Witter</td><td>Caracas</td><td>MSTUVEC</td><td>SI</td><td>SI</td></tr><tr><td>Nations Bank</td><td>Caracas</td><td>NATWVECA</td><td>SI</td><td>SI</td></tr><tr><td>The Bank of Tokyo-Mitsubishi UFJ</td><td>Caracas</td><td>BOTKVECA</td><td>SI</td><td>SI</td></tr><tr><td>Venezolano de Credito, S.A.</td><td>Caracas</td><td>BCOVVECA</td><td>SI</td><td>SI</td></tr><tr><td>Wachovia Securities</td><td>Caracas</td><td>WACHVECA</td><td>SI</td><td>SI</td></tr><tr><td>Wells Fargo Bank</td><td>Caracas</td><td>PNBPVECA</td><td>SI</td><td>SI</td></tr></tbody></table><h2 id="banesco-proveedores" tabindex="-1"><a class="header-anchor" href="#banesco-proveedores" aria-hidden="true">#</a> <strong>Banesco Proveedores</strong></h2><p><strong>Archivo para Pagos</strong></p><p>Al ejecutar el proceso de selección de pago de las siguientes facturas en ADempiere:</p><ul><li>Factura &quot;<strong>1000122</strong>&quot; al socio del negocio &quot;<strong>Estándar</strong>&quot; por monto total de &quot;<strong>1.500.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000123</strong>&quot; al socio del negocio &quot;<strong>Estándar</strong>&quot; por monto total de &quot;<strong>2.525.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000124</strong>&quot; al socio del negocio &quot;<strong>Dhl Express Aduanas Venezuela C.A.</strong>&quot; por monto total de &quot;<strong>3.500.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000125</strong>&quot; al socio del negocio &quot;<strong>Bolivariana de Puertos ( Bolipuertos) S A</strong>&quot; por monto total de &quot;<strong>5.000.000,00</strong>&quot;.</li><li>Factura &quot;<strong>1000126</strong>&quot; al socio del negocio &quot;<strong>Servicio Nacional Integrado de Administración (SENIAT)</strong>&quot; por monto total de &quot;<strong>6.000.000,00</strong>&quot;.</li></ul><p>Se obtiene como resultado del proceso &quot;<strong>Imprimir /Exportar</strong>&quot;, un documento en formato &quot;<strong>.txt</strong>&quot; con los detalles de los pagos a ser realizados desde el banco banesco a terceros en el mismo banco, así como también a terceros en otros bancos, el mismo se puede descargar en el enlace <a href="Banesco_Banco_Universal_CA_1000025.txt">Archivo de Pago de Proveedores del Banesco Banco Universal C.A.</a> y visualizar de la siguiente manera:</p><p>::</p><pre><code>HDRBANESCO        ED  95BPAYMULP\n01SCV                                9  1000025                            20201006000000\n021000025                       J000000000       Compaa Estndar                     000001852500000VES 0134000000000000000               BANESCO    20201006\n0300000000                      000000402500000VES01140000000000000000          0114          V0000000         Proveedor Estndar                                                     estandar@ejmplo.com                                                                                                                                                                                      425\n0300000001                      000000600000000VES01340000000000000000          0134          G200003030       Servicio Nacional Integrado de Administracin (SENIAT)                 seniat@ejemplo.com                                                                                                                                                                                       42 \n0300000002                      000000500000000VES01630000000000000000          0163          J297599070       Bolivariana de Puertos  ( Bolipuertos)  S A                           bolipuertos@ejemplo.com                                                                                                                                                                                  425\n0300000003                      000000350000000VES01340000000000000000          0134          J002443731       Dhl Express Aduanas Venezuela CA                                      dhl@ejemplo.com                                                                                                                                                                                          42 \n06000000000000001000000000000004000001852500000\n</code></pre><p><strong>Descripción del Archivo</strong></p><ul><li><strong>Tipo de Registro de Control</strong>: HDR <ul><li><strong>Asociado Comercial</strong>: Banesco</li><li><strong>Estándar EDIFACT</strong>: E</li><li><strong>Versión del Estándar</strong>: D 95B</li><li><strong>Tipo del Documento</strong>: PAYMUL</li><li><strong>Producción</strong>:</li><li><strong>Tipo de Registro de Encabezado</strong>: 01</li><li><strong>Tipo de Transacción</strong>: SCV</li><li><strong>Condición de Orden de Pago</strong>: 9</li><li><strong>Número de la Orden de Pago</strong>: Número de referencia que identifica el documento <strong>PAYMUL</strong>. En el ejemplo anterior el valor correspondiente es <strong>1000025</strong>.</li><li><strong>Fecha de la Creación de la Orden de Pago</strong>: Fecha en la que se genera el documento <strong>PAYMUL</strong>, en formato <strong>AAAAMMDDHHMMSS</strong>. En el ejemplo anterior el valor correspondiente es <strong>20201006000000</strong>.</li><li><strong>Tipo de Registro de Débito</strong>: 02</li><li><strong>Nro. de Referencia del Débito</strong>: Número de referencia que identifica el débito. Este campo será el utilizado para efectos de conciliación. En el ejemplo anterior el valor correspondiente es <strong>1000025</strong>.</li><li><strong>R.I.F. del Ordenante</strong>: El valor debe comenzar con la letra del R.I.F. (J o G), no debe contener ningún separador y debe estar en mayúscula.</li><li><strong>Nombre del Ordenante</strong>: Nombre de la Empresa sin acentos o caracteres especiales. En el ejemplo anterior el valor correspondiente es <strong>Compaa Estndar</strong>.</li><li><strong>Montos Total a Debitar/Abonar</strong>: Debe tener quince (15) posiciones sin ningún separador, entre los cuales estan trece (13) enteros y dos (2) decimales. El monto del débito debe cuadrar con la sumatoria de los créditos. En el ejemplo anterior el valor correspondiente es <strong>000001852500000</strong>.</li><li><strong>Moneda</strong>: Siglas correspondiente a la moneda del débito. En el ejemplo anterior el valor correspondiente es <strong>VES</strong>.</li><li><strong>Número de Cuenta a Débitar</strong>: Número de cuenta en Banesco que este registrada o asociada a EDI y desde la cual saldra el dinero. En el ejemplo anterior el valor correspondiente es <strong>01340000000000000000</strong>.</li><li><strong>Código del Banco Ordenando</strong>: En el ejemplo anterior el valor correspondiente es <strong>BANESCO</strong>.</li><li><strong>Fecha Efectiva del Pago</strong>: Fecha en la cual el banco va a efectuar el débito y sus créditos asociados. En el ejemplo anterior el valor correspondiente es <strong>20201006</strong>.</li><li><strong>Tipo de Registro de Crédito</strong>: 03 (Este se repite tantas veces como registros &quot;abonos&quot; sean).</li><li><strong>Número de Recibo o Referencia de Pago</strong>: El número de referencia identifica al crédito, debe ser de ocho (8) posiciones numéricas. En el ejemplo anterior los valores correspondiente son <strong>00000000</strong>, <strong>00000001</strong>, <strong>00000002</strong> y <strong>00000003</strong>.</li><li><strong>Monto a Pagar</strong>: Debe tener quince (15) posiciones sin ningún separador, entre los cuales estan trece (13) enteros y dos (2) decimales. Si el monto a pagar no cubre los quince espacios, se deben reemplazar los espacios con ceros (0) a la izquierda.</li><li><strong>Moneda</strong>: Siglas correspondiente a la moneda del crédito. En el ejemplo anterior el valor correspondiente es <strong>VES</strong>.</li><li><strong>Número de Cuenta a Acréditar</strong>: Número de cuenta a la cual va a ingresar el dinero. En el ejemplo anterior los valores correspondiente son <strong>01140000000000000000</strong>, <strong>01750000000000000000</strong>, <strong>01630000000000000000</strong> y <strong>01020000000000000000</strong>.</li><li><strong>Banco Beneficiario</strong>: Código banco Swift. En el ejemplo anterior el valor correspondiente es <strong>0114</strong>, <strong>0175</strong>, <strong>0163</strong> y <strong>0102</strong>.</li><li><strong>Cédula de Identidad del Beneficiario</strong>: El valor debe comenzar con la letra de la cédula (V, E, J, G), no debe contener ningún separador y se debe considerar lo siguiente. Si la cédula es mayor a diez millones (V10000000) se debe colocar un creo (0) por delante, quedando de la siguiente manera (V010000000). Si la cédula es menor a diez millones (V10000000) se debe colocar dos ceros (0) por delante, quedando de la siguiente manera (V009000000). En el ejemplo anterior los valores correspondiente son <strong>V0000000</strong>, <strong>G200003030</strong>, <strong>J297599070</strong> y <strong>J002443731</strong>.</li><li><strong>Nombre del Beneficiario</strong>: Nombre de la persona, empresa u organización a la cual se le va a efectuar el crédito.</li><li><strong>Correo Electrónico del Beneficiario</strong>: Correo electrónico de la persona, empresa u organización a la cual se le va a efectuar el crédito.</li><li><strong>Forma de Pago</strong>: 425 indica pagos a proveedores en otros bancos, mientras que 42 indica abono en cuenta (terceros en el mismo banco).</li><li><strong>Tipo de Registro de Totales</strong>: 06</li><li><strong>Total de Débitos</strong>: Cantidad de débitos que contiene el documento, este debe tener quince (15) posiciones con números enteros. Si el valor no cubro los quince espacios, se deben reemplazar los espacios con ceros (0) a la izquierda. En el ejemplo anterior el valor correspondiente es <strong>000000000000001</strong>.</li><li><strong>Total de Créditos</strong>: Cantidad de créditos que contiene el documento, este debe tener quince (15) posiciones con números enteros. Si el valor no cubro los quince espacios, se deben reemplazar los espacios con ceros (0) a la izquierda. En el ejemplo anterior el valor correspondiente es <strong>000000000000004</strong>.</li><li><strong>Monto Total a Pagar</strong>: Monto total de la orden de pago, este debe cuadrar con la sumatoria de los créditos. Debe tener quince (15) posiciones sin ningún separador, entre los cuales estan trece (13) enteros y dos (2) decimales. En el ejemplo anterior el valor correspondiente es <strong>000001852500000</strong>.</li></ul></li></ul><h2 id="banesco-nomina" tabindex="-1"><a class="header-anchor" href="#banesco-nomina" aria-hidden="true">#</a> <strong>Banesco Nómina</strong></h2><p><strong>Archivo para Pagos</strong></p><p>Al ejecutar el proceso de selección de pago de la nómina quincenal &quot;<strong>NQ-15</strong>&quot; procesada en ADempiere, con los siguientes empleados:</p><ul><li>Socio del Negocio &quot;<strong>Empleado Estándar Uno</strong>&quot;, con cédula de identidad &quot;<strong>V000000001</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li><li>Socio del Negocio &quot;<strong>Empleado Estándar Dos</strong>&quot;, con cédula de identidad &quot;<strong>V000000002</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li><li>Socio del Negocio &quot;<strong>Empleado Estándar Tres</strong>&quot;, con cédula de identidad &quot;<strong>V000000003</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li><li>Socio del Negocio &quot;<strong>Empleado Estándar Cuatro</strong>&quot;, con cédula de identidad &quot;<strong>V000000004</strong>&quot;, perteneciente a la nómina &quot;<strong>Quincenal</strong>&quot;.</li></ul><p>Se obtiene como resultado del proceso &quot;<strong>Imprimir /Exportar</strong>&quot;, un documento en formato &quot;<strong>.txt</strong>&quot; con los detalles de los pagos a ser realizados desde el banco banesco a terceros en el mismo banco, así como también a terceros en otros bancos. El mismo se puede descargar en el enlace <a href="Banesco_Banco_Universal_CA_1000027.txt">Archivo de Pago de Nómina del Banesco Banco Universal C.A.</a> y visualizar de la siguiente manera:</p><p>::</p><pre><code>HDRBANESCO        ED  95BPAYMULP\n01SAL                                9  1000027                            20201015000000\n021000027                       J000000000       Compaa Estndar                     000000172537848VES 0134000000000000000               BANESCO    20201015\n0300000000                      000000043134462VES01340000000000000000          0134          V000000001       Empleado Estndar                                                      empleado-estándar@ejemplo.com                                                                                                                                                                            42 \n0300000001                      000000043134462VES01020000000000000000          0102          V000000002       Empleado Estndar Dos                                                  empleado-estándar-dos@ejemplo.com                                                                                                                                                                        425\n0300000002                      000000043134462VES01340000000000000000          0134          V000000003       Empleado Estndar Tres                                                 empleado-estándar-tres@ejemplo.com                                                                                                                                                                       42 \n0300000003                      000000043134462VES01050000000000000000          0105          V000000004       Empleado Estndar Cuatro                                               empleado-estándar-cuatro@ejemplo.com                                                                                                                                                                     425\n06000000000000001000000000000004000000172537848\n</code></pre><p><strong>Descripción del Archivo</strong></p><ul><li><strong>Tipo de Registro de Control</strong>: HDR <ul><li><strong>Asociado Comercial</strong>: Banesco</li><li><strong>Estándar EDIFACT</strong>: E</li><li><strong>Versión del Estándar</strong>: D 95B</li><li><strong>Tipo del Documento</strong>: PAYMUL</li><li><strong>Producción</strong>: P</li><li><strong>Tipo de Registro de Encabezado</strong>: 01</li><li><strong>Tipo de Transacción</strong>: SAL</li><li><strong>Condición de Orden de Pago</strong>: 9</li><li><strong>Número de la Orden de Pago</strong>: Número de referencia que identifica el documento <strong>PAYMUL</strong>. En el ejemplo anterior el valor correspondiente es <strong>1000027</strong>.</li><li><strong>Fecha de la Creación de la Orden de Pago</strong>: Fecha en la que se genera el documento <strong>PAYMUL</strong>, en formato <strong>AAAAMMDDHHMMSS</strong>. En el ejemplo anterior el valor correspondiente es <strong>20201015000000</strong>.</li><li><strong>Tipo de Registro de Débito</strong>: 02</li><li><strong>Nro. de Referencia del Débito</strong>: Número de referencia que identifica el débito. Este campo será el utilizado para efectos de conciliación. En el ejemplo anterior el valor correspondiente es <strong>1000027</strong>.</li><li><strong>R.I.F. del Ordenante</strong>: El valor debe comenzar con la letra del R.I.F. (J o G), no debe contener ningún separador y debe estar en mayúscula.</li><li><strong>Nombre del Ordenante</strong>: Nombre de la Empresa sin acentos o caracteres especiales. En el ejemplo anterior el valor correspondiente es <strong>Compaa Estndar</strong>.</li><li><strong>Montos Total a Debitar/Abonar</strong>: Debe tener quince (15) posiciones sin ningún separador, entre los cuales estan trece (13) enteros y dos (2) decimales. El monto del débito debe cuadrar con la sumatoria de los créditos. En el ejemplo anterior el valor correspondiente es <strong>000000172537848</strong>.</li><li><strong>Moneda</strong>: Siglas correspondiente a la moneda del débito. En el ejemplo anterior el valor correspondiente es <strong>VES</strong>.</li><li><strong>Número de Cuenta a Débitar</strong>: Número de cuenta en Banesco que este registrada o asociada a EDI y desde la cual saldra el dinero. En el ejemplo anterior el valor correspondiente es <strong>01340000000000000000</strong>.</li><li><strong>Código del Banco Ordenando</strong>: En el ejemplo anterior el valor correspondiente es <strong>BANESCO</strong>.</li><li><strong>Fecha Efectiva del Pago</strong>: Fecha en la cual el banco va a efectuar el débito y sus créditos asociados. En el ejemplo anterior el valor correspondiente es <strong>20201015</strong>.</li><li><strong>Tipo de Registro de Crédito</strong>: 03 (Este se repite tantas veces como registros &quot;abonos&quot; sean).</li><li><strong>Número de Recibo o Referencia de Pago</strong>: El número de referencia identifica al crédito, debe ser de ocho (8) posiciones numéricas. En el ejemplo anterior los valores correspondiente son <strong>00000000</strong>, <strong>00000001</strong>, <strong>00000002</strong> y <strong>00000003</strong>.</li><li><strong>Monto a Pagar</strong>: Debe tener quince (15) posiciones sin ningún separador, entre los cuales estan trece (13) enteros y dos (2) decimales. Si el monto a pagar no cubre los quince espacios, se deben reemplazar los espacios con ceros (0) a la izquierda.</li><li><strong>Moneda</strong>: Siglas correspondiente a la moneda del crédito. En el ejemplo anterior el valor correspondiente es <strong>VES</strong>.</li><li><strong>Número de Cuenta a Acréditar</strong>: Número de cuenta a la cual va a ingresar el dinero. En el ejemplo anterior los valores correspondiente son <strong>01340000000000000000</strong>, <strong>01020000000000000000</strong>, <strong>01340000000000000000</strong> y <strong>01050000000000000000</strong>.</li><li><strong>Banco Beneficiario</strong>: Código banco Swift. En el ejemplo anterior el valor correspondiente es <strong>0134</strong>, <strong>0102</strong>, <strong>0134</strong> y <strong>0105</strong>.</li><li><strong>Cédula de Identidad del Beneficiario</strong>: El valor debe comenzar con la letra de la cédula (V, E, J, G), no debe contener ningún separador y se debe considerar lo siguiente. Si la cédula es mayor a diez millones (V10000000) se debe colocar un creo (0) por delante, quedando de la siguiente manera (V010000000). Si la cédula es menor a diez millones (V10000000) se debe colocar dos ceros (0) por delante, quedando de la siguiente manera (V009000000). En el ejemplo anterior los valores correspondiente son <strong>V000000001</strong>, <strong>V000000002</strong>, <strong>V000000003</strong> y <strong>V000000004</strong>.</li><li><strong>Nombre del Beneficiario</strong>: Nombre de la persona, empresa u organización a la cual se le va a efectuar el crédito.</li><li><strong>Correo Electrónico del Beneficiario</strong>: Correo electrónico de la persona, empresa u organización a la cual se le va a efectuar el crédito.</li><li><strong>Forma de Pago</strong>: 425 indica pagos a proveedores en otros bancos, mientras que 42 indica abono en cuenta (terceros en el mismo banco).</li><li><strong>Tipo de Registro de Totales</strong>: 06</li><li><strong>Total de Débitos</strong>: Cantidad de débitos que contiene el documento, este debe tener quince (15) posiciones con números enteros. Si el valor no cubro los quince espacios, se deben reemplazar los espacios con ceros (0) a la izquierda. En el ejemplo anterior el valor correspondiente es <strong>000000000000001</strong>.</li><li><strong>Total de Créditos</strong>: Cantidad de créditos que contiene el documento, este debe tener quince (15) posiciones con números enteros. Si el valor no cubro los quince espacios, se deben reemplazar los espacios con ceros (0) a la izquierda. En el ejemplo anterior el valor correspondiente es <strong>000000000000004</strong>.</li><li><strong>Monto Total a Pagar</strong>: Monto total de la orden de pago, este debe cuadrar con la sumatoria de los créditos. Debe tener quince (15) posiciones sin ningún separador, entre los cuales estan trece (13) enteros y dos (2) decimales. En el ejemplo anterior el valor correspondiente es <strong>000000172537848</strong>.</li></ul></li></ul>',22),l={},c=(0,t(13860).Z)(l,[["render",function(e,o){const t=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("p",null,[n,(0,r._)("a",a,[s,(0,r.Wm)(t)]),d]),i])}]])},17037:(e,o,t)=>{t.r(o),t.d(o,{data:()=>r});const r=JSON.parse('{"key":"v-1045ea88","path":"/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/banesco/banesco.html","title":"Banco Banesco","lang":"es-ES","frontmatter":{"title":"Banco Banesco","icon":"app","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos","Gestión de Tesorería"],"article":false,"summary":"Para la exportación de los archivos desde ADempiere al banco banesco, ERPyA soporta los siguientes formatos facilitados por el banco, que pueden ser descargados para su análisis y ","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/banesco/banesco.html"}],["meta",{"property":"og:title","content":"Banco Banesco"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-20T19:52:22.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Tesorería"}],["meta",{"property":"article:modified_time","content":"2023-06-20T19:52:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Banesco Proveedores","slug":"banesco-proveedores","children":[]},{"level":2,"title":"Banesco Nómina","slug":"banesco-nomina","children":[]}],"git":{"createdTime":1687290742000,"updatedTime":1687290742000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.19,"words":2456},"filePathRelative":"docs/lve/procedures/treasury-management/upload-bank-statement-to-bank/banesco/banesco.md","localizedDate":"20 de junio de 2023"}')}}]);