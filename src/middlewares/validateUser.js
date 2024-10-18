const validateUser = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome || typeof nome !== 'string') {
        //400 -> bad request
        return res.status(400).json({msg: 'Campos inválidos'});
    }

    if (!email || typeof email !== 'string') {
        return res.status(400).json({msg: 'Campos inválidos'})
    }
    // ! -> Diferente
    // validação para que o email so passe quando tiver o @ e o .
    if (email.includes("@") && email.includes(".")) {
        return res.status(400).json({msg: 'Campo email inválido'})
    }
    //retornar o next para prosseguir na funcao
    next();
}

const validateUserId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string' ) {
        return res.status(400).json({msg: 'Parametro ID ivalido'});
    }

    next();
}

module.exports = { validateUser, validateUserId };