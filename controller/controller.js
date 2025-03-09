import pg from 'pg';

const db =  new pg.Client({
		user: 'atechuser',
		password: 'Zj5Qeg9e231KjkM0mqY828g4y7PPL46U',
		host: 'dpg-cv2mubvnoe9s73b8emrg-a',
		port: 5432,
		database: 'todo_7f0w'
	})
	db.connect();



// const db = new pg.Client({
// 		user: 'postgres',
// 		password: 'alfreda.a',
// 		host: 'localhost',
// 		port: 5432,
// 		database: 'todo',
// 	})
// 	db.connect();


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

export const deleteUser = async (req, res)=> {
	const {id}  = req.params
	try {
		const deleteResponse = await db.query('DELETE FROM subscribe WHERE subscribe_id=$1 RETURNING *', [id])
		res.status(200).json({success: true, data: deleteResponse.rows})
		console.log(deleteResponse.rows)
	} catch(err) {
		console.log(err)
	}
}

//todo crud operation
export const postTodo = async (req, res) =>  {
	const { description } = req.body;
	try {
		const postTodoResponse = await db.query('INSERT INTO todolist(description) VALUES($1) RETURNING *',[description]);
		res.json({success: true, data: postTodoResponse.rows})
		console.log(postTodoResponse.rows)
	} catch(err) {
		console.log(err)
	}
}


export const getTodo = async (req, res) => {
	try {
		const getTodoResponse = await db.query ('SELECT * FROM todolist');
		res.json({success: true, data: getTodoResponse.rows})
		console.log(getTodoResponse)
	} catch(err) {
		console.log(err)
	}
}

export const updateTodo = async(req, res) => {
	const { description } = req.body;
	const { id } = req.params
	try {
	const updateTodoResponse = await db.query('UPDATE todolist SET description=$1 WHERE todo_id=$2', [description, id]);
	res.json({success: true, data: updateTodoResponse})
	console.log(updateTodoResponse.rows)
	} catch(err) {
		console.log(err)

	}
}

export const deleteTodo = async (request, response) =>  {
	const { id } = request.params;
	try  {
		const deleteTodoResponse = await db.query('DELETE FROM todolist WHERE todo_id=$1 RETURNING * ',[id])
		response.json({success: true, data: deleteTodoResponse.rows});
		console.log(deleteTodoResponse.rows);
	} catch (err) {
		console.log(err)
	}
}


