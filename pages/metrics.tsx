import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api"
import { withSSRAuth } from "../utils/withSSRAuth"


export default function Metrics() {
    const {user} = useContext(AuthContext)


    return(
        <>
        <h1>Metrics</h1>
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/me');

    return {
      props: {}
    }
}, {
    permissions: ['metrics.list'],
    roles: ['administrator'],
})