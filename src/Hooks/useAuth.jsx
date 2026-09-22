import { useContext } from 'react'
import { AuthContext } from '../Components/AuthContext'

const useAuth = () => {

    const authInfo = useContext(AuthContext)

    return authInfo
}

export default useAuth