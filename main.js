const contenido = document.querySelector(".content");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

const catalogo = [
    {
        nombre: "Mouse Kolke Dragon Series KMG-100",
        descripcion: "<ul><li>-Mouse óptico gamer</li><li>-Marca: Kolke</li><li>-Modelo: KMG-100</li><li>-Diseño ergonomico y excelente sensacion al tacto</li><li>-Puerto USB</li><li>-Cable: 35cm</li><li>-Led azul</li><li>-Botones 6D</li><li>-Hasta 2400 dpi</li><li>-Medidas: 8,3cm x 12,2cm x 4.0cm</li></ul>",
        precio: "560",
        foto: "src/m1.jpg",
    },
    {
        nombre: "Mouse Razer DeathAdder",
        descripcion: "<ul><li>-Sensor óptico verdadero de 6,400 ppp</li><li>-Factor de forma ergonómico</li><li>-5 Botones Hyperesponse</li><li>-Hasta 220 pulgadas por segundo (IPS) / 30 G de aceleración</li><li>-Diseño ergonómico para diestros.</li><li>-Peso aproximado: 96 g</li><li>-Longitud del cable: 1,8 m</li></ul>",
        precio: "3999",
        foto: "src/m2.jpg",
    },
    {
        nombre: "Mouse Redragon Griffin M607",
        descripcion: "<ul><li>-Botones Programables: 7</li><li>-TIpo de agarre: Palm, Claw</li><li>-Orientación: Derecho</li><li>-Cable: mallado de 1.8 m</li><li>-Conexión: cableado USB</li><li>-DPI Minimo: 600</li><li>-DPI Maximo: 7200</li><li>-Peso: 107gr</li><li>-Dimensiones: 12.7×8.1×4.1cm</li></ul>",
        precio: "1599",
        foto: "src/m3.jpg",
    },
    {
        nombre: "Mouse Noga Stormer ST-002",
        descripcion: "<ul><li>-Mouse Gamer de 6 Botones  Botones de Page Up y Page Down</li><li>-Botón de DPI intercambiable 600/1200/1800/2400</li><li>-Rueda de Scroll para hacer zoom y navegar.</li><li>-Tecnología ultrapolling de 1ms de respuesta</li><li>-Gran precisión y durabilidad</li><li>-Compatible con Windows XP/Vista/7/8; Mac OSX</li></ul>",
        precio: "549",
        foto: "src/m4.jpg",
    },
    {
        nombre: "Teclado Redragon Dragonborn K630",
        descripcion: "<ul><li>-Tipo de teclado: mecánico.</li><li>-Tipo de switches: Redragon Brown (táctil sin clic audible, 45 g de fuerza de actuación)</li><li>-Tamaño: compacto 60%.</li><li>-Reposamuñecas: no.</li><li>-Retroiluminado: sí, RGB Chroma.</li><li>-Cable: USB-C desmontable.</li><li>-Peso: 0,57 kg.</li><li>-Dimensiones: 29,17 x 10,17 x 3,6 cm.</li></ul>",
        precio: "4882",
        foto: "src/t1.jpg",
    },
    {
        nombre: "Teclado Nisuta NSKBGZ61",
        descripcion: "<ul><li>-Tipo mecánico.</li><li>-Forma de las teclas: cilíndrica.</li><li>-Al ser inálambrico vas a poder utilizarlo desde la ubicación que desees sin necesidad de conectar cables molestos.</li><li>-Función anti-ghosting integrada, para evitar fallas al tocar varias teclas al mismo tiempo.</li><li>-También es compatible con conector USB.</li><li>-Indispensable para tu actividades diarias.</li></ul>",
        precio: "6499",
        foto: "src/t2.jpg",
    },
    {
        nombre: "Teclado Noganet Ganon",
        descripcion: "<ul><li>-12 teclas multimedia</li><li>-Diseño Slim</li><li>-88 teclas retroiluminadas Led</li><li>-29 teclas Antighosting</li><li>-Cable 1,5 metros</li><li>-Compatible Windows 7 / 8 / 10 / MAC OSX, no es compatible con consola PS4.</li></ul>",
        precio: "3699",
        foto: "src/t3.jpg",
    },
    {
        nombre: "Teclado HyperX Alloy Origins",
        descripcion: "<ul><li>-Tipo Mecánico</li><li>-Retroiluminación RGB</li><li>-Memoria integrada 3 perfiles</li><li>-Tipo de conexión USB de tipo C a USB de tipo A</li><li>-Distancia de recorrido de las teclas 1,8 mm</li></ul>",
        precio: "10890",
        foto: "src/t4.jpg",
    },
    {
        nombre: "Auriculares Onikuma K5",
        descripcion: "<ul><li>-Diámetro del altavoz: 50 mm</li><li>-Impedancia: 16 ohmios ± 15%</li><li>-Sensibilidad: 114dB ± 3dB</li><li>-Frecuencia: 20-20000Hz</li><li>-Dimensión del micrófono: 6.0 * 2.7 mm</li><li>-Sensibilidad del micrófono: -36dB +/- 1dB</li><li>-Directividad: omnidireccional</li><li>-Longitud del cable: Aprox. 2,2 m</li></ul>",
        precio: "2007",
        foto: "src/a1.jpg",
    },
    {
        nombre: "Auriculares HyperX Cloud Flight",
        descripcion: "<ul><li>-Respuesta de frecuencia: 20Hz - 20,000Hz</li><li>-Impedancia: 32 ohmios.</li><li>-Nivel de presión de sonido: 106 dBSPL / mW a 1kHz</li><li>-Peso: 300g</li><li>-Peso con micrófono: 315g</li><li>-Longitud y tipo de cable: cable de carga USB (1 m)</li></ul>",
        precio: "12899",
        foto: "src/a2.jpg",
    },
    {
        nombre: "Auriculares Redragon Zeus",
        descripcion: "<ul><li>-Tipo de salida: 7.1 Virtual via USB, stereo por ficha 3.5</li><li>-Frecuencia de Respuesta 20 – 20k Hz</li><li>-Impedancia: 64 Ohm</li><li>-Diametro del diafragma: 53 mm con imanes de neodimio</li><li>-Sensibilidad: 113 db</li><li>-Peso: 305 g</li><li>-Impedancia del micrófono: 2.2k Ohm</li><li>-Sensibilidad del micrófono: -42 dB+/-3 dB</li></ul>",
        precio: "7749",
        foto: "src/a3.jpg",
    },
    {
        nombre: "Auriculares Logitech G733",
        descripcion: "<ul><li>-Peso: 278 g</li><li>-Transductor: PRO-G 40 mm</li><li>-Respuesta de frecuencia: 20 Hz – 20 kHz</li><li>-Impedancia: 39 ohmios (pasiva), 5 kilohmios (activa)</li><li>-Sensibilidad: 87,5 dB SPL/mW</li><li>-Respuesta de frecuencia:	100 Hz – 10 kHz</li></ul>",
        precio: "7350",
        foto: "src/a4.jpg",
    },
]

const user = JSON.parse(localStorage.getItem("usuario")) || {};
const nombre = "";
let productoElegido = "";

function eventosCardGrande () {
    const cardContainer = document.querySelector(".card_grande")
    catalogo.forEach (producto => {
        if (producto.nombre === productoElegido){
            cardContainer.innerHTML = `
            <div class="card_foto">
            <img src="${producto.foto}" alt="">
            </div>
            <div class="card_texto">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <button id="card_volver">VOLVER</button>
            </div>
            `
        }
    });
    const btnVolver = document.querySelector("#card_volver");
    btnVolver.addEventListener("click", (e) => {
        renderPrincipal();
    })
}

function eventosPrincipal () {
    const buscador = document.querySelector("#buscador");
    const productos = document.querySelector("#productos");
    productos.innerText = [];
    catalogo.forEach(producto => {
        productos.innerHTML += `
        <div class="card">
        <p class="titulo">${producto.nombre}</p>
        <img src="${producto.foto}" alt="">
        <p class="precio">$${producto.precio}</p>
        </div>
        `
     });

     buscador.addEventListener("input", ({target}) => {
        const value = target.value.toUpperCase();
        const cards = document.querySelectorAll('.card');

        for (const card of cards) {
            const nombre = card.querySelector('.titulo').innerText.toUpperCase();
            if (nombre.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    })

    const card = document.querySelector("#productos");
    card.addEventListener("click", ({target}) => {
        if (target.parentNode.className == "card") {
            productoElegido = target.parentNode.children[0].innerText;
            renderCardGrande();
        } else if (target.className == "card") {
            productoElegido = target.children[0].innerText;
            renderCardGrande();
        }
    })
}

function eventosLogin () {
    const loginBtn = document.querySelector("#login_btn");
    const loginMail = document.querySelector("#loginMail");
    const loginPass = document.querySelector("#loginPass");
    const errorLogin = document.querySelector("#errorLogin")
    const saludo = document.querySelector("#nombrecito");

    loginBtn.addEventListener("click", (e) => {
        const verificar = () => {
            if (loginMail.value === user.mail && loginPass.value === user.pass) {
                saludo.innerText = `Hola ${user.nombre}!`;
                renderPrincipal();
            } else {
                errorLogin.className="error";
                errorLogin.innerText = "El E-mail o la contraseña no coinciden";
            }
        }
        verificar();
    })
}

function eventosRegister () {
    const regBtn = document.querySelector("#reg_btn");
    const regName = document.querySelector("#regName");
    const regApellido = document.querySelector("#regApellido");
    const regMail = document.querySelector("#regMail");
    const regPass = document.querySelector("#regPass");
    const regPass2 = document.querySelector("#regPass2");
    const saludo = document.querySelector("#nombrecito");
    const toLogin = document.querySelector("#toLogin");

    let notPass = [];
    let notPass2 = [];
    let notPass3 = [];
    let notPass4 = [];
    regBtn.addEventListener("click", (e) => {
        const requeridos = (inputArr = []) => {
            let errores = [];
            inputArr.forEach((input) => {
                if (input.value.trim() === "") {
                    input.nextElementSibling.className="error";
                    input.nextElementSibling.innerText = "Este campo es obligatorio";
                    errores.push("error");
                    return;
                } else {
                    input.nextElementSibling.className="error oculto";
                    return ;
                }
            });
            notPass = errores;
        };
        const checkLength = (input, min, max) => {
            let errores2 = [];
            if (input.value.length < min) {
                input.nextElementSibling.className="error";
                input.nextElementSibling.innerText = `Debe tener al menos ${min} caracteres`;
                errores2.push("error");
            } else if (input.value.length > max) {
                input.nextElementSibling.className="error";
                input.nextElementSibling.innerText = `Debe ser menor a ${max} caracteres`;
                errores2.push("error");
            } else {
                input.classList.remove("error");
            };
            notPass2 = errores2;
        };
        const checkPasswordMatch = (input1, input2) => {
            errores3 = [];
            if (input1.value !== input2.value) {
                input2.nextElementSibling.className="error";
                input2.nextElementSibling.innerText = `Las contraseñas no coinciden`;
                errores3.push("error");
            } else {
                input1.classList.remove("error");
                input2.classList.remove("error");
            }
            notPass3 = errores3;
        };
        const checkEmail = (input) => {
            errores4 = [];
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(input.value.trim())) {
                input.nextElementSibling.className="error";
                input.nextElementSibling.innerText = `El email no es válido`;
                errores4.push("error");
            }
            notPass4 = errores4;
        };

        const captureUser = () =>{
            if (notPass.length === 0 && notPass2.length === 0 && notPass3.length === 0 && notPass4.length === 0) {
                user.nombre = regName.value;
                user.apellido = regApellido.value;
                user.mail = regMail.value;
                user.pass = regPass.value;
                saludo.innerText = `Hola ${regName.value}!`;
                localStorage.setItem('usuario', JSON.stringify(user));
                renderPrincipal();
            }
        }


        requeridos([regName,regApellido,regMail,regPass,regPass2]);
        checkLength(regPass, 5, 15);
        checkPasswordMatch(regPass,regPass2);
        checkEmail(regMail);
        captureUser();
        console.log(notPass);
        console.log(notPass2);
        console.log(notPass3);
        console.log(notPass4);
    })
    toLogin.addEventListener("click",renderLogin)
}


//CUERPOS DE WEB

const register = `
<div class="login">
<div class="login_logo">
    <img src="src/logo.jpg" alt="">
</div>
<div id="datos_register" class="datos_register">
    <input type="text" name="" id="regName" placeholder="Nombre">
    <p class="error oculto">Mensaje de error</p>
    <input type="text" name="" id="regApellido" placeholder="Apellido">
    <p class="error oculto">Mensaje de error</p>
    <input type="email" name="" id="regMail" placeholder="Email">
    <p class="error oculto">Mensaje de error</p>
    <input type="password" name="" id="regPass" placeholder="Contraseña">
    <p class="error oculto">Mensaje de error</p>
    <input type="password" name="" id="regPass2" placeholder="Repita su contraseña">
    <p class="error oculto">Mensaje de error</p>
</div>
<button id="reg_btn" class="regLogBtn">REGISTRATE</button>
<p class="a_login">Ya tenes cuenta? Ingresa haciendo click <a id="toLogin" href="">ACA</a> </p>
</div>
`;
const login = `
<div class="login">
    <div class="login_logo">
        <img src="src/logo.jpg" alt="">
    </div>
    <div class="datos_register">
        <input type="email" name="" id="loginMail" placeholder="Email">
        <p class="error oculto">Mensaje de error</p>
        <input type="password" name="" id="loginPass" placeholder="Contraseña">
        <p id="errorLogin" class="error oculto">Mensaje de error</p>
    </div>
    <button id="login_btn" class="regLogBtn">LOGIN</button>
    <p class="a_login">Aun no tenes cuenta? Crea una haciendo click <a id="toRegister" href="">ACA</a> </p>
</div>
`;
const principal = `
<div class="nosotros" id="nosotros">
    <h2>Somos Valeon Games!</h2>
    <p>Una tienda creada POR gamers, PARA gamers</p>
    <p>Conocemos la GRAN diferencia que hace un periferico de calidad a la hora de jugar y por eso nuestra meta es ofrecer la mejor calidad al menor precio posible.</p>
</div>

<input type="text" name="" id="buscador" placeholder="Buscar...">
<div class="productos" id="productos">
</div>
`;
const cardGrande = `
<div class="card_grande">
</div>
`;

//RENDERIZADO DE LA PAGINA
const renderPrincipal = (e) => {
    header.classList.remove("oculto");
    footer.classList.remove("oculto");
    contenido.innerHTML = principal;
    eventosPrincipal();
}

const renderRegister = () => {
    contenido.innerHTML=register;
    eventosRegister();  
}
const renderLogin = (e) => {
    e.preventDefault();
    contenido.innerHTML = login;
    eventosLogin();
}
const renderCardGrande = (e) => {
    contenido.innerHTML = cardGrande;
    eventosCardGrande();
}

renderRegister();