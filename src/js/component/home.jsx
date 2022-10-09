import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

	//Declaracion de estado de la lista
    const [lista, setLista] = useState([
        { label: "Pasear al perro" },
        { label: "Aprender React" },
        { label: "Salir a correr" }
    ]);

    //Declaracion de estado de la tarea
    const [tarea, setTarea] = useState("");

    // e = event | Function handles submit
    const agregarTarea = e => {
        if (e.key === "Enter" && tarea !== "") {
            setLista(
                lista.concat({
                    // Se asigna la tarea a label
                    label: tarea
                })
            );

            // Se limpia la variable tarea
            setTarea("");
        }
    };

	//Se genera un nuevo array con todos los items menos el que quiero eliminar, se guarda en la lista
    const eliminarTarea = index => {
        setLista(lista.filter((item, i) => index != i));
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h1>Tareas</h1>
            {/* Al presionar enter se llama la función "agregarTarea"*/}
            <form onSubmit={e => e.preventDefault()}>
                <ul className="lista-unstyled d-flex flex-column p-0">
                    <li>
                        <input
                            type="text"
                            placeholder="Escribe una tarea..."
                            className="form-control"
                            value={tarea}
                            /* Se llama a setTarea y se guarda el contenido del input en la variable tarea*/
                            onChange={e => setTarea(e.target.value)}
                            onKeyPress={e => agregarTarea(e)}
                        />
                    </li>
                    {// Se crea la lista de tareas con map
                        lista.map((item, index) => {
                            return (
                                <li key={index} className="d-flex listItem">
                                    {item.label}
                                    <span
                                        className="ml-auto"
                                        role="button"
                                        tabIndex="0"
                                        onClick={() => eliminarTarea(index)}>
                                        &nbsp;&nbsp;
										<FontAwesomeIcon
                                            className="icon"
                                            icon={faTimes}
                                        />
                                    </span>
                                </li>
                            );
                        })}
                    <li className="mt-3 d-inline-flex align-items-center">
                        <span id="number">{lista.length}</span> 
						&nbsp;item
						{lista.length > 1 || lista.length === 0 ? "s" : null} left
                        &nbsp;
                        <span className="ml-auto">
                            <a
                                href="#"
                                className="btn btn-dark"
                                // Setea una lista vacia para limpiar 
                                onClick={() => setLista([])}>
                                Limpiar
                            </a>
                        </span>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default Home;
