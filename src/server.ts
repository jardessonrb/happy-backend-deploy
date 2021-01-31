import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
/*
Query Params: localhost:3333/users?search=jardesson&idade20
Route Params: localhost:3333/users/1 (identificar um recurso)
Body        : localhost:3333/users/create (Vão todos os dados do usuário)
*/

// app.post('/users/:id', (request, response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);
//     return response.json({message: "Hello Word..."});
// });


app.listen(process.env.PORT || 3333);

//Driver nativo, Query builder, ORM