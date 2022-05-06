import classNames from "classnames"

const Button = (props) => {
    const { as: Component = "button", className, ...otherProps } = props

    return (
        <Component
            {...otherProps}
            className={classNames(
                "py-1.5 px-3 font-bold text-lg bg-slate-600 text-white",
                className
            )}
        />
    )
}