import { QueryClient, useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik, } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { queryClient } from '../../IIndex.js';
import { Link } from "react-router-dom";
import  './style.css';

export const NEWPRODUCT_KEY=['NEWPRODUCT_KEY']

export function NewProductForm({api}) {


	const SubmitForm = (body) => api.addProductRequest(body)
	/*const { mutateAsyng } = useMutation({
		mutationFn: (values) => {
			console.log(values)
			SubmitForm(values)
		} ,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: NEWPRODUCT_KEY })
		} 
	})*/

		//.then(res => res.json())
		//.then(data => {
			//console.log(data);
		//})



return (
	<>
	<Link className="btn btn__profile" to="/catalog">Вернуться в каталог</Link>
	<div className="container__form">
		<h2>Создать свой продукт</h2>
		<hr/>
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
					.positive('Вводите положительное значение')
					.integer('Ввидите целое число')
					.required('Поле обязательно для заполнения'),
				discount: Yup.number()
					.positive('Вводите положительное значение')
					.integer('Ввидите целое число')
					.required('Поле обязательно для заполнения'),
				stock: Yup.number()
					.positive('Вводите положительное значение')
					.integer('Ввидите целое число')
					.required('Поле обязательно для заполнения'),
				wight: Yup.string()
					.required('Поле обязательно для заполнения'),
				description: Yup.string()
					.required('Поле обязательно для заполнения'),
			},
			)}
			onSubmit={(values)=>{
				console.log(values)
				api.addProductRequest(values)}}
		>
			<Form className='addproduct'>
				<Field name="pictures" placeholder="Изображение товара" type="url" />
				<ErrorMessage component="span" name="pictures" className="error" />
				<Field name="name" placeholder="Наименование товара" type="text" />
				<ErrorMessage component="span" name="email" className="error" />
				<Field name="price" placeholder="Цена" type="number" />
				<ErrorMessage component="span" name="price" className="error"  />
				<Field name="discount" placeholder="Скидка" type="number" />
				<ErrorMessage component="span" name="discount" className="error" />
				<Field name="stock" placeholder="Колличество товара" type="number"/>
				<ErrorMessage component="span" name="stock" className="error" />
				<Field name="wight" placeholder="Вес товара" type="text" />
				<ErrorMessage  component='span' name="wight" className="error" />
				<Field name="description" placeholder="Описание товара" type="text" />
				<ErrorMessage component="span" name="description" className="error" />
				<button type="submit" className="btn">Добавить товар</button>
			</Form>
		</Formik>
		</div>
	</>
)
	}

export default NewProductForm