import { Outlet } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";

const PublicLayout = () => {
    return (
        <div className="app-layout">
            <AppSidebar />
            <main className="app-content">
                <Outlet />
            </main>
        </div>
    )
}

export default PublicLayout;