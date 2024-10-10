const userService = require("../services/userService")

const userController = {
    create: async (req, res) => {
        try{
            console.log("passou aqui")
            const user = await userService.create(req.body);
            return res.status(201).json({
                msg: 'Usuario criado com sucesso',
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o usuario'
            })
        }
    },
    update: async (req, res) => {
        try{
            const user = await userService.update(req.params.id, req.body);
            if(!user) {
                return res.status(400).json({
                    msg: 'Usuario nao encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Usuario atualizado com sucesso',
                user
            });
        } catch(error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o usuario'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const users = await userService.getAll();
            return res.status(200).json({
                msg: 'Todos os usuarios!',
                users
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try{
            const user = await userService.getById(req.params.id);
            if(!user) {
                return res.status(400).json({
                    msg: 'Usuario nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Usuario encontrado',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    delete: async (req, res) => {
        try{
            const user = await userService.delete(req.params.id);
            if(!user) {
                return res.status(400).json({
                    msg: 'Usuario nao encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Usuario deletado com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
}

module.exports = userController;