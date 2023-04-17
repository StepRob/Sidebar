import { useContext } from "react"
import { UserContext } from "../context/UserContext"

import { Dropdown, DropdownItem } from "@tremor/react";
import { SelectBox, SelectBoxItem } from "@tremor/react";


export const Dashboard = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <div className="px-6 py-6">


                <div>Dashboard <small>{user?.name}</small></div>

                <pre>
                    {JSON.stringify(user, null, 3)}
                </pre>

                <button
                    className="mt-2 bg-blue-500 hover:bg-blue-600 hover:shadow-lg font-medium text-xs text-white py-2 px-4 rounded-md"
                    onClick={() => setUser({ id: 123, name: "jhon Doe", email: "jhondoe@gmail.com" })}
                >
                    Establecer usuario
                </button>

                <Dropdown
                    value={undefined}
                    onValueChange={(value) => console.log('The selected value is', value)}
                    defaultValue={undefined}
                    placeholder="Marca"
                    icon={undefined}
                    maxWidth="max-w-none"
                    marginTop="mt-4"
                >
                    <DropdownItem
                        value={1}
                        text="Transparent"
                        icon={undefined}
                    />

                    <DropdownItem
                        value={2}
                        text="Outline"
                        icon={undefined}
                    />

                    <DropdownItem value={3} text={'Five'} />
                </Dropdown>

                <SelectBox
                    defaultValue={undefined}
                    value={undefined}
                    onValueChange={undefined}
                    placeholder="Selecccione"
                    icon={undefined}
                    maxWidth="max-w-none"
                    marginTop="mt-3"
                >
                    <SelectBoxItem
                        value={1}
                        text="Texto 1"
                        icon={undefined} />

                    <SelectBoxItem
                        value={2}
                        text="Texto 2"
                        icon={undefined} />
                </SelectBox>
            </div>

        </>
    )

}
