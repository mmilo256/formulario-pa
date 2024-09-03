import { useEffect, useState } from "react"
import ResultsTable from "./ResultsTable"
import { API_URL } from "../../constants/constants"

const Results = () => {

    const [resultsData, setResultsData] = useState([])
    const [showTable, setShowTable] = useState(false)
    const [reloadTable, setReloadTable] = useState(false)

    useEffect(() => {
        const getResults = async () => {
            try {
                const res = await fetch(API_URL)
                const data = await res.json()
                setResultsData(data.data)
            } catch (error) {
                console.log("Ha ocurrido un error:", error)
            } finally {
                setShowTable(true)
            }
        }
        getResults()
    }, [reloadTable])

    return (
        <div>
            <h1 className="font-bold text-2xl my-4">Respuestas enviadas</h1>
            {showTable && <ResultsTable data={resultsData} reloadTable={reloadTable} setReloadTable={setReloadTable} />}
        </div>
    )
}

export default Results