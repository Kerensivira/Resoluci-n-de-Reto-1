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

//COP A TODAS LAS MONEDAS.

        if (MonedaLocal == "COP (Peso Colombiano)") {
            if (MonedaDestino == COP(PesoColombiano)) {
                elResultado = elMonto;
            }
        }
       
        if (MonedaLocal == "EUR (Euro)") {
            {
                elResultado = elMonto * 0,00023;
            }
        } if (MonedaLocal == "GBP (Libras Esterlinas)") {
            {
                elResultado = elMonto * 0,0001;
            }
        } if (MonedaLocal == "MXN (Peso Mexicano)") {
            {
                elResultado = elMonto * 0,0053;
            }
        } if (MonedaLocal == "USD (Dólar estadounidense)") {
            {
                elResultado = elMonto * 0,00025;
            }
        }

//EURO A TODAS LAS MONEDAS


        if (MonedaLocal == "EUR (Euro)") {
            if (MonedaDestino == Eur(Euro)) {
                elResultado = elMonto;
            }
        }
        if (MonedaLocal == "COP (Peso Colombiano)") {
            {
                elResultado = elMonto / 4.442, 50;
            }
        } if (MonedaLocal == "GBP (Libras Esterlinas)") {
            {
                elResultado = elMonto * 0,84;
            }
        } if (MonedaLocal == "MXN (Peso Mexicano)") {
            {
                elResultado = elMonto * 23,52;
            }
        } if (MonedaLocal == "USD (Dólar estadounidense)") {
            {
                elResultado = elMonto * 1,13;
            }
        }

// GBP A TODAS LAS MONEDAS 

        if (MonedaLocal == "GBP (Libra Esterlina)") {
            if (MonedaDestino == GBP (LibraEsterlina)) {
                elResultado = elMonto;
            }
        }
        if (MonedaLocal == "COP (Peso Colombiano)") {
            {
                elResultado = elMonto / 5.262,37;
            }
        } if (MonedaLocal == "EUR (Euro)") {
            {
                elResultado = elMonto * 1,19;
            }
        } if (MonedaLocal == "MXN (Peso Mexicano)") {
            {
                elResultado = elMonto * 28,03;
            }
        } if (MonedaLocal == "USD (Dólar estadounidense)") {
            {
                elResultado = elMonto * 1,34;
            }
        }

// MXN A TODAS LAS MONEDAS

if (MonedaLocal == "MXN (Peso Mexicano)") {
    if (MonedaDestino == MXN (PesoMexicano)) {
        elResultado = elMonto;
    }
}
if (MonedaLocal == "COP (Peso Colombiano)") {
    {
        elResultado = elMonto / 187,76;
    }
} if (MonedaLocal == "EUR (Euro)") {
    {
        elResultado = elMonto * 0,043;
    }
} if (MonedaLocal == "GBP (Libras Esterlinas)") {
    {
        elResultado = elMonto * 0,036;
    }
} if (MonedaLocal == "USD (Dólar estadounidense)") {
    {
        elResultado = elMonto * 0,04;
    }
}

//DÓLAR A TODAS LAS MONEDAS


    })
}
