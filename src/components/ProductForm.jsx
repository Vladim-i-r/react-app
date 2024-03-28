import { useEffect, useState } from "react"

const initialDatForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
}

export const ProductForm = ({productSelected ,handlerAdd}) => {

    const [form, setForm] = useState(initialDatForm);

    const {id, name, description, price } = form;

    useEffect(() => {
        setForm(productSelected);
    }, [productSelected])                           // cuando productSelected cambie



    return (
        <form onSubmit={(event) => {
            event.preventDefault();                                         /*Esto es para evita que se borre lo escrito al momento de enviar */

            if (!name || !description || !price) {
                alert('Debe de completar los datos del formulario!')
                return;
            }
            //console.log(form);
            handlerAdd(form);
            setForm(initialDatForm);                                        //Cada vez que se envian se limpia el form

        }}>
            <div>
                <input placeholder="Name" className="form-control my-3 w-75" name="name" value={name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
            </div>

            <div>
                <input placeholder="Description" className="form-control my-3 w-75" name="description" value={description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
            </div>

            <div>
                <input placeholder="Price" className="form-control my-3 w-75" name="price" value={price} onChange={(event) => setForm({ ...form, price: event.target.value })} />
            </div>

            <div>
                <button type="submit" className="btn btn-primary">{id>0 ? 'Update': 'Create'}</button>
            </div>
        </form>
    )
}