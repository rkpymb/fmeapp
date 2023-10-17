import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Enq/SendPost.php`, { updatekey: process.env.MYKEY, UserMobile: req.body.UserMobile, CurrentCat: req.body.CurrentCat, CurrentText: req.body.CurrentText, CurrentCity: req.body.CurrentCity })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}