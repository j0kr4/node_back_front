import Input from "./Input"
import classNames from "classnames"
import { Field } from "formik"

const FormField = (props) => {
    const { name, as: Component = Input, className, ... otherProps } = props

    return (
        <Field name={name}>
            {({ field, meta: { error, touched } }) => (
                <div className={classNames(className)}>
                    <label className="block w-full">
                        <Component {...field} className="w-full block" {...otherProps} />
                    </label>
                    {touched && error ? (
                        <p className="text-red-500 text-sm p-2">{error}</p>
                    ) : null}
                </div>
            )}
        </Field>
    )
}