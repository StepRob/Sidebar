import { Link, NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="text-center py-6">
            <h1>Ejemplo de error 404</h1>
            <p>Lo sentimos, ha ocurrido un error inesperado.</p>
            <p className="pb-5">
                {error.statusText || error.message}
            </p>

            <Link
                to={`/`}
                className="ml-5 mt-2 bg-blue-500 hover:bg-blue-600 hover:shadow-lg font-medium text-xs text-white py-3 px-4 rounded-md"
            >
                Regresar a Home
            </Link>

        </div>
    );
}