import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Inbox/GetMSgList.php`, { updatekey: process.env.MYKEY, InboxID: req.body.InboxID })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}