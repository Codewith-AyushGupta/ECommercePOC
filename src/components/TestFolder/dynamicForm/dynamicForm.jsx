import React, { useEffect } from 'react';
import data from './data/data.json';

function DynamicForm() {
    const renderFormField = (filter) => {
        if (filter.type === 'picklist') {
            return (
                <select style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px' }}>
                    {filter.entries.map((entry, index) => (
                        <option key={index} value={entry}>{entry}</option>
                    ))}
                </select>
            );
        } else if (filter.type === 'text') {
            if (filter.isRequried) {
                return <input type="text" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px' }} required />;
            }
            else {
                return <input type="text" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px' }} />;
            }
        } else if (filter.type === 'number') {
            if (filter.isRequried) {
                return <input type="number" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px' }} required />;
            }
            return <input type="number" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px' }} />;
        } else {
            return null;
        }
    };
    return (
        <div>
            {data.products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <form>
                        {product.filters?product.filters.map((filter, index) => (
                            <div key={index}>
                                <label>{filter.name}: </label>
                                {renderFormField(filter)}
                            </div>
                        )):
                        <button type='submit'>Submit</button>}
                    </form>
                </div>
            ))}
        </div>
    );
}

export default DynamicForm;
