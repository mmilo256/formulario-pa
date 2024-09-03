import { useEffect, useState } from "react"
import ResultsTable from "./ResultsTable"
import { API_URL } from "../../constants/constants"

const Results = () => {

    const [resultsData, setResultsData] = useState([])

    useEffect(() => {
        const getResults = async () => {
            try {
                const res = await fetch(API_URL)
                const data = await res.json()
                setResultsData(data.data)
            } catch (error) {
                console.log("Ha ocurrido un error:", error)
            }
        }
        getResults()
    }, [])

    return (
        <div>
            <h1 className="font-bold text-2xl my-4">Respuestas enviadas</h1>
            <ResultsTable data={resultsData} />
        </div>
    )
}

export default Results