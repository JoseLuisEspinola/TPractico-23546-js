document.addEventListener('DOMContentLoaded', function () {
    // Obtén los elementos del DOM necesarios
    const categoriaSelect = document.getElementById('categoria');
    const cantidadInput = document.getElementById('cantidad');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const correoInput = document.getElementById('correo');
    const totalInput = document.getElementById('total');

    // Valor base del ticket
    const precioBase = 200;

    // Función para calcular y actualizar el precio del ticket
    function calcularPrecio() {
        // Validar campos de nombre, apellido y correo
        const nombre = nombreInput.value.trim();
        const apellido = apellidoInput.value.trim();
        const correo = correoInput.value.trim();

        if (nombre === '' || apellido === '' || correo === '') {
            // Al menos uno de los campos está vacío, no realizar el cálculo
            totalInput.value = '';
            return;
        }

        // Continuar con el cálculo si los campos están completos
        // Obtén el valor seleccionado en la categoría
        const categoria = categoriaSelect.value;
        // Obtén la cantidad de tickets
        const cantidad = parseFloat(cantidadInput.value) || 0;

        // Calcula el descuento en función de la categoría
        let descuento = 0;
        switch (categoria) {
            case 'opcion1': // Estudiante
                descuento = 0.8; // 80% de descuento
                break;
            case 'opcion2': // Trainee
                descuento = 0.5; // 50% de descuento
                break;
            case 'opcion3': // Junior
                descuento = 0.15; // 15% de descuento
                break;
            default:
                descuento = 1; // Sin descuento
        }

        // Calcula el precio final teniendo en cuenta la cantidad
        const precioFinal = cantidad * (precioBase - (precioBase * descuento));

        // Actualiza el valor en el campo "Total a Pagar"
        totalInput.value = `$${precioFinal.toFixed(2)}`;
    }

    // Asocia eventos "input" a los campos para realizar validaciones en tiempo real
    nombreInput.addEventListener('input', calcularPrecio);
    apellidoInput.addEventListener('input', calcularPrecio);
    correoInput.addEventListener('input', calcularPrecio);
    cantidadInput.addEventListener('input', calcularPrecio);
    categoriaSelect.addEventListener('change', calcularPrecio);

    // Calcula el precio inicial al cargar la página
    calcularPrecio();
});
