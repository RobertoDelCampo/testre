/*
id
name
email
password
creation_date
first_ip
createdAt
updatedAt
group
permissions
*/

import db from '../../models/index'; // Ajusta la ruta según la ubicación real de models/index.js
const Users = db.Users;

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // Obtén el parámetro de ID de la URL

  switch (method) {
    case 'GET': 
      const users = Users.findAll()
      res.status(200).json(users);
      /*
      // Manejar solicitud GET para obtener todos los usuarios o uno específico
      if (id) {
        const user = users.find((user) => user.id === parseInt(id));
        if (!user) {
          res.status(404).json({ error: 'Usuario no encontrado' });
          return;
        }
        res.status(200).json(user);
      } else {
        res.status(200).json(users);
      }*/
      break;

    case 'POST':/*
      // Manejar solicitud POST para agregar un nuevo usuario
      const { name, email } = req.body;
      const newUser = { id: users.length + 1, name, email };
      users.push(newUser);
      res.status(201).json(users);*/
      break;

    case 'PUT':/*
      // Manejar solicitud PUT para actualizar un usuario existente
      const { name: updatedName, email: updatedEmail } = req.body;
      const userIndex = users.findIndex((user) => user.id === parseInt(id));
      if (userIndex === -1) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }
      users[userIndex].name = updatedName;
      users[userIndex].email = updatedEmail;
      res.status(200).json(users[userIndex]);*/
      break;

    case 'DELETE':/*
      // Manejar solicitud DELETE para eliminar un usuario existente
      const userIndexToDelete = users.findIndex((user) => user.id === parseInt(id));
      if (userIndexToDelete === -1) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }
      const deletedUser = users.splice(userIndexToDelete, 1);
      res.status(200).json(deletedUser[0]);*/
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ error: `Método ${method} no permitido` });
      break;
  }
}