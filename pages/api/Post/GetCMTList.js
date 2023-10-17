import axios from 'axios';
export default function handler(req, res) {

    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Post/GetCMTList.php`, { updatekey: process.env.MYKEY, PostID: req.body.PostID })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}