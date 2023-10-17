import React, { useState, useEffect, useContext } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
import styles from '@/app/page.module.css'
import { BiCommentDetail } from "react-icons/bi";
import Image from 'next/image'
import Button from '@mui/material/Button';
import { StorageURl } from '../../../../Data/config'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { UseLoginContext } from '../../context/auth/CheckLogin'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const PostComents = ({ VendorData, Postdata }) => {
  const [Retdata, setRetdata] = useState([]);
  const { IsLogin, Data, BackDropControll } = UseLoginContext();
  const [CMTText, setCMTText] = useState('');
  const [CMtDone, setCmTDone] = useState(false);
  const [CMtLoading, setCmTLoading] = useState(true);
  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
  const PostCmt = async () => {
    if (CMTText !== '') {
      BackDropControll(true)
      const sendUM = { PostID: Postdata.id, userMob: Data.mobile, VendorUsername: VendorData.username, PostCmt: CMTText }
      const data = await fetch("/api/Post/PostComent", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(sendUM)
      }).then((a) => {
        return a.json();
      })
        .then((parsedCmtPost) => {
          BackDropControll(false)
          console.log(parsedCmtPost)
          if (parsedCmtPost.statusdata == true) {
            setCmTDone(true)
            GetCMTList()
            setTimeout(function () {
              setCmTDone(false)
            }, 2000); 
          }
          

        })
    }
    
    
  }


  const GetCMTList = async () => {
    const sendUM = { PostID: Postdata.id}
    const data = await fetch("/api/Post/GetCMTList", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sendUM)
    }).then((a) => {
      return a.json();
    })
      .then((parsedCmtList) => {
        console.log(parsedCmtList)
        if (parsedCmtList.Statusdata == true) {
          setCmTLoading(false)
          setRetdata(parsedCmtList.FinalData)
        }


      })
  }


  useEffect(() => {
    window.scrollTo(0, 0);
    GetCMTList()


  }, [])


  return (
    <>
    <BrowserView>
        <div className={styles.PostComents} >
          <div className={styles.PostComentsHeader}>
            <div className={styles.PostComentsHeaderIcon}><BiCommentDetail /></div>
            <div className={styles.PostComentsHeaderText}>Post Comments</div>
          </div>
          <div className={styles.PostComentsContent}>
            <div className={styles.PostComentsListBox}>
              {!CMtLoading &&
                <div>

                  {Retdata.map((item) => {
                    return <div className={styles.PostComentsListItem}>
                      <div className={styles.PostComentsListItemUser}>
                        <div className={styles.PostComentsListItemUserA}>
                          <Image
                            placeholder='blur'
                            blurDataURL={blurredImageData}
                            src={`${StorageURl}/panel/userdp/${item.dp}`}
                            alt="dp"
                            width={30}
                            height={30}
                            quality={25}
                            className={styles.DpCercle}
                          />
                        </div>
                        <div className={styles.PostComentsListItemUserB}>
                          <div className={styles.PostComentsListItemUserBName}>
                            <span>{item.Fullname}</span>
                          </div>
                          <div className={styles.CmtBox}>
                            <span>{item.PostCmt}</span>
                          </div>
                          <div className={styles.CmtDateBox}>
                            <span>{item.date} , {item.time}</span>
                          </div>
                        </div>
                      </div>

                    </div>



                  }

                  )}
                </div>

              }



            </div>
          </div>
          <div className={styles.WritecmtBox}>
            <div className={styles.WritecmtBoxInput}>
              <input type="text" className={styles.Inputcmt}
                value={CMTText}
                onInput={e => setCMTText(e.target.value)}
                placeholder='White your Coment' />
            </div>
            <div className={styles.WritecmtBtn}>
              <Button variant="contained" onClick={PostCmt} size="small" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </div>
          {CMtDone &&
            <div className={styles.Cmtalrt}>
              <Alert severity="success">Comment Posted Successfully</Alert>
            </div>
          }

        </div>
    </BrowserView>
      <MobileView>
        
        <div className={styles.PostComents} >
         
          <div className={styles.PostComentsContentNew}>
            <div className={styles.PostComentsListBoxNew}>
              {!CMtLoading &&
                <div>

                  {Retdata.map((item) => {
                    return <div className={styles.PostComentsListItem}>
                      <div className={styles.PostComentsListItemUser}>
                        <div className={styles.PostComentsListItemUserA}>
                          <Image
                            placeholder='blur'
                            blurDataURL={blurredImageData}
                            src={`${StorageURl}/panel/userdp/${item.dp}`}
                            alt="dp"
                            width={30}
                            height={30}
                            quality={25}
                            className={styles.DpCercle}
                          />
                        </div>
                        <div className={styles.PostComentsListItemUserB}>
                          <div className={styles.PostComentsListItemUserBName}>
                            <span>{item.Fullname}</span>
                          </div>
                          <div className={styles.CmtBox}>
                            <span>{item.PostCmt}</span>
                          </div>
                          <div className={styles.CmtDateBox}>
                            <span>{item.date} , {item.time}</span>
                          </div>
                        </div>
                      </div>

                    </div>



                  }

                  )}
                </div>

              }



            </div>
          </div>
         

        </div>
        <div className={styles.CMTBOXFooter}>
          <div className={styles.WritecmtBox}>
            <div className={styles.WritecmtBoxInputNEW}>
              <input type="text" className={styles.InputcmtNEW}
                value={CMTText}
                onInput={e => setCMTText(e.target.value)}
                placeholder='White your Coment' />
            </div>
            <div className={styles.WritecmtBtn}>
              <Button variant="contained" onClick={PostCmt} size="small" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </div>
          {CMtDone &&
            <div className={styles.Cmtalrt}>
              <Alert severity="success">Comment Posted Successfully</Alert>
            </div>
          }
        </div>
        
      </MobileView>
    </>
  )
}

export default PostComents
