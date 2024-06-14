import React from "react";

export const Form = ({ formData, handleChange, handleSubmit }) => {
    const renderFormFields = () => {
        return Object.entries(formData).map(([fieldName, fieldValue]) => {
            let inputType = 'text';
            let minLength = 3;
            let pattern = '';

            switch (fieldName) {
                case 'email':
                    inputType = 'email';
                    break;
                case 'phoneNumber':
                    inputType = 'tel';
                    pattern = '^[0-9]+$';
                    break;
                default:
                    break;
            }

            return (
                <div key={fieldName} className="form__field">
                    <label htmlFor={fieldName}>{fieldName}</label>
                    {fieldName === 'info' ? (
                        <textarea
                            id={fieldName}
                            name={fieldName}
                            value={fieldValue}
                            onChange={e => handleChange(e.target.name, e.target.value)}
                            required
                        />
                    ) : (
                        <input
                            type={inputType}
                            id={fieldName}
                            name={fieldName}
                            value={fieldValue}
                            onChange={e => handleChange(e.target.name, e.target.value)}
                            minLength={minLength}
                            
                            required
                        />
                    )}
                </div>
            );
        });
    };

    const isFormValid = () => {
        return Object.values(formData).every((value) => value.trim() !== '');
    };

    return (
        <form onSubmit={handleSubmit}>
            {renderFormFields()}
            <button type="submit" disabled={!isFormValid()}>
                Submit
            </button>
        </form>
    );
};

export default Form;