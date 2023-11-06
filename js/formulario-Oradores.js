document.querySelector('.form-container form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const cantidad = document.getElementById('cantidad').value;
    const categoria = document.getElementById('categoria').value;
    const total = document.getElementById('total').value;

    const resumen = `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nCantidad: ${cantidad}\nCategoría: ${categoria}\nTotal a Pagar: ${total}`;
    alert(resumen);
});
