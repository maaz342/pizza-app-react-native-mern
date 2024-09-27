const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const pizzaRoutes = require('./routes/pizzaRoutes');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/userModels');  // Make sure the path is correct
const bcrypt = require('bcryptjs'); 
const orderRoutes=require('./routes/orderRoutes')
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const createAdmin = async () => {
    try {
        const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });

        if (!adminExists) {
            const admin = new User({
                name: 'Admin',
                email: process.env.ADMIN_EMAIL,
                password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
                isAdmin: true
            });
            await admin.save();
            console.log('Admin user created');
        } else {
            console.log('Admin user already exists');
        }
    } catch (error) {
        console.error('Error creating admin user:', error.message);
    }
};

createAdmin();

app.use('/api/orders', orderRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/pizzas', pizzaRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
