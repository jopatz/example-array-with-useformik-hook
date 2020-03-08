import React from 'react';
import { useFormik } from 'formik';

const App = () => {

    /**
     * Handle formik form submission
     * 
     * @param {any} values The formik values
     */
    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    const config = {
        initialValues: {
            items: [
                { title: 'Foo', selected: false },
                { title: 'Bar', selected: false },
                { title: 'Bazz', selected: false }
            ]
        },
        onSubmit: handleSubmit
    };

    const formik = useFormik(config);

    /**
     * Render a checkbox
     * 
     * @param {object} item The provided item of formik values array
     * @param {number} index The index of the provided item in formik values array
     */
    const renderCheckbox = (item, index) => {
        const field = 'items.' + index + '.selected';

        return (
            <div key={index}>
                <input type="checkbox"
                    id={field}
                    name={field}
                    value={formik.values.items[index].selected}
                    onChange={formik.handleChange} />
                <label htmlFor={field}> {item.title}</label>
            </div>
        );
    };

    /**
     * Render the component
     */
    return (
        <form onSubmit={formik.handleSubmit}>
            {formik.values.items.map((item, index) => renderCheckbox(item, index))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default App;
