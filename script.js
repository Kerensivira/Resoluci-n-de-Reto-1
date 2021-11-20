convertir();

function convertir() {
    let elCalcular = document.getElementById("calcular");
    elCalcular.addEventListener("click", () => {

        let elMonto = document.getElementById("monto").value;
        let MonedaLocal = document.getElementById("Divisas1").value;
        let MonedaDestino = document.getElementById("Divisas2").value;

        console.log(elMonto);
        console.log(MonedaLocal);
        console.log(MonedaDestino);
    })
}



//document.getElementById("Divisas1").value;
