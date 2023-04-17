import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiHome, FiFileMinus, FiChevronDown, FiCircle, FiSettings, FiUser } from "react-icons/fi";
import { useEffect } from 'react';


export const SidebarLinks = () => {

    const links = [
        {
            name: "Dashboard",
            icon: <FiHome className="text-slate-500" />,
            path: "/dashboard",
        },

        {
            name: "Ventas",
            icon: <FiFileMinus className="text-slate-500" />,
            arrow: <FiChevronDown />,
            submenu: true,
            sublink: [
                {
                    name: "Nueva venta",
                    link: "ventas/nueva-venta",
                    icon: <FiCircle className="h-2" />
                },
                {
                    name: "Listado de ventas",
                    link: "ventas/listado-ventas",
                    icon: <FiCircle className="h-2" />
                },
                {
                    name: "Cotizaciones",
                    link: "ventas/cotizaciones",
                    icon: <FiCircle className="h-2" />
                },
            ],
        },
        {
            name: "Configuraciones",
            submenu: true,
            icon: <FiSettings className="text-slate-500" />,
            arrow: <FiChevronDown />,
            sublink: [
                {
                    name: "Administrar cuenta",
                    link: "configuraciones/administrar-cuenta",
                    icon: <FiCircle className="h-2" />
                },
                {
                    name: "Sincronizar",
                    link: "configuraciones/sincronizar",
                    icon: <FiCircle className="h-2" />
                },
            ],
        },
        {
            name: "Login",
            submenu: true,
            icon: <FiUser className="text-slate-500" />,
            arrow: <FiChevronDown />,
            sublink: [
                {
                    name: "Sign up",
                    link: "Login/users"
                },
            ],
        },
    ];

    const [sidebar, setSidebar] = useState("");

    const [selected, setSelected] = useState(
        localStorage.getItem("selectedLink") || ""
    );

    useEffect(() => {
        localStorage.setItem("selectedLink", selected);
    }, [selected]);

    return (
        <>
            {links.map((links, index) => {
                return (
                    <div key={index} className={`rounded-lg text-bluegray-600 ${selected === links.name ? "active-class" : ""}`}>
                        <li >
                            <Link
                                onClick={() => {
                                    setSidebar(sidebar !== links.name ? links.name : "");
                                    setSelected(links.name);
                                }}
                                to={links.path}
                                className={`${selected === links.name ? "active" : ""} text-sm font-quicksand font-medium flex flex-row items-center justify-between p-3 hover:text-sky-500 rounded-lg hover:bg-white `}
                            >
                                <div className="flex flex-row items-center">
                                    <span className="ml-2"> {links.icon}</span>
                                    <span className="overflow-hidden mx-2 text-sm font-normal">
                                        {links.name}
                                    </span>
                                </div>

                                <span className={`ml-2 transform rotate-${sidebar === links.name ? 'transform rotate-180' : 'transform rotate-0'}`}> {links.arrow}</span>

                            </Link>

                            {links.submenu && (
                                <ul
                                    className={`${sidebar === links.name ? "block" : "hidden"
                                        } space-y-2 flex-col items-start pl-1 pb-2 text-sm rounded-lg dark:text-white dark:hover:bg-gray-700`}
                                >
                                    {links.sublink.map((sublink, index) => {
                                        return (
                                            <li key={index} className='ml-2'>
                                                <NavLink
                                                    to={sublink.link}
                                                    className="text-slate-500 hover:text-sky-500 text-sm flex items-center mb-1 font-normal rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700"
                                                >
                                                    <span className="ml-2"> {sublink.icon}</span>
                                                    <span className=" mx-2 ">{sublink.name}</span>
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    </div>
                );
            })}
        </>
    );
};
