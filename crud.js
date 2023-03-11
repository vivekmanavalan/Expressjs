const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    database: 'employee',
    port: 5432,
})
const getData = (req,res) => {
    pool.query('select * from employee order by id asc', (err, result) => {
        if(err){
            throw err;
        }
        res.status(200).json(result.rows);
    });
}

const storeData = (req, res) => {
    console.log('req', req.body);
    const {name, description} = req.body;
    pool.query(`insert into employee(name, description) values('${name}', '${description}')`, (err, result) => {
        if(err){
            throw err;
        }
        console.log(result);
        res.status(200).send('User added successfully');
    })
}

const deleteData = (req, res) => {
    console.log('req', req.params.id);
    const {id} = req.params;
    pool.query(`delete from employee where id = ${id}`, (err, result) => {
        if(err){
            throw err;
        }
        res.status(200).send('Deleted user successfully');
    })
}

module.exports = {
    getData,
    storeData,
    deleteData
}