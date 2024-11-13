import {View, TouchableOpacity, Text} from "react-native";
import {ButtonRendererProps} from "./types";
import {FC} from "react";

export const ButtonRenderer: FC<ButtonRendererProps> = ({onClick}) => {
    return (
        <View>
            <TouchableOpacity onPress={onClick}><Text>Button</Text></TouchableOpacity>
        </View>
    )
}