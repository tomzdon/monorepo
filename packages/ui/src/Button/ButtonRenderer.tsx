import {ButtonRendererProps} from "./types";
import {FC} from "react";

export const ButtonRenderer: FC<ButtonRendererProps> = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick}>Button</button>
        </div>
    )
}