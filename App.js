import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
//Se estila importar lo nuestro despues de las librerias q no
import colors from './src/utils/colors';
import Result from './src/components/Result';

export default function App() {
  var [num1, setSec1] = useState(null);
  var [num2, setSec2] = useState(null);
  var [num3, setSec3] = useState(null);
  var [flag, setFlag] = useState(null);

  const onSubmit = () => {
    flag = 1;
    num1++;
    setFlag(flag);
    setSec1(num1);
    console.log('N1 -> ', num1);
  };

  const onSubmit2 = () => {
    flag = 2;
    setFlag(flag);
    num2++;
    setSec2(num2);
    console.log('N2 -> ', num2);
  };

  const onSubmit3 = () => {
    flag = 3;
    setFlag(flag);
    num3++;
    setSec3(num3);
    console.log('N3 -> ', num3);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.SafeArea}>
        <Text style={styles.titleApp}>Equipo Mini Raza</Text>
      </SafeAreaView>
      <View>
        <Result
          style={styles.results}
          cont1={num1}
          flag={flag}
          cont2={num2}
          cont3={num3}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Secuencia 1" onPress={onSubmit} />
        <Button title="Secuencia 2" onPress={onSubmit2} />
        <Button style={styles.button} title="Secuencia 3" onPress={onSubmit3} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 65,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    marginTop: 5,
  },
  results: {
    alignContent: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  top: {
    marginTop: 100,
  },
  buttons: {
    marginTop: '80%',
    width: '92%',
    marginRight: 15,
    marginLeft: 15,
    position: 'absolute',
  },
  button: {
    backgroundColor: 'red',
    marginTop: 10,
  },
});
