convertir();

function convertir() {
    let elCalcular = document.getElementById("calcular");
    elCalcular.addEventListener("click", () => {

        let elMonto = document.getElementById("monto").value;
        let MonedaLocal = document.getElementById("Divisas1").value;
        let MonedaDestino = document.getElementById("Divisas2").value;
        let elResultado = 0

        console.log(elMonto);
        console.log(MonedaLocal);
        console.log(MonedaDestino);

        if (MonedaLocal == "COP (Peso Colombiano)") {
            if (MonedaDestino == COP(PesoColombiano)) {
                elResultado = elMonto;
            }
        }
        if (MonedaLocal == "EUR (Euro)") {
            {
                elResultado = elMonto * 4.442, 50;
            }
        } if (MonedaLocal == "GBP (Libras Esterlinas)") {
            {
                elResultado = elMonto * 5.262, 37;
            }
        }
    })
}
