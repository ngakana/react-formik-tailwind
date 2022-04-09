import { Formik, Field, Form, useFormik } from "formik";
import * as yup from "yup";

import NumberInputField from "./components/NumberInputField";
import SelectInputField from "./components/SelectInputField";
import TextInputField from "./components/TextInputField";

const schema = yup.object({
  username: yup
    .string()
    .required("Required")
    .min(3, "Username must contain at least 3 characters"),
  age: yup
    .number("Please provide number only")
    .required("Required")
    .min(1, "Age must be at least 1 (year)")
    .max(90, "Getta outta here")
});

function App() {

  const formik = useFormik({
    initialValues: {
      username: "",
      age: 23,
      health: "Yes"
    },
    validationSchema: schema
  });

  return (
    <div className="flex flex-col items-center bg-yellow-50 w-screen h-screen p-10 md:flex-row md:justify-center md:items-start">
      <Formik
        onSubmit={() => {}}
      >{ () => (
        <Form>
          <h1 className="text-4xl text-indigo-400 font-bold underline">Form</h1>
          <Field name="username" label="username" placeholder="janethedoe" helperText={formik.errors.username || null}
            onChange={formik.handleChange} 
            value={formik.values.username} 
            component={TextInputField} 
          />    
          <Field name="age" label="age" placeholder="23" helperText={formik.errors.age || null}
            onChange={formik.handleChange} 
            value={formik.values.age} 
            component={NumberInputField} 
          />  
          <Field name="health" label="Are you health consciuos?" options={["Yes", "No"]}  helperText={formik.errors.health || null}
            onChange={formik.handleChange} 
            value={formik.values.health} 
            component={SelectInputField} 
          />          
        </Form>
      )}</Formik>
      <div className="mt-12 self-start md:m-0">
        <h1 className="text-4xl text-indigo-400 font-bold underline">React State</h1>

        <p className="text-md text-indigo-300 font-bold">Username: 
          <span className="text-gray-500 font-normal"> {formik.values.username}</span>
        </p>
        <p className="text-md text-indigo-300 font-bold">Age: 
          <span className="text-gray-500 font-normal"> {formik.values.age}</span>
        </p>
        <p className="text-md text-indigo-300 font-bold">Health conscious: 
          <span className="text-gray-500 font-normal"> {formik.values.health}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
