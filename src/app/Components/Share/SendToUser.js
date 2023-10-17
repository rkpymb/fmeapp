import React, { useState, useEffect, useContext } from 'react';
import styles from '@/app/page.module.css'
import Button from '@mui/material/Button';
import { UseLoginContext } from '../../context/auth/CheckLogin'
const SendToUser = ({ POSTID, VendorUserName }) => {
    const [MobileNumber, setMobileNumber] = useState('');
    const { IsLogin, Data, BackDropControll } = UseLoginContext();
    const SendToUserBtn = async () => {
        if (MobileNumber !== Data.mobile) {
            if (MobileNumber.length == 10) {
                BackDropControll(true)
                FinalSend()
            } else {
                alert('Invalid Mobile Number')
            }
        } else {
            alert('Can not send to youself')
       }

    }
    const FinalSend = async () => {
        const ContentTosend = POSTID;
        const sendUM = { Sender: Data.mobile, Receiver: MobileNumber, MsgText: ContentTosend, VendorUserName: VendorUserName }
        const data = await fetch("/api/Share/SendToUser", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedFinal) => {
                BackDropControll(false)
                if (parsedFinal.statusdata == true) {
                    console.log(parsedFinal)
                    alert('Post Sent Successfully') 
                } else {
                    alert('something went wrong')
                }

            })

    }
  return (
    <div className={styles.sendToUser}>
          <div>
              <div className={styles.sendToUserTitle}>
                  <span>Send to user</span>
              </div>
              <div>
                  <small>Enter user mobile number</small>
              </div>
          </div>
          <div className={styles.sendToUserMainBox}>
              <div className={styles.sendToUserMainBoxA}>
                  <input type="text" className={styles.sendToUserInput}
                      value={MobileNumber}
                      onInput={e => setMobileNumber(e.target.value)}
                      placeholder="10 digit mobile number" />
              </div>
              <div className={styles.sendToUserMainBoxB}>
                  <Button variant="contained" onClick={SendToUserBtn}>Send</Button>
              </div>
          </div>
    </div>
  )
}

export default SendToUser
