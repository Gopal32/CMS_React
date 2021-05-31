import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

// Configure Mongoose to Connect to MongoDB

const mongoDbUrl = 'mongodb://localhost:27017/contentmanagement';
const PORT = process.env.PORT|| 5000;

mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(response => {
        console.log("MongoDB Connected Successfully.");
    }).catch(err => {
        console.log("Database connection failed.");
});

if (process.env.NODE === "production") {
    app.use(express.static("client/build"));
}

/* Start The Server */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});