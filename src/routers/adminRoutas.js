const { Router } = require("express");
const adminController = require("../controllers/adminController");
const router = Router();
const {  validateAdmin, validateAdminId } = require("../middlewares/validateAdmin");

router.post('/', validateAdmin, adminController.create); // funcao criar

// funcao de editar
router.put('/:id', validateAdmin, validateAdminId, adminController.update); // parametro id

router.put("/:id", validateAdmin, validateAdminId, adminController.esqueciSenha);

//funcao de deletar
router.delete('/:id', validateAdminId, adminController.delete ); // parametro id

//funcao buscar unico
router.get('/:id', validateAdminId, adminController.getOne); // parametro id

router.get('/', adminController.getAll ); // funcao de buscar todos

module.exports = router;