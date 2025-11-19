import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { useAuth } from "../hooks/useAuth";

const isLoading = false
// const session = undefined

export function Routes() {
    const { session } = useAuth()

    function Route() {
        switch (session?.userWithoutPassword.role) {
            case "employee":
                return <EmployeeRoutes />
            case "manager":
                return <ManagerRoutes />
            default:
                return <AuthRoutes />
        }
    }

    // if (isLoading) {
    //     return <Loading />
    // }

    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    )
}