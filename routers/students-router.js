const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.db3',
    },
};

const db = knex(knexConfig)

router.get('/', async (req, res) => {
    try {
        const students = await db("students");
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'error getting student' })
    }
})

module.exports = router;