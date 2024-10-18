const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    /*
    Bearer token
    Bearer hajshhd5ds6542d65sd46ds456sddsf
    ['Bearer', 'rtfghxbvc6541rthfgchfd5'], 0, 1
    */

    if(!token) {
        return res.status(401).json({
            msg: 'Acesso negado'
        });
    }

    //Headers, Plaload, SECRET
    jwt.verify(token, process.env.SECRET, (err, admin) => {
        if(err) {
            return res.status(403).json({
                msg: 'Acesso negado'
            })
        }

        //Armazanar usuario na requisocao
        req.admin = admin;

        next();
    })
}
module.exports = authenticateToken;