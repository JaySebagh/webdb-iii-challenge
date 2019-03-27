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
        const cohorts = await db("cohorts");
        res.status(200).json(cohorts);
    } catch (error) {
        res.status(500).json({ message: 'error getting cohort' })
    }
})

module.exports = router;