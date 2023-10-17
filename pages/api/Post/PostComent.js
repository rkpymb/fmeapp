import axios from 'axios';
export default function handler(req, res) {

    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Post/PostComent.php`, { updatekey: process.env.MYKEY, PostID: req.body.PostID, VendorUsername: req.body.VendorUsername, PostCmt: req.body.PostCmt, userMob: req.body.userMob })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}