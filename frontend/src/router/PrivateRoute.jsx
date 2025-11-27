import { useContext } from "react"
//import { AuthContext } from "../auth/Context"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
    const { token } = useContext (AuthContext)

    if(!token) {
        return <Navigate to= '/login' />

    }

    return token ? <Outlet/>  : <Navigate to= "login" />
}
export default PrivateRoute;