import mongoose from "mongoose";

mongoose.connect('mongodb://pandoratest-database:27017/votants')
.then(() => console.log('Database connection successfully'))
.catch(error => console.log(error));