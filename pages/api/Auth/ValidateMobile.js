import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/User/Validatemobile.php`, { updatekey: process.env.MYKEY, UserMobile: req.body.UserMobile })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}