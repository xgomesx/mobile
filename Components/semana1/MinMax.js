import React from "react";
import { Text } from "react-native";

export default function MinMax(props) {
    const { Min, Max } = props;

    const Valormax = Math.max(parseInt(Min), parseInt(Max));

    return (
        <>
        <Text>Valor máximo é: {Valormax}</Text>
        </>
    );
}
