import app from "./app";
import { createConnection }from 'typeorm';
import config from './database/index'

createConnection(config).then(()=> {
    console.log('Database connected!');

    app.listen(process.env.PORT, ()=> {
        console.log("Server up and running!")
    })
}).catch((e)=> console.log(e))