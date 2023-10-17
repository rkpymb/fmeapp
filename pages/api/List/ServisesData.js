import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        const ItemSlug= req.body.Itemslug
        console.log(req.body.Itemslug);
        axios.post(`${process.env.API_URL}Data/ServisesData.php`, { updatekey: process.env.MYKEY, ItemSlug })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}