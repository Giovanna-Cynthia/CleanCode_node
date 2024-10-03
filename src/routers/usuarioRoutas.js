const { Router } = require("express");

const router = Router();

router.post('/'); // funcao criar

// funcao de editar
router.put('/:id'); // parametro id

//funcao de deletar
router.delete('/:id', ); // parametro id

//funcao buscar unico
router.get('/:id', ); // parametro id

router.get('/', ); // funcao de buscar todos

module.exports = router;   