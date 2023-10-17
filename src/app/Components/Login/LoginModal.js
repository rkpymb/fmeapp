import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styles from '@/app/page.module.css'
import { FiLogIn } from "react-icons/fi";

import { UseLoginContext } from '@/app/context/auth/CheckLogin'
import { TbEdit } from "react-icons/tb";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ OpenType }) {
    const { BackDropControll, Mangelogin } = UseLoginContext();
    const [open, setOpen] = useState(false);
    const [MainBox, setMainBox] = useState(true);
    const [Editbtn, setEditbtn] = useState(false);
    const [TitleData, setTitleData] = useState('Enter your phone number to Login / Sign up');
    const [MobileBox, setMobileBox] = useState(true);
    const [OTPBox, setOTPBox] = useState(false);
    const [Btndisabled, setBtndisabled] = useState(true);
    const [BtndisabledOTP, setBtndisabledOTP] = useState(true);

    const [MobileNumber, setMobileNumber] = useState('');
    const [FullName, setFullName] = useState('');
    const [Email, setEmail] = useState('');
    const [Gender, setGender] = useState('');
    const [OTPText1, setOTPText1] = useState('');
    const [MobileFocus, setMobileFocus] = useState(true);
    const [UserType, setUserType] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (MobileNumber.length == 10) {
            BackDropControll(true)
            SendOTP()

        } else {
            BackDropControll(false)
            alert('invalid mobile number')
        }

    };
    const SubmitOTP = (e) => {
        e.preventDefault();
        
        if (OTPText1.length == 6) {
            BackDropControll(true)
            VerifyOTP()

        } else {
            BackDropControll(false)
            alert('invalid OTP')
        }

    };
    const HandleChangeMobile = () => {
        if (MobileNumber.length == 9) {
            setBtndisabled(false);
        } else {
            setBtndisabled(true);
        }
    };
    const HandleChangeOTPFINAL = () => {
        if (OTPText1.length == 5) {
            setBtndisabledOTP(false);
        } else {
            setBtndisabledOTP(true);
        }
    };

    const ShowMobileBoxOnly = () => {
        setEditbtn(false)
        setOTPBox(false)
        setMobileBox(true)
        setTitleData('Enter your phone number to Login / Sign up')
    };


    const SendOTP = async () => {

        const sendUM = { UserMobile: MobileNumber }
        const data = await fetch("/api/Auth/ValidateMobile", {
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
                    console.log(parsed)
                    setTimeout(function () {
                        setUserType(parsed.userType)
                        BackDropControll(false)
                        setMobileBox(false)
                        setOTPBox(true);
                        setEditbtn(true)
                        setTitleData('OTP succesfully sent on +91' + MobileNumber)
                    }, 1000); //Time before execution
                }

            })
    }
    const VerifyOTP = async () => {

        const sendUM = { UserMobile: MobileNumber, OTPTEXT: OTPText1 }
        const data = await fetch("/api/Auth/Validateotp", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedOTP) => {
                if (parsedOTP.statusdata == true) {
                    if (UserType == true) {
                        AssignToken()
                    } else {
                        setMainBox(false)
                        BackDropControll(false)
                    }
                    
                } else {
                    BackDropControll(false)
                    alert('Invalid OTP')
                }

            })
    }

    const AssignToken = async (e) => {
        const sendUM = { UserMobile: MobileNumber }
        const data = await fetch("/api/Auth/AssignToken", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedToken) => {
                console.log(parsedToken)
                BackDropControll(false)
                if (parsedToken.statusdata == true) {
                    localStorage.setItem('utoken', parsedToken.JWTTIKEN);
                    Mangelogin(true)
                    window.location.reload();
                } else {
                     Mangelogin(true)
                    alert('Invalid OTP')
                }
            })
    }
    const CreateAccount = async () => {
        const sendUM = { UserMobile: MobileNumber, FullName: FullName, Email: Email}
        const data = await fetch("/api/Auth/CreateAccount", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedSignup) => {
                BackDropControll(false)
                if (parsedSignup.statusdata == true) {
                    AssignToken()
                   
                } else {
                    alert(parsedSignup.final_return)
                }
               

            })
    }

    const handleSubmitReg = (e) => {
        e.preventDefault();

        if(Email !== '' & FullName !==''  ){
            CreateAccount();
            BackDropControll(true)
        } else {
            alert('Please fill all the required details')
        }
      
    };

    useEffect(() => {
        if (OpenType == true){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [])
    return (
        <>
            <BrowserView>
                {OpenType &&
                    <div className={styles.LoginBtn} onClick={handleClickOpen}>
                        <FiLogIn size={18} />
                        <span>Login</span>
                    </div>
                }

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    {MainBox &&
                        <div className={styles.LoginModal}>
                            <div className={styles.NavLogo}>
                                <img src="/fmelogo-dark.svg" alt="logo" />
                            </div>
                            <div style={{ minHeight: 15 }}></div>
                            <div style={{ fontWeight: 500 }}>
                                <span>{TitleData}</span>
                                {Editbtn &&
                                    <span className={styles.Editbtn}
                                        onClick={ShowMobileBoxOnly}
                                    ><TbEdit /></span>
                                }
                            </div>
                            <div style={{ minHeight: 15 }}></div>

                            {MobileBox &&

                                <div>
                                    <form onSubmit={handleSubmit} >
                                        <TextField
                                            fullWidth
                                            value={MobileNumber}
                                            onChange={HandleChangeMobile}
                                            onInput={e => setMobileNumber(e.target.value)}
                                            type="number"

                                            focused={MobileFocus}

                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                            }}

                                        />


                                        <div style={{ minHeight: 25 }}></div>
                                        <Button
                                            type="submit"
                                            variant='contained'
                                            color='primary'
                                            style={{ width: '100%' }}
                                            disabled={Btndisabled}

                                        >
                                            SEND OTP
                                        </Button>
                                    </form>


                                </div>
                            }
                            {OTPBox &&

                                <div>
                                    <form onSubmit={SubmitOTP} >
                                        <div className={styles.OTPinputs}>


                                            <TextField

                                                className={styles.OTPinputsItem}
                                                value={OTPText1}
                                                onChange={HandleChangeOTPFINAL}
                                                onInput={e => setOTPText1(e.target.value)}
                                                type="number"
                                                label='Enter OTP'

                                            />
                                            <div style={{ minHeight: 25 }}></div>
                                            <Button
                                                type="submit"
                                                variant='contained'
                                                color='primary'

                                                style={{ MinWidth: '100%' }}
                                                disabled={BtndisabledOTP}

                                            >
                                                Verify OTP
                                            </Button>



                                        </div>


                                    </form>


                                </div>
                            }


                            <div style={{ minHeight: 15 }}></div>
                            {!Editbtn &&
                                <div>
                                    <small>By continuing, you agree to our Terms of service
                                        Privacy policy</small>
                                </div>
                            }

                        </div>

                    }

                    {!MainBox &&
                        <div className={styles.LoginModal}>
                            <div className={styles.NavLogo}>
                                <img src="/fmelogo-dark.svg" alt="logo" />
                            </div>
                            <div style={{ minHeight: 15 }}></div>
                            <div style={{ fontWeight: 500 }}>
                                <span>Register Your Account</span>
                            </div>
                            <div style={{ minHeight: 10 }}></div>

                            <div>
                                <form onSubmit={handleSubmitReg} >
                                    <TextField
                                        fullWidth
                                        value={FullName}
                                        onInput={e => setFullName(e.target.value)}
                                        type="text"

                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Name</InputAdornment>,
                                        }}

                                    />
                                    <div style={{ minHeight: 10 }}></div>
                                    <TextField
                                        fullWidth
                                        value={Email}

                                        onInput={e => setEmail(e.target.value)}
                                        type="email"

                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Email</InputAdornment>,
                                        }}

                                    />
                                    <div style={{ minHeight: 10 }}></div>
                                    <TextField
                                        fullWidth
                                        value={MobileNumber}
                                        type="text"

                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Mobile</InputAdornment>,
                                        }}

                                    />


                                    <div style={{ minHeight: 25 }}></div>
                                    <Button
                                        type="submit"
                                        variant='contained'
                                        color='primary'
                                        style={{ width: '100%' }}
                                    >
                                        Create Account
                                    </Button>
                                </form>


                            </div>

                            <div style={{ minHeight: 15 }}></div>

                        </div>

                    }

                </Dialog>
            </BrowserView>
            <MobileView>
                {OpenType &&
                    <div className={styles.LoginBtn} onClick={handleClickOpen}>
                        <FiLogIn size={18} />
                        <span>Login</span>
                    </div>
                }

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    {MainBox &&
                        <div className={styles.LoginModalMobile}>
                            <div className={styles.NavLogo}>
                                <img src="/fmelogo-dark.svg" alt="logo" />
                            </div>
                            <div style={{ minHeight: 15 }}></div>
                            <div style={{width:'100%'}}>
                                <span style={{fontSize:10}}>{TitleData}</span>
                                {Editbtn &&
                                    <span className={styles.Editbtn}
                                        onClick={ShowMobileBoxOnly}
                                    ><TbEdit /></span>
                                }
                            </div>
                            <div style={{ minHeight: 15 }}></div>

                            {MobileBox &&

                                <div>
                                    <form onSubmit={handleSubmit} >
                                        <TextField
                                           
                                            value={MobileNumber}
                                            onChange={HandleChangeMobile}
                                            onInput={e => setMobileNumber(e.target.value)}
                                            type="number"

                                            focused={MobileFocus}

                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                            }}

                                        />


                                        <div style={{ minHeight: 25 }}></div>
                                        <Button
                                            type="submit"
                                            variant='contained'
                                            color='primary'
                                            
                                            disabled={Btndisabled}

                                        >
                                            SEND OTP
                                        </Button>
                                    </form>


                                </div>
                            }
                            {OTPBox &&

                                <div>
                                    <form onSubmit={SubmitOTP} >
                                        <div className={styles.OTPinputs}>


                                            <TextField

                                                className={styles.OTPinputsItem}
                                                value={OTPText1}
                                                onChange={HandleChangeOTPFINAL}
                                                onInput={e => setOTPText1(e.target.value)}
                                                type="number"
                                                label='Enter OTP'

                                            />
                                            <div style={{ minHeight: 25 }}></div>
                                            <Button
                                                type="submit"
                                                variant='contained'
                                                color='primary'

                                                style={{ MinWidth: '100%' }}
                                                disabled={BtndisabledOTP}

                                            >
                                                Verify OTP
                                            </Button>



                                        </div>


                                    </form>


                                </div>
                            }


                            <div style={{ minHeight: 15 }}></div>
                            {!Editbtn &&
                                <div>
                                    <small>By continuing, you agree to our Terms of service
                                        Privacy policy</small>
                                </div>
                            }

                        </div>

                    }

                    {!MainBox &&
                        <div className={styles.LoginModalMobile}>
                            <div className={styles.NavLogo}>
                                <img src="/fmelogo-dark.svg" alt="logo" />
                            </div>
                            <div style={{ minHeight: 15 }}></div>
                            <div style={{ fontWeight: 500 }}>
                                <span>Register Your Account</span>
                            </div>
                            <div style={{ minHeight: 10 }}></div>

                            <div>
                                <form onSubmit={handleSubmitReg} >
                                    <TextField
                                        fullWidth
                                        value={FullName}
                                        onInput={e => setFullName(e.target.value)}
                                        type="text"

                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Name</InputAdornment>,
                                        }}

                                    />
                                    <div style={{ minHeight: 10 }}></div>
                                    <TextField
                                        fullWidth
                                        value={Email}

                                        onInput={e => setEmail(e.target.value)}
                                        type="email"

                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Email</InputAdornment>,
                                        }}

                                    />
                                    <div style={{ minHeight: 10 }}></div>
                                    <TextField
                                        fullWidth
                                        value={MobileNumber}
                                        type="text"

                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Mobile</InputAdornment>,
                                        }}

                                    />


                                    <div style={{ minHeight: 25 }}></div>
                                    <Button
                                        type="submit"
                                        variant='contained'
                                        color='primary'
                                        style={{ width: '100%' }}
                                    >
                                        Create Account
                                    </Button>
                                </form>


                            </div>

                            <div style={{ minHeight: 15 }}></div>

                        </div>

                    }

                </Dialog>
            </MobileView>
        </>
    );
}
