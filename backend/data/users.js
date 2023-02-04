import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('ddssddze', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('ddssddze2', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@exmp.com',
    password: bcrypt.hashSync('ddssddze3', 10),
  },
];

export default users;
