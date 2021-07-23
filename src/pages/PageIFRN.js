import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';
import {Buttons} from '../components/Buttons';

export function PageIFRN( { navigation} ){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.head}>
                IFRN - Campus Pau dos Ferros
            </Text>
            <Buttons title="Informações" onPress={() => navigation.navigate('PageInformacoes')} />
            <Buttons title="Localização" onPress={() => navigation.navigate('PageLocalizacao')} />
            <Buttons title="Notícias" onPress={() => navigation.navigate('PageNoticias')} />
           
         </View>
    )
}