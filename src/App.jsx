import { Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Header from "./components/Header"

import Sidebar from "./components/Sidebar"
import FormSection1 from "./components/FormSection1"
import FormSection2 from "./components/FormSection2"
import FormSection3 from "./components/FormSection3"
import FormSection4 from "./components/FormSection4"
import FormSection5 from "./components/FormSection5"
import FormSection6 from "./components/FormSection6"
import FormSection7 from "./components/FormSection7"

const App = () => {
  return (
    <div className="min-h-svh">
      <Header />
      <div className="flex">
        <Sidebar />
        <Form>
          <Routes>
            <Route index element={<FormSection1 />} />
            <Route path="marco-normativo" element={<FormSection2 />} />
            <Route path="usuarios" element={<FormSection3 />} />
            <Route path="soporte-electronico" element={<FormSection4 />} />
            <Route path="identidad-digital" element={<FormSection5 />} />
            <Route path="notificaciones" element={<FormSection6 />} />
            <Route path="datos-documentos" element={<FormSection7 />} />
          </Routes>
        </Form>
      </div>
    </div>
  )
}

export default App