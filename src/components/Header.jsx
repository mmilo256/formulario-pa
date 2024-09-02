import Container from "./Container"
import SecondaryButton from "./SecondaryButton"

const Header = () => {

    return (
        <header className="bg-blue-700 text-white py-4">
            <Container>
                <div className="flex items-left justify-between w-full">
                    <SecondaryButton type="link" href="/">Volver a inicio</SecondaryButton>
                </div>
            </Container>
        </header>
    )
}

export default Header