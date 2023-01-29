import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";


export function NewProductForm() {
	const addNewproducrClickHandler = () => {
		console.log('Нажмите добавить новый продукт')
		}
	


	return (
		<div>
		   <h1>Добавить новый товар</h1>
		   <Formik
				initialValues={{
					Наименование: '', Скидка: 0, Стоимость: 0, Скидка: '', Изображение: '',
				}}
				onSubmit={addNewproducrClickHandler}
			>
				<Form className="d-flex flex-column">
					<Field name="Изображениее" type="text" />
					<Field name="Наименование" type="text" />
					<Field name="Стоимость" type="number" />
					<Field name="Описание" type="textarea" />
					<Field name="Скидка" type="number" />
					<button className="btn" type="submit">Добавить</button>
				</Form>
			</Formik>
		</div>
			)
}