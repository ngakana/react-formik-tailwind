import { getIn } from "formik";

function NumberInputField({label, field, helperText, name, ...props}) {

  return (
    <div className="flex flex-col justify-start items-start w-64 px-4 py-4">
        <label className="text-2xl font-bold text-indigo-400 pb-1" htmlFor={field.name}>{label}</label>
        <input className="bg-gray-200 w-full border-b-4 focus:border-indigo-400 focus:outline-none rounded-sm px-1 py-2 text-xl font-medium text-gray-600" type="number" max={90} min={0} {...field} {...props} />
        <p className="text-red-500">{helperText}</p>
    </div>
  );
}

export default NumberInputField;
