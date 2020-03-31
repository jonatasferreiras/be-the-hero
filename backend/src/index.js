const express = require('express');
const cors =  require('cors');
const routes = require('./routes');

const app =  express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 *  Rota / Recurso
 */

 /**
  *  Métodos HTTP:
  * 
  *  GET: Buscar uma informção do back-end
  *  POST: Criar uma informação no back-end
  *  PUT: Alterar uma informação no back-end
  *  DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parêmetros:
   * 
   * Query: Parâmetros nomeaados enviados na rota após "?" (Filtros, paginação)
   * Route Parms: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Miccrosoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * QUery Builder: table('users').select('*').where()
     */



