import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Vendor/Photoslist.php`, { updatekey: process.env.MYKEY, VendorID: req.body.VendorID })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}