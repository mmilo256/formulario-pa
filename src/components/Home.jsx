import PrimaryButton from "./PrimaryButton"
import UserTable from "./UserTable"

const Home = () => {

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-4">Registro de Procedimientos Administrativos</h1>
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