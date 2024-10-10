const User = require("../models/user");
const { trace } = require("../routers/router");

//app.js -> router.js -> userRouter.js -> userController.js
// -> userservice.js -> model -> database
const userService = {
    create: async (user) => {
        try{
            return await User.create(user);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar usuario');
        }
    },
    update: async (id, userToUpdate) => {
        try{
            const user = await User.findByPk(id);
            if(!user) { // user for vazio
                return null;
            }
            await user.update(userToUpdate); //update atualizar
            await user.save(); // so para ter certeza que esta faltando, mas é opcioanl
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar usuario');
        }
    },
    getById: async (id) => {
        try{
            const user = await User.findByPk(id);
            if(!user) {
                return null;
            }
            return user;
        } catch(error) {
            throw new Error('Ocorreu um erro ao buscar um unico usuario');
        }
    },
    getAll: async () => {
        try{
            return await User.findAll();
        } catch(error) {
            throw new Error ('Ocorreu um erro ao buscar todos os usuarios');
        }
    },
    delete: async(id) => {
        try {
            const user = await User.findByPk(id);
            if(!user) {
                return null;
            }
            await user.destroy();
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o usuario');
        }
    }
 } 

module.exports = userService;