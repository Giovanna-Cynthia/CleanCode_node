const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();
const {  validateUser, validateUserId } = require("../middlewares/validateUser");

router.post('/', validateUser, userController.create); // funcao criar

// funcao de editar
router.put('/:id', validateUser, validateUserId, userController.update); // parametro id

//funcao de deletar
router.delete('/:id', validateUserId, userController.delete ); // parametro id

//funcao buscar unico
router.get('/:id', validateUserId, userController.getOne); // parametro id

router.get('/', userController.getAll ); // funcao de buscar todos

module.exports = router;   