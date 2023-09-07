import { useState } from "react";
import { styles } from "../App";
import { View } from "react-native-web";
import { Pressable, Text } from "react-native";

export default function Items ({item, i}) {

    i = i || Math.random()  

    let [check, setCheck] = useState(false);

    return ( 
        <View style={{flexDirection: 'row'}} key={i}>
            <Text style={{
                ...styles.border(check? 'green': 'red'), 
                ...styles.padding, 
                ...styles.radius, 
                ...styles.margin('5px', '2px'),
                width: '64%'
            }}>
                {item}
            </Text>
            <Pressable onPress={()=> setCheck(!check)} style={{
                ...styles.border('yellow'),
                ...styles.margin('5px', '2px'),
                ...styles.radius, 
                width: '34%',
                ...styles.padding
            }}>
                <Text style={{
                ...styles.center
                }}>{check ? 'Uncheck' : 'Check'}</Text>
            </Pressable>
        </View>
    )
}