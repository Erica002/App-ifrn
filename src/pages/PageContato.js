import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageContato(){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>
                Contatos e Setores: 
            </Text>
            <Text style={GlobalStyle.title}>TELEFONE FIXO PRINCIPAL: (84) 4005-4109 (RECEPÇÃO)
            </Text>
            <Text style={GlobalStyle.texto}>
                Para falar ao telefone com servidores (as) de qualquer setor, é preciso ligar antes para o 4005 4109. 
                A chamada será atendida pela Recepção do Campus e direcionada ao setor/servidor (a) solicitado.            
            </Text>
            <Text style={GlobalStyle.title}>
            ::::: Lista de ramais está disponível para download no site principal da Instituição.
            </Text>
         </View>
    )
}