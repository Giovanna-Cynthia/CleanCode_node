const adminService = require("../services/adminService");
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

const adminController = {
    login: async (req, res) => {
        try{
            const { email, senha } = req.body;
            
            const admin = await admin.findOne({ where: {email } });

            if(!admin) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos'
                });
            };

            const isValida = await bcrypt.compare(senha, admin.senha);
            if(!isValida) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos'
                });
            };

            const token = jwt.sign({ email: admin.email, 
                name: admin.nome 
            }, process.env.SECRET, {expiresIn: '1h'});

            return res.status(200).json({
                msg: 'Login realizado!',
                token
            })
        } catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o Suporte"});
        }
    },
    create: async (req, res) => {
        try{
            console.log("passou aqui")
            const admin = await adminService.create(req.body);
            return res.status(201).json({
                msg: 'Administrador criado com sucesso',
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o administrador'
            })
        }
    },
    update: async (req, res) => {
        try{
            const admin = await adminService.update(req.params.id, req.body);
            if(!admin) {
                return res.status(400).json({
                    msg: 'Administrador nao encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Administrador atualizado com sucesso',
                admin
            });
        } catch(error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o administrador'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const admins = await adminService.getAll();
            return res.status(200).json({
                msg: 'Todos os administradores!',
                admins
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try{
            const admin = await adminService.getById(req.params.id);
            if(!admin) {
                return res.status(400).json({
                    msg: 'Administrador nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Administrador encontrado',
                admin
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    delete: async (req, res) => {
        try{
            const admin = await adminService.delete(req.params.id);
            if(!admin) {
                return res.status(400).json({
                    msg: 'Administrador nao encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Administrador deletado com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
}

module.exports = adminController;