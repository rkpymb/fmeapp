import axios from 'axios';
import jwt from "jsonwebtoken";
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/User/PData.php`, { updatekey: process.env.MYKEY, UserMobile: req.body.UserMobile }).then((response) => {
            console.log(response.data);
            if (response.data.statusdata == true) {
                const userData = response.data;
                const statusdata = response.data.statusdata;
                const JWTTIKEN = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: userData
                }, process.env.MYKEY);
                res.status(200).json({ statusdata: statusdata, JWTTIKEN: JWTTIKEN });
            } else {
                res.status(200).json({ statusdata: false });
            }
        });
    } else {

    }
}