import axios from 'axios';
import jwt_decode from "jwt-decode";
export default function handler(req, res) {

    const token = req.body.uToken;
    const decoded = jwt_decode(token);
    const userMOB = decoded.data.data.mobile;
    // console.log(decoded.data.data.mobile)
    // const decoded = jwt.verify(usermobile, process.env.MYKEY);
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Vendor/FollowBtn.php`, { updatekey: process.env.MYKEY, UserMobile: userMOB, UserName: req.body.UserName })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}