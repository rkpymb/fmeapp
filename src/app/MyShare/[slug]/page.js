"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../Data/config'
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { FiArrowLeft } from "react-icons/fi";
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoSend } from "react-icons/io";
import SendIcon from '@mui/icons-material/Send';

const page = ({ params }) => {
  const { slug } = params;
  const { IsLogin, Data } = UseLoginContext();

  const [MsgText, setMsgText] = useState('');
  const [Retdata, setRetdata] = useState([]);
  const [InboxID, setInboxID] = useState(0); 
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';

  const GetData = async () => {
    const userMob = Data.mobile;
    console.log(userMob)

    const sendUM = { userMob: userMob, VendorUserName: slug }
    const data = await fetch("/api/Inbox/CheckMessageID", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sendUM)
    }).then((a) => {
      return a.json();
    })
      .then((parsed) => {
        console.log(parsed);
        if (parsed.statusdata == true) {
          setInboxID(parsed.RetData)
          GetMSgList(parsed.RetData)

        }

      })
  }

  // Get msg list

  const GetMSgList = async (e) => {
    const sendUM = { InboxID: e }
    const data = await fetch("/api/Inbox/GetMSgList", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sendUM)
    }).then((a) => {
      return a.json();
    })
      .then((parsedList) => {
        setRetdata(parsedList.RetData)

      })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true)

    GetData()


  }, [])

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (!isLoading && scrollTop + clientHeight >= scrollHeight - 20) {
      GetData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (MsgText !== '') {
      SendMsg()
    }else{
      alert('Can not send Empty message')
    }
    


  };
  const HandleChangeMobile = () => {

  };
  const SendMsg = async () => {

    const sendUM = { InboxID: InboxID, MsgText: MsgText }
    const data = await fetch("/api/Inbox/Send", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sendUM)
    }).then((a) => {
      return a.json();
    })
      .then((parsed) => {
        if (parsed.statusdata == true) {
          setMsgText('')
          GetData()
        } else {
          alert('Something went wrong')
        }
       

      })
  }
  return (
    <>
      <div style={{ minHeight: '20px' }}></div>
      <div className={styles.MsgBox}>

        <div className={styles.MsgBoxHeader}>
          <div className={styles.MsgBoxHeaderA}>
            <FiArrowLeft />
          </div>
          <div className={styles.MsgBoxHeaderB}>
            <span>{slug}</span>
          </div>
        </div>
        <div className={styles.MsgBoxList}>
          {Retdata.map((item) => {
            return <div className={styles.MsgListBoxItem}>

              {(item.TypeMsg == 0)
                ?
                <div className={styles.MsgListBoxItemA}>
                  <div className={styles.MsgListBoxItemAItem}>
                    <span>{item.TextMsg}</span>
                  </div>
                </div>
                : <div className={styles.MsgListBoxItemB}>
                    <div className={styles.MsgListBoxItemBItem}>
                    <span>{item.TextMsg}</span>
                  </div>
                </div>
              }
              
             

            </div>

          }

          )}
         
          

        </div>
        <div className={styles.MsgBoxSendBox}>
          <div className={styles.SendFormBox}>
            <div className={styles.SendFormBoxDp}>
              <Image
                placeholder='blur'
                blurDataURL={blurredImageData}
                src={`${StorageURl}/panel/userdp/${Data.dp}`}
                alt="dp"
                width={40}
                height={40}
                quality={25}
                className={styles.DpCercle}
              />
            </div>
            <div className={styles.SendFormBoxB}>
              <form onSubmit={handleSubmit} >
                <div className={styles.SendForm}>
                  <div className={styles.SendFormInput}>
                    <TextField
                      fullWidth
                      value={MsgText}
                      onChange={HandleChangeMobile}
                      onInput={e => setMsgText(e.target.value)}
                      type="text"

                    />
                  </div>
                  <div className={styles.SendFormInputBtn}>
                    <Button
                      type="submit"
                      color='primary'
                      variant="contained" endIcon={<SendIcon />}>
                      Send
                    </Button>
                  </div>
                </div>
              </form>
           </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: '10px' }}></div>
    </>
  )
}

export default page
