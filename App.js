import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Items from './components/Items';

export default function App() {

  let [items, setItems] = useState([]);
  let [toadd, setToadd] = useState(false);
  let [input, setInput] = useState('');
  
  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={{width: '50%'}}>

      <Text style={{...styles.margin('16px', '8px'), ...styles.fontSize('20px')}}>List of items</Text>

      <Pressable style={{...styles.border('orange'), ...styles.radius, ...styles.padding, ...styles.margin('0', '2px')}} onPress={()=>setToadd(!toadd)}>
        <Text>+ add new</Text>
      </Pressable>

      {/* {items.length > 0 && 
        <View>
          {items.map((item, i)=> <Items key={i} item={item} i={i}/>)}
        </View>  
      } */}

      <SafeAreaView style={styles.border('red')}>
          <FlatList
              data={items}
              renderItem={({item}) => <Items item={item} />}
              keyExtractor={item => item}
          />
      </SafeAreaView>

      {toadd && 
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder='insert item'
            placeholderTextColor={'gray'}
            style={{
              ...styles.border('gray'), 
              ...styles.radius, 
              ...styles.margin('5px', '2px'), 
              ...styles.padding, 
              width:'75%'
            }}
            value={input}
            onChange={e=>setInput(e.target.value)}
          />
          <Pressable style={{
            ...styles.border('green'), 
            ...styles.radius, 
            ...styles.padding, 
            ...styles.margin('5px', '2px'), 
            width: '25%'
          }} 
          onPress={()=>{ 
            input !== '' && setItems([...items, input]); 
            input !== '' && setInput('') 
          }}>
            <Text style={styles.center}>Save</Text>
          </Pressable>
        </View>
      }
    </View>
  );
}

export const styles = StyleSheet.create({
  border : (color) => {
    return {
      border: `2px solid ${color}`
    }
  },
  radius: {
    borderRadius: '8px'
  },
  padding: {
    padding: '8px',
  },
  margin: (tb, lr) => {
    return {
      marginTop: tb,
      marginBottom: tb,
      marginLeft: lr,
      marginRight: lr,
    }
  },
  fontSize : (fontSize) => {
    return {fontSize}
  },
  center: {
    textAlign: 'center'
  }
});
