function calcularDescomposicion() {
    var vector = document.getElementById("vector").value;
    var angulo = parseFloat(document.getElementById("angulo").value);

    // Validar la entrada
    if (!vector.match(/^\(\s*-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?\s*\)$/)) {
        mostrarError("Formato de vector incorrecto. Debe ser (x,y).");
        return;
    }

    if (isNaN(angulo) || angulo < 0 || angulo >= 360) {
        mostrarError("El ángulo debe ser un número entre 0 y 360 grados.");
        return;
    }

    // Obtener los componentes del vector
    var matches = vector.match(/-?\d+(\.\d+)?/g);
    var x = parseFloat(matches[0]);
    var y = parseFloat(matches[1]);

    // Calcular las componentes de la descomposición
    var descomposicion_x = Math.cos(angulo * Math.PI / 180) * Math.sqrt(x * x + y * y);
    var descomposicion_y = Math.sin(angulo * Math.PI / 180) * Math.sqrt(x * x + y * y);

    mostrarResultado("La descomposición del vector es: (" + descomposicion_x.toFixed(2) + ", " + descomposicion_y.toFixed(2) + ")");
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").innerText = resultado;
}

function mostrarError(error) {
    document.getElementById("resultado").innerText = error;
}
