import PrimaryButton from "./PrimaryButton"
import UserTable from "./UserTable"

const Home = () => {

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-4">Registro de Procedimientos Administrativos</h1>
            <ul className="list-disc">
                <li className="mb-2">Debe completar este formulario por cada procedimiento administrativo que realice su dirección municipal.</li>
                <li className="mb-2">Los procedimientos que registre se mostrarán en la parte inferior de esta página.</li>
                <li className="mb-2">Asegúrese de responder todas las preguntas de una sección antes de avanzar a la siguiente.</li>
                <li className="mb-2">Para ver la descripción de una pregunta específica, haga clic en el botón azul con el signo de interrogación que aparece junto a ella.</li>
            </ul>


            <div className="flex justify-center py-4">
                <PrimaryButton type="link" href="identificacion">Agregar procedimiento</PrimaryButton>
            </div>
            <hr className="py-2" />
            <h2 className="text-center font-bold text-xl">Procedimientos administrativos registrados</h2>
            <UserTable />
        </div>
    )
}

export default Home