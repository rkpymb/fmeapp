
'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

const ThemeContext = createContext({})

export const LoginProvider = ({ children }) => {
    const router = useRouter()
    const [BackDropData, setBackDropData] = useState(false);
    const [FirstLoader, setFirstLoader] = useState(true);
    const [Data, setData] = useState({});
    const [IsLogin, setIsLogin] = useState(false);
    useEffect(() => {
      
        // check login
        try {
            if (localStorage.getItem('utoken')) {
                setIsLogin(true)
                const uToken = localStorage.getItem('utoken')
              
                GetData(uToken)

            } else {
                setIsLogin(false)
                // console.log('not login state')
            }
        } catch (error) {
            console.error(error)
            // localStorage.clear()
        }
        

    },[]);


    const GetData = async (e) => {
       
        const sendUM = { uToken:e }
        const data = await fetch("/api/User/ProfileData", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                // console.log(parsed)
                if (parsed.statusdata == true) {
                   
                    setData(parsed.data)


                } else {
                    // setIsLogin(false)
                }

            })
    }

    const BackDropControll = async (e) => {
        setBackDropData(e)
    }
    const Mangelogin = async (e) => {
        setIsLogin(e)
      
    }
    const LogoutBtn = async () => {
        let text = "Do you really want to log out?";
        if (confirm(text) == true) {
            setIsLogin(false)
            localStorage.clear()
            router.push('/')
        } 
       

    }
 

    return (
        <ThemeContext.Provider value={{ Data, IsLogin, BackDropControll, BackDropData, Mangelogin, LogoutBtn, FirstLoader }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const UseLoginContext = () => useContext(ThemeContext);