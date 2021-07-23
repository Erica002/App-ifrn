import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageLocalizacao(){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>
                Localização:
            </Text>
            <Text style={GlobalStyle.texto}>
                O Campus do IFRN em Pau dos Ferros está instalado num terreno cedido pela prefeitura, 
                com área de 28.820 m², localizado no Bairro Chico Cajá, BR 405, estando localizado na 
                Região do Alto Oeste Potiguar, a cerca de 430 km da capital do Estado.
            </Text>
           
         </View>
    )
}