import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';
import {Buttons} from '../components/Buttons';

export function PageEtec( { navigation} ){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.head}>
                Curso Técnico - Integrado
            </Text>
            <Buttons title="Curso de Alimentos" onPress={() => navigation.navigate('PageAlimentos')} />
            <Buttons title="Curso de Informática" onPress={() => navigation.navigate('PageInformatica')} />
            <Buttons title="Curso de Apicultura" onPress={() => navigation.navigate('PageApicultura')} />
           
         </View>
    )
}