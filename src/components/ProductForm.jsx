import { useEffect, useState } from "react"

const initialDatForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
}

export const ProductForm = ({productSelected ,handlerAdd}) => {

    const [form, setForm] = useState(initialDatForm);

    const { name, description, price } = form;

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
                <input placeholder="Name" style={{ marginBottom: '4px' }} name="name" value={name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
            </div>

            <div>
                <input placeholder="Description" style={{ marginBottom: '4px' }} name="description" value={description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
            </div>

            <div>
                <input placeholder="Price" style={{ marginBottom: '4px' }} name="price" value={price} onChange={(event) => setForm({ ...form, price: event.target.value })} />
            </div>

            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    )
}