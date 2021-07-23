import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageRegInterno(){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>
                Regimento Interno do Campus Pau dos Ferros
            </Text>
            <Text style={GlobalStyle.texto}>
                Aprovado pela Resolução nº. 17/2011-CONSUP/IFRN, de 01/07/2011, o Regimento Interno dos campi do IFRN é o conjunto de normas e disposições complementares ao Estatuto e parte integrante do Regimento Geral do IFRN, que disciplina a organização e o funcionamento dos campi do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN).
            </Text>
            <Text style={GlobalStyle.texto}>
                Acesse o Regimento Interno do Campus Pau dos Ferros do IFRN.
            </Text>
         </View>
    )
}