import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';
import {Buttons} from '../components/Buttons';

export function PageGraduacao( { navigation} ){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.head}>
                Curso Superior
            </Text>
            <Buttons title="Técnico em Análise e Desenvolvimento de Sistemas (ADS)" onPress={() => navigation.navigate('PageADS')} />
            <Buttons title="Licenciatura em Química" onPress={() => navigation.navigate('PageQuimica')} />
           
         </View>
    )
}