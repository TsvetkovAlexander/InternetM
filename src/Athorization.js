import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'


const onSubmit = () => {
   console.log("ok")
}
 export  const Athorization = () => (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit,  values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>login</label>
                        <Field
                            name="login"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label>password</label>
                        <Field
                            name="password"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="buttons">
                        <button type="submit" >
                            Submit
                        </button>

                    </div>
                </form>
            )}
        />
);


