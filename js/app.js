function verContacto() {
    var element = $(".seccion5:visible")[0];
    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
var btn = document.querySelectorAll(".btn");
for (const b of btn) {
    b.addEventListener("click", verContacto)

}




//Idiomas
function doLangSelect(idioma) {
    document.querySelector("html").setAttribute("lang", idioma.substr(0, 2));
    document.querySelector("html").classList.add("hide-langmenu");
    setTimeout(function () {
        document.querySelector("html").classList.remove("hide-langmenu");
    }, 500)

}

// se establece el idioma según configuración de navegador
if (/^en|^de|^es/.test(navigator.language)) {
    doLangSelect(window.navigator.language);
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var lang1 = getUrlParameter("lang")
if (lang1) {

    doLangSelect(lang1)

}

//Seleccion de dias anulados
var today = new Date().toISOString().split('T')[0];
var inputs = document.querySelectorAll("input[type='date']");
for (const inp of inputs)
    inp.setAttribute('min', today);

//Labels fechas

var fechaEntrega = document.querySelector(".entrega input")
fechaEntrega.addEventListener("change", function () {
    if (fechaEntrega.value) {
        document.querySelector(".entrega p").classList.add("hidden")
    }
    else {
        document.querySelector(".entrega p").classList.remove("hidden")
    }

});
var fechaRecogida = document.querySelector(".recogida input")
fechaRecogida.addEventListener("change", function () {
    if (fechaRecogida.value) {
        document.querySelector(".recogida p").classList.add("hidden")
    }
    else {
        document.querySelector(".recogida p").classList.remove("hidden")
    }

});
fechaEntrega.addEventListener("focus", function () {
    document.querySelector(".entrega p").classList.add("hidden")
});

//FECHA
var fechaEntrega_en = document.querySelector(".delivery input")
fechaEntrega_en.addEventListener("change", function () {
    if (fechaEntrega_en.value) {
        document.querySelector(".delivery p").classList.add("hidden")
    }
    else {
        document.querySelector(".delivery p").classList.remove("hidden")
    }

});
fechaEntrega_en.addEventListener("focus", function () {
    document.querySelector(".delivery p").classList.add("hidden")
});


var fechaEntrega_de = document.querySelector(".lieferdatum input")
fechaEntrega_de.addEventListener("change", function () {
    if (fechaEntrega_de.value) {
        document.querySelector(".lieferdatum p").classList.add("hidden")
    }
    else {
        document.querySelector(".lieferdatum p").classList.remove("hidden")
    }

});
fechaEntrega_de.addEventListener("focus", function () {
    document.querySelector(".lieferdatum p").classList.add("hidden")
});

