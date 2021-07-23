import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';
import {Buttons} from '../components/Buttons';

export function PageNoticias ( { navigation} ){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.head}>
               Notícias 
            </Text>
            <Buttons title="19/07/2021 - IFRN seleciona bolsistas para Incubadora de Tecnologia" onPress={() => navigation.navigate('PageN1')} />
            <Buttons title="13/07/2021 - Eleição do Conselho Superior chega a resultado final" onPress={() => navigation.navigate('PageN2')} />
         </View>
    )
}