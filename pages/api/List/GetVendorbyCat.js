import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/List/GetVendorbyCat.php`, { updatekey: process.env.MYKEY, catId: req.body.catId })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}