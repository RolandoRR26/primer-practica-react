import React, { useState } from 'react';

function Formulario() {

    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    });


    const manejarCambio = (e) => { //funcion que maneja los cambios en los inputs, captura cuando algo ingresa al input en tiempo real en e (evento)

        const { name, value } = e.target; //destructuramos para que nos guarde el name y el value en las const
        //console.log(e.target); //verificamos que si lo haga

        setFormulario(prevState => { //funcion que actualiza el estado de formulario y recibe de argumento una funcion flecha para crear el nuevo objeto 
           
            console.log(prevState); //vemos el estado anterior

            const nuevoEstado = {
                nombre: prevState.nombre,
                apellido: prevState.apellido,
                telefono: prevState.telefono,
                email: prevState.email
            };
           

            nuevoEstado[name] = value; // actualizamos el campo que cambió

           console.log(nuevoEstado); //vemos el objeto ya actualizado 

            return nuevoEstado;
        });
    };


    const [mostrarDatos, setMostrarDatos] = useState(false); //usamos otro useState para la renderizacion del objeto con los datos ingresados


    const manejarEnvio = (e) => { //funcion para que la pagina no se actulice completamente y se pierdan los datos del formulario, ejecuta al hacer el submit con el boton
        e.preventDefault(); //metodo para no recargar la pagina - NO OLVIDAR
        setMostrarDatos(true);//le pasamos true a la funcion que actualiza a mostrarDatos
        console.log(formulario); //vemos como quedo el estado de formulario
       console.log(mostrarDatos);//vemos si se pasa el true
    };


    return (
        <>
            <form onSubmit={manejarEnvio}>
                <label>Nombre:
                    <input type="text" name="nombre" value={formulario.nombre} onChange={manejarCambio} />
                </label>
                <br />
                <label>Apellido:
                    <input type="text" name="apellido" value={formulario.apellido} onChange={manejarCambio} />
                </label>
                <br />
                <label>Teléfono:
                    <input type="tel" name="telefono" value={formulario.telefono} onChange={manejarCambio} />
                </label>
                <br />
                <label>Email:
                    <input type="email" name="email" value={formulario.email} onChange={manejarCambio} />
                </label>
                <br />
                <button type="submit">Mostrar datos</button>
            </form>


            {mostrarDatos && ( //recuerda el operador && renderiza lo que esta a la derecha si la variable es true
                <div>
                    <h1>ESTE ES EL ESTADO DE TUS DATOS INGRESADOS :</h1>
                    <p>NOMBRE: {formulario.nombre}</p>
                    <p>APELLIDO: {formulario.apellido}</p>
                    <p>TELEFONO: {formulario.telefono}</p>
                    <p>EMAIL: {formulario.email}</p>
                </div>
            )}
        </>
    );
}

export default Formulario;

