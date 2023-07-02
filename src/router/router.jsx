import { useRoutes } from "react-router-dom"
import { appRoutes } from "./routes"


export const AppRouter = () => {
    const router = useRoutes(appRoutes)
    return router
}
