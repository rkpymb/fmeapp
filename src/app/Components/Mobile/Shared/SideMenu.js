"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import styles from "@/app/page.module.css"
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";
import { BiHomeAlt2, BiHappy, BiPlug, BiSelectMultiple, BiPhoneCall } from "react-icons/bi";
import { useState } from "react";
import { FiLogIn, FiClipboard, FiSmile, FiPhone } from "react-icons/fi";
import { CgCloseR, CgMenu } from "react-icons/cg";
export default function TemporaryDrawer() {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchor, setanchor] = useState('left');
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (openMenu == true) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <React.Fragment>
      {!openMenu &&

        <CgMenu
        size={30}
          name="menu-outline"
          className={styles.Menubtn}
          onClick={toggleDrawer(anchor, true)}
        />
      }
      {openMenu &&

        <CgCloseR

        size={30}
          name="close-outline"
          className={styles.Menubtn}
          onClick={toggleDrawer(anchor, true)}
        />
      }
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >

          <Divider />
          <div className={styles.mobilemenu}>
            <Link className={styles.mobilemenuItem} href="https://vendor.flairmyevent.com/pages/login/"
              onClick={() => setOpenMenu(false)}
            >
              <div className={styles.iconmobmenmu}>
                <FiLogIn />
              </div>
              <div className={styles.iconmobmenmuText}>
                Vendor Login
              </div>


            </Link>
            <Link className={styles.mobilemenuItem} href="/about"
              onClick={() => setOpenMenu(false)}
            >
              <div className={styles.iconmobmenmu}>
                <FiSmile />
              </div>
              <div className={styles.iconmobmenmuText}>
                About
              </div>


            </Link>
            <Link className={styles.mobilemenuItem} href="/contact"
              onClick={() => setOpenMenu(false)}
            >
              <div className={styles.iconmobmenmu}>
                <FiPhone />
              </div>
              <div className={styles.iconmobmenmuText}>
                Contact us
              </div>


            </Link>
            <Link className={styles.mobilemenuItem} href="/Privacy Policy"
              onClick={() => setOpenMenu(false)}
            >
              <div className={styles.iconmobmenmu}>
                <FiClipboard />
              </div>
              <div className={styles.iconmobmenmuText}>
                PrivacyPolicy
              </div>


            </Link>
            <Link className={styles.mobilemenuItem} href="/TermsConditions"
              onClick={() => setOpenMenu(false)}
            >
              <div className={styles.iconmobmenmu}>
                <FiClipboard />
              </div>
              <div className={styles.iconmobmenmuText}>
                Terms & Conditions
              </div>


            </Link>

            <div className={styles.copyrightTextMobile}>
              <span>© 2022 - {new Date().getFullYear()} flairmyevent.com - All rights reserved.</span>
            </div>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
