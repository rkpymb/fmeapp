import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Inbox/CheckMessageID.php`, { updatekey: process.env.MYKEY, VendorUserName: req.body.VendorUserName, userMob: req.body.userMob })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}