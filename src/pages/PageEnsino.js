import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';
import {Buttons} from '../components/Buttons';

export function PageEnsino( { navigation} ){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.head}>
                Ensino | Cursos
            </Text>
            <Buttons title="Técnicos Integrados" onPress={() => navigation.navigate('PageEtec')} />
            <Buttons title="Graduação" onPress={() => navigation.navigate('PageGraduacao')} />
         </View>
    )
}