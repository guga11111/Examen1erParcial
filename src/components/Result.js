import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
  var {cont1, cont2, cont3, flag} = props;
  var cadena1 = '';
  var cadena2 = '';
  var cadena3 = '';
  var total = 1;
  var contador1 = 0;
  var cadenaGen;
  let fibo1 = 1;
  let fibo2 = 1;

  if (flag === 1) {
    for (let i = 0; i < cont1; i++) {
      contador1 = contador1 + 2;
      cadena1 = cadena1 + ' ' + contador1;
    }
    cadenaGen = cadena1;
  }
  if (flag === 2) {
    cadena2 = fibo1 + ' ';
    for (var i = 2; i <= cont2; i++) {
      cadena2 = cadena2 + fibo2 + ' ';
      fibo2 = fibo1 + fibo2;
      fibo1 = fibo2 - fibo1;
    }
    cadenaGen = cadena2;
  }

  if (flag === 3) {
    for (i = 1; i <= cont3; i++) {
      total = total * i;
      cadena3 = cadena3 + total + ' ';
    }
    cadenaGen = cadena3;
    console.log(total);
  }

  return (
    <View style={styles.results}>
      <Text>{cadenaGen}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  results: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 20,
    alignContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    fontSize: 5,
    width: '95%',
    paddingHorizontal: 20,
  },
});
