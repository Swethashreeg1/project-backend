const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://swethashree:swethashree@travel.k9l4w.mongodb.net/?retryWrites=true&w=majority&appName=travel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.error("Database connection error:", error);
});

app.use("/user", userRoutes);

// Uncomment and add your additional routes as needed
// app.use("/admin", adminRoutes);
// app.use("/products", productRoutes);
// app.use("/order", orderRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
