
import { Outlet } from "react-router-dom";
import { UserProvider } from "../context/UserProvider";
import { SidebarLinks } from "./SidebarLinks";
import { useNavigate } from 'react-router-dom';
import '@tremor/react/dist/esm/tremor.css';
import { Navbar } from "../Pages/Navbar";


export default function Root() {


    return (
        <UserProvider>
            <div className="flex h-screen">

                <aside id="sidebar" className="w-64 py-4 px-4 bg-slate-50">
                    <h1 className="px-4 py-2 font-medium">Nombre de empresa</h1>
                    <nav>
                        <ul className="space-y-2">
                            <SidebarLinks />
                        </ul>
                    </nav>
                </aside>

                <div id="detail" className="bg-white w-screen">
                    <div className="bg-slate-300">
                        <Navbar />
                    </div>
                    <Outlet />
                </div>

            </div>
        </UserProvider>
    );
}
