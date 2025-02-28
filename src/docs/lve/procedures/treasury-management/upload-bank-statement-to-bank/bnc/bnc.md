---
title: Banco Nacional de Crédito
icon: app
category: Localización Venezuela
star: 9
sticky: 9
tag:

  - Procedimientos
  - Gestión de Tesorería
article: false
---

**Banco Nacional de Crédito**
=============================

Para la exportación de los archivos desde ADempiere al banco nacional de crédito, [ERPyA](http://erpya.com) soporta el siguiente formato facilitado por el banco, que puede ser descargado para su análisis y adaptación.
El banco cuenta con los documentos [Estructura TxT BNC](BNC_Estructura_TXT_RegPagos_2014.pdf)

**Archivo para Pagos de Proveedores**

Al ejecutar el proceso de selección de pago de las siguientes facturas en ADempiere:

- Factura "**10007371**" al socio del negocio "**Proveedor Estándar**" por monto total de "**1.392,00**".
- Factura "**10007381**" al socio del negocio "**Proveedor Estándar**" por monto total de "**1.554,00**".
- Factura "**10007391**" al socio del negocio "**Proveedor Estándar2**" por monto total de "**3.480,00**".
- Factura "**10007401**" al socio del negocio "**Proveedor Estándar3**" por monto total de "**2.200,00**".

Se obtiene como resultado del proceso "**Imprimir /Exportar**", un documento en formato "**.txt**" con los detalles de los pagos a ser realizados desde el banco BNC a terceros en el mismo banco, así como también a terceros en otros bancos. El mismo se puede descargar en el enlace [Banco BNC](Banco_Nacional_de_Crdito_C.A_SOP-1001321.txt) y visualizar de la siguiente manera:

::
~~~
 C000030000000008626000001001321SSS00
 D25082022019100600321601260820191111111111111111100000000029460010007371-10007381                                           V011111111Proveedor Estandar                                                                                                                                                                  V011111111
 D25082022019100600321601260820105111111111111111100000000034800010007391                                                    J111111111Proveedor Estndar2                                                                                                                                                                  J111111111
 D25082022019100600321601260820191111111111111111100000000022000010007401                                                    J111111111Proveedor Estndar3                                                                                                                                                                  J111111111
~~~

**Descripción del Archivo**

| **#** | **Nombre del Campo**        | **Tipo** | **Largo** | **Desde** | **Hasta** | **Obligatório** | **Descripción**                                                  |
|-------|----------------------------|----------|-----------|------------|-----------|-----------------|------------------------------------------------------------------|
| 1     | Tipo de Registro           | ALPHA    | 1         | 1          | 1         | **SI**          | Valor: C = Cabecera (Valor fijo para el registro de encabezado)   |
| 2     | Cantidad de Registro       | NUM      | 5         | 2          | 6         | **SI**          | Formato: Solo números, hasta un largo máximo de 5 dígitos       |
| 2     |                            |          |           |            |           |                 | Valor: Cantidad de registros de transferencia correspondiente a |
|       |                            |          |           |            |           |                 | el archivo de detalle                                            |
| 3     | Monto Total                | NUM      | 15        | 7          | 21        | **SI**          | Formato: Solo números, hasta un largo máximo de 15 dígitos.      |
| 3     |                            |          |           |            |           |                 | Las dos últimas posiciones corresponden a los decimales, no debe |
|       |                            |          |           |            |           |                 | tener espacios en blanco, rellenar con ceros "0". Valor: Suma de |
|       |                            |          |           |            |           |                 | los montos de los pagos correspondientes al archivo de detalle   |
| 4     | Identificación Lote        | NUM      | 10        | 22         | 31        | **SI**          | Formato: Solo números, hasta un largo máximo de 10 dígitos       |
| 4     |                            |          |           |            |           |                 | Valor: Identificador de la transmisión. Este número debe ser     |
|       |                            |          |           |            |           |                 | distinto (único) para cada transmisión                           |
| 5     | Rechazo Caso de Error      | ALPHA    | 1         | 32         | 32        | **SI**          | Valor: S = Si (Valor fijo). En caso de errores en la validación  |
| 5     |                            |          |           |            |           |                 | de uno o más registros, el lote será devuelto para su corrección |
| 6     | Enviar correo benef.       | ALPHA    | 1         | 33         | 33        | **SI**          | Valor: S = Si (Valor fijo).                                      |
| 7     | Verificar reg. benef.      | ALPHA    | 1         | 34         | 34        | **SI**          | Valor: S = Si (Valor fijo).                                      |
| 8     | Validar FD.(Hash)          | NUM      | 2         | 35         | 36        | **SI**          | Formato: Solo números, hasta un largo máximo de 2 dígitos.        |
| 8     |                            |          |           |            |           |                 | Valor: 00 = No validar firma digital (Hash).                     |
| 8     |                            |          |           |            |           |                 | Método estándar de encriptación: SHA1                            |
| 8     |                            |          |           |            |           |                 | 01 = Validar firma digital (Hash)                                |

| **#** | **Nombre del Campo**       | **Tipo** | **Largo** | **Desde** | **Hasta** | **Obligatório** | **Descripción**                                                              |
|-------|---------------------------|----------|-----------|------------|-----------|-----------------|------------------------------------------------------------------------------|
| 1     | Tipo de Registro          | ALPHA    | 1         | 1          | 1         | **SI**          | Valor: D = Detalle (Valor fijo para todos los registros de detalle)         |
| 2     | Fecha pago Transf.        | NUM      | 8         | 2          | 9         | **SI**          | Formato: ddmmyyyy                                                            |
| 2     |                           |          |           |            |           |                 | Valor: Fecha en la que desea realizar el pago                                 |
| 3     | Cuentas a Debitar         | NUM      | 20        | 10         | 29        | **SI**          | Formato: Solo dígitos (20)                                                   |
| 3     |                           |          |           |            |           |                 | Valor: Cuenta del emisor, donde debitarán los fondos del pago                 |
| 4     | Cuenta Beneficiario       | NUM      | 20        | 20         | 49        | **SI**          | Formato: Solo dígitos (20)                                                   |
| 4     |                           |          |           |            |           |                 | Valor: Cuenta del beneficiario (en el BNC u otro Banco), donde se abonarán los fondos del pago |
| 5     | Monto del Pago            | NUM      | 15        | 50         | 64        | **SI**          | Formato: Solo dígitos, hasta un largo máximo de 15 dígitos. Las dos últimas posiciones corresponden a los decimales, no debe tener espacios en blanco, rellenar con ceros "0". Valor: Monto del Pago |
| 6     | Descripción               | ALPHA    | 60        | 65         | 124       | **SI**          | Valor: Descripción del pago. Ejemplo: Nro. de Factura                        |
| 7     | Letra Ident. Benef.       | ALPHA    | 1         | 125        | 125       | **SI**          | Valor: Para Personas Naturales: V (Venezolano) ó E (Extranjero). Para Personas Jurídicas: J (Jurídica) ó G (Gobierno) |
| 8     | Número Ident. Benef.      | NUM      | 9         | 126        | 134       | **SI**          | Formato: Solo dígitos, hasta un largo máximo de 9 dígitos. Valor: Para Personas Naturales: Número de Cédula. Para Personas Jurídicas: Número de RIF |
| 9     | Nombre o RS Benef.        | ALPHA    | 80        | 135        | 214       | **SI**          | Formato: Sin espacios a la izquierda, con un largo máximo de 80 caracteres |
| 10    | Correo Elect. Benef.      | ALPHA    | 100       | 215        | 314       | **SI**          | Formato: Sin espacios a la izquierda, máximo largo de 100 caracteres         |
| 11    | Ref. del Cliente          | NUM      | 10        | 315        | 324       | **SI**          | Valor: Referencia del cliente. Para su control interno                       |

**Archivo para Pagos de Nómina**

Al ejecutar el proceso de selección de pago de la nómina quincenal "**NQ-19**" procesada en ADempiere, con los siguientes empleados:

- Socio del Negocio "**Empleado Estándar Uno**", con cédula de identidad "**V000000001**", perteneciente a la nómina "**Quincenal**".
- Socio del Negocio "**Empleado Estándar Dos**", con cédula de identidad "**V000000002**", perteneciente a la nómina "**Quincenal**".
- Socio del Negocio "**Empleado Estándar Tres**", con cédula de identidad "**V000000003**", perteneciente a la nómina "**Quincenal**".
- Socio del Negocio "**Empleado Estándar Cuatro**", con cédula de identidad "**V000000004**", perteneciente a la nómina "**Quincenal**".

Se obtiene como resultado del proceso "**Imprimir /Exportar**", un documento en formato "**.txt**" con los detalles de los pagos a ser realizados desde el banco nacional de crédito a terceros en el mismo banco, así como también a terceros en otros bancos. El mismo se puede descargar en el enlace [Archivo de Pago de Nómina del BNC](Banco_Nacional_de_Crdito_C.A_1000040.txt) y visualizar de la siguiente manera:

~~~
    ND 019100000000000000000000172537848J000000000
    NC 013400000000000000000000043134462V000000001
    NC 010200000000000000000000043134462V000000002
    NC 013400000000000000000000043134462V000000003
    NC 019100000000000000000000043134462V000000004
~~~

**Descripción del Archivo**

- **Tipo de Registro de Encabezado**: Identificación del encabezado del lote. Ejemplo: "**ND**"
- **Número de Cuenta de la Empresa**: Número de cuenta a debitar. Ejemplo: "**01910000000000000000**"
- **Monto Total**: Monto total del lote de pagos. Ejemplo: "**0000172537848**"
- **RIF de la Empresa**: Número de RIF de la empresa. Ejemplo: "**J000000000**"
- **Tipo de Registro de Detalle por Cada Pago**: "**NC**"
- **Número de Cuenta del Beneficiario**: Número de cuenta a acreditar. Ejemplo: "**01340000000000000000**", "**01020000000000000000**", "**01340000000000000000**" y "**01910000000000000000**".
- **Monto**: Monto del pago. Ejemplo: "**0000043134462**"
- **CI o RIF del Beneficiario**: Número de CI o RIF del beneficiario. Ejemplo: "**V000000001**", "**V000000002**", "**V000000003**" y "**V000000004**".
