import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { bookActions } from '../store/bookSlice'
import classes from './FormBooking.module.css'

const FormBooking = () => {
	const [img, setImg] = useState()
	const [name, setName] = useState('')
	const [author, setAuthor] = useState('')
	const [categories, setCategories] = useState('')
    const [text, setText] = useState()
	const dispatch = useDispatch()

	const imageChangeHandler = (e) => {
		const [file] = e.target.files
		setImg(URL.createObjectURL(file))
	}

	const categoriesHandler = (e) => {
		setCategories(e.target.value)
	}

	const addBookHandler = () => {
		const book = {
			id: v4(),
			img,
			completed: false,
			name,
			text,
			author,
			categories,
		}
		dispatch(bookActions.createBook(book))
	}

	return (
		<div className={classes.container}>
			<h3 className={classes.h3}>Add Book</h3>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className={classes.image}>
					<input
						className={classes.file}
						type='file'
						onChange={imageChangeHandler}
					/>
					<img className={classes.img} src={img} alt='' />
				</div>
				<div className={classes.flex}>
					<div className={classes.nameBooks}>
						<label>Имя книги</label>
						<input
							type='title'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className={classes.nameUser}>
						<label>Введите ваше имя</label>
						<input
							type='text'
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className={classes.categories}>
						<label>Выберите категории</label>
						<select onChange={categoriesHandler}>
							<option value='self-development'>
								саморазвитие
							</option>
							<option value='fairy tales'>сказки</option>
							<option value='novel'>роман</option>
							<option value='history'>истории</option>
							<option value='poetry'>поэзия</option>
						</select>
					</div>
				</div>
				<div className={classes.text}>
					<label>Текст</label>
					<input type="text" onChange={(e) => setText(e.target.value)} />
				</div>
				<button onClick={() => addBookHandler()}>Submit</button>
			</form>
		</div>
	)
}

export default FormBooking
