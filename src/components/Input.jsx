import classNames from "classnames"

const Input = (props) => {
    const { className, ...otherProps } = props

    return (
        <Input
            {...otherProps}
            className={classNames("border-2 border-slate-100 p-2", className)}
        />
    )
}

export default Input