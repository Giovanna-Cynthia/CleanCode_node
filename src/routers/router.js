const { Router } = require("express");
const userRoutes = require("./usuarioRoutas");

const router = Router();

router.use('/user', userRoutes);

module.exports = router;