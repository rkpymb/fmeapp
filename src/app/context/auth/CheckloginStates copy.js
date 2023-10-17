import CheckloginContext from './CheckloginContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const CheckloginStates = (props) => {
    const [Data, setData] = useState({});
    const [IsLogin, setIsLogin] = useState(false);
    const router = useRouter()
   
    useEffect(() => {
        // check login
        try {
            if (localStorage.getItem('userid')) {
                setIsLogin(true)
                const usermobile = localStorage.getItem('userid');
                const sendUser = { usermobile }

                const data = fetch("/api/UserProfileData", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUser)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        if (parsedUser.statusdata == true) {
                            setData(parsedUser.data)
                            setIsLogin(true)
                        } else {
                            setIsLogin(false)
                        }

                    })
            } else {
                setIsLogin(false)
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