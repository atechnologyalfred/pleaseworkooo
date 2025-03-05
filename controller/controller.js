import pg from 'pg';
// import 'dotenv/config';
// const { DB_USER, DB_PASSWORD,  DB_HOST,  DB_PORT, DB_DATABASE } = process.env;

	const db =  new pg.Client({
		user: 'atechuser',
		password: 'Zj5Qeg9e231KjkM0mqY828g4y7PPL46U',
		host: 'dpg-cv2mubvnoe9s73b8emrg-a',
		port: 5432,
		database: 'todo_7f0w'
	})
	db.connect();

// const db = new pg.Client({
// 	user: DB_USER,
// 	password: DB_PASSWORD,
// 	host: DB_HOST,
// 	port: DB_PORT,
// 	database: DB_DATABASE,
// })
// db.connect();

// const db = new pg.Client({
// 		user: 'postgres',
// 		password: 'alfreda.a',
// 		host: 'localhost',
// 		port: 5432,
// 		database: 'todo',
// 	})


export const getUser = async (req, res) => {

	try {
		const getResponse = await db.query('SELECT * FROM subscribe ORDER BY first_name ASC')
			res.json({success: true, data: getResponse.rows})
			console.log(getResponse.rows)
	} catch (err) {
		console.error(err)
		
	}
}

export const postUser = async (req, res) => {
	const { first_name, last_name, email } = req.body
	try {
		const postResponse = await db.query('INSERT INTO subscribe(first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *' , [first_name, last_name, email]);
		res.json({success: true, data:postResponse.rows})
		console.log(postResponse.rows)
	} catch(err) {
		console.log(err)
	}
}
