import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useState } from 'react'
import { Link } from "react-router-dom";

//const ERROR_MESSAGE_


export function NewProductForm({api}) {
	const navigate = useNavigate()
	//const addNewproducrClickHandler = () => {
	//console.log('Нажмите добавить новый продукт')
	//}
	const [isOpen, setIsOpen] = useState(false)

	const clickHandler = () => {
		setIsOpen(true)
	}


	const submitHandler = (values) => api.addProductRequest(values)
		.then((res) => {
			if (res.status >= 200 && res.status < 300) {
				return res.json()
			}
			throw Error('Error')
		})
		.then((product) => {
			console.log({ product })
			navigate('/')
			closeHandler()
		})
		.catch(alert)

	return (
		<>
		<div>
			<h1>Добавить новый товар</h1>
			<Formik
				initialValues={{
					available: true,
					pictures: '',
					name: '',
					price: '',
					discount: '',
					stock: '',
					wight: '',
					description: '',
				}}
				validationSchema={Yup.object({
					pictures: Yup.string()
						.url('неверный формат ссылки'),
					name: Yup.string()
						.required('Поле обязательно для заполнения'),
					price: Yup.number()
						.positive('Ввудите положительное значение')
						.integer('Ввидите целое число')
						.required('Поле обязательно для заполнения'),
					discount: Yup.number()
						.positive('Ввудите положительное значение')
						.integer('Ввидите целое число')
						.required('Поле обязательно для заполнения'),
					stock: Yup.number()
						.positive('Ввудите положительное значение')
						.integer('Ввидите целое число')
						.required('Поле обязательно для заполнения'),
					wight: Yup.string()
						.required('Поле обязательно для заполнения'),
					description: Yup.string()
						.required('Поле обязательно для заполнения'),
				})}
				onSubmit={ submitHandler}
		>
				<Form className='addproduct'>
					<Field name="pictures" placeholder="Изображение товара" type="text" />

					<Field name="name" placeholder="Наименование товара" type="text" />

					<Field name="price" placeholder="Цена" type="number" />

					<Field name="discount" placeholder="Скидка" type="number" />

					<Field name="stock" placeholder="Колличество товара" type="number" />

					<Field name="wight" placeholder="Вес товара" type="text" />

					<Field name="description" placeholder="Описание товара" type="text" />

					<button type="submit" className="btn btn-primary">Добавить товар</button>

				</Form>
			</Formik>
			
		</div>
		<Link className="btn" to="/catalog">Вернуться в каталог</Link>
		</>
	)
}