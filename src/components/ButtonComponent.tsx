import { ButtonType } from "../@types/ButtonType.js";

const ButtonComponent = ({children}: ButtonType) => {
    return (
        <button className="py-[20px] px-[40px] rounded-xl bg-green-500 cursor-pointer">{children}</button>
    )
}

export default ButtonComponent;