import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User', 
        email: 'admin@example.com', 
        password: bcrypt.hashSync('123456', 10), 
        isAdmin: true
    }, 
    {
        name: 'Yasmiin', 
        email: 'yasmiin@example.com', 
        password: bcrypt.hashSync('123456', 10), 
        
    }, 
    {
        name: 'Ubax', 
        email: 'ubax@example.com', 
        password: bcrypt.hashSync('123456', 10),
        
    }, 
]

export default users