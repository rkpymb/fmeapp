import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/User/CreateAccount.php`, { updatekey: process.env.MYKEY, UserMobile: req.body.UserMobile, FullName: req.body.FullName, Email: req.body.Email })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}