import {ButtonRenderer} from "./ButtonRenderer";

export const Button = () => {
    const onClick = () => {
        console.log("Clicked");
    }

    return (
        <ButtonRenderer onClick={onClick}/>
    )
}