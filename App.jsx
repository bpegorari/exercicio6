import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, View} from 'react-native';

function decide(){

  return Math.floor(Math.random()*11);

}


export default function App() {

  const [numero, setNumero] = useState();

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>
        🔢JOGO DO NÚMERO ALEATÓRIO🎲
      </Text>

      <Text style={styles.text}>
        OLÁAAH CAMARADINHAS! Eu sou o Charada !!!! ...
        Pense em um número de 0 a 10!
      </Text>

      <Text style={styles.text}>
        [   {numero}   ]
      </Text>

      <View style = {styles.butao}>
        <Button  color='green' 
        title='DESCOBRIR 🤐' 
        onPress={() => setNumero(decide())} />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f4fbf3',
    padding: 8,
  },
  text: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    color: 'green',
    alignSelf: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    height: 50,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
    backgroundColor: 'blwhiteack',
    
  },
  butao: {
    marginHorizontal: 100,
    borderColor: 'green',
    borderWidth: 5,
    borderRadius: 10
  }
});
