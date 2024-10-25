const { Router } = require("express");
const userRoutes = require("./usuarioRoutas");
const adminRoutes = require("./adminRoutas");
const authenticateToken = require('../middlewares/authenticateToken');
const adminController = require("../controllers/adminController");

const router = Router();

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);

router.post('/login', (req, res) => {
    adminController.login(req, res)
});

module.exports = router;