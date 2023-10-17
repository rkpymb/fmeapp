
import CheckloginContext from './CheckloginContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
const CheckloginStates = (props) => {
    const [Data, setData] = useState({});
    const [IsLogin, setIsLogin] = useState(false);
    const router = useRouter()
   
    useEffect(() => {
        // check login
        try {
            if (localStorage.getItem('userid')) {
                setIsLogin(true)
                console.log('login state')
            } else {
                setIsLogin(false)
                console.log('not login state')
            }
        } catch (error) {
            console.error(error)
            // localStorage.clear()
        }
        // check login credential end

    }, [router.query]);

    return (
        <CheckloginContext.Provider value={{ Data, IsLogin }}>
            {props.children}
        </CheckloginContext.Provider>
    )
    
}
export default CheckloginStates;