import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {

    const { user } = useContext(UserContext)


    return (
        <>
            <div className='px-6 py-6'>
                <h1> Login Page</h1>
                <pre>
                    {
                        JSON.stringify(user, null, 3)
                    }
                </pre>
            </div>


        </>
    )
}
