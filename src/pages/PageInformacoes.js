import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';
import {Buttons} from '../components/Buttons';

export function PageInformacoes ( { navigation} ){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.head}>
               Informações sobre o campus: 
            </Text>
            <Buttons title="Apresentação" onPress={() => navigation.navigate('PageApresentacao')} />
            <Buttons title="Regimento Interno do Campus Pau dos Ferros" onPress={() => navigation.navigate('PageRegInterno')} />
            <Buttons title="Telefone" onPress={() => navigation.navigate('PageContato')} />
         </View>
    )
}