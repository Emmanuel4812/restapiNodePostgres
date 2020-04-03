const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controllers');

router.get('/users', getUsers, getUserById );
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;