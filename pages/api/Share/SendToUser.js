import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/MyShare/Create.php`, { updatekey: process.env.MYKEY, Sender: req.body.Sender, Receiver: req.body.Receiver, MsgText: req.body.MsgText, VendorUserName: req.body.VendorUserName })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}