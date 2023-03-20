import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [Frase, setTextoFrase] = useState('Testando a frase do app');
    
  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  function quebrarbiscoito(){
    let numRadom = Math.floor(Math.random() * frases.length)
    setTextoFrase('"' + frases[numRadom] + '"');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar(){
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }

  return(
      <View style={styles.container}>
        
        <Image source={img} style={styles.img}/>
        
        <Text style ={styles.textofrase}>{Frase}</Text>
        
        <TouchableOpacity style={styles.botao} onPress={ quebrarbiscoito }>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: 'black'}]} onPress={ reiniciar}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, {color: 'black'}] }>Reiniciar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#ffffff'
  },

  img:{
    width: 230,
    height: 230
  },

  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },

  btnArea:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff7b00'
  },
  
  textofrase:{
    fontSize: 20,
    color: '#ff932e',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
});

export default App;
