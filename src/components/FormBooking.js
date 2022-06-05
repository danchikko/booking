import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bookActions } from '../store/bookSlice'

const FormBooking = () => {
	const [img, setImg] = useState()
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [avtour, setAvtour] = useState('')
    const dispatch = useDispatch()

	const imageChangeHandler = (e) => {
		const [file] = e.target.files
		setImg(URL.createObjectURL(file))
	}

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(bookActions.createBook(name, img, text, avtour))
    }
    console.log(img)
	return (
		<div>
			<h3>Add Book</h3>
			<form onSubmit={submitHandler}>
				<input type='file' onChange={imageChangeHandler}/>
				<img src={img} alt="" />
                <label>Name Book</label>
                <input type="title" onChange={(e) => setName(e.target.value) } />
                <label>Text</label>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <label>avtour</label>
                <input type="text" onChange={(e) => setAvtour(e.target.value)} />
			</form>
		</div>
	)
}

export default FormBooking
