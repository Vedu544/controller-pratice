const express = require('express');
const productRoutes = require('./routes/product.js')
cost userRoutes =  require('./routes/user.js')
const cartRoutes =  require('./routes/cart.js')

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


