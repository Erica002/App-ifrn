import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageInformatica(){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>
                ::: Curso Técnico Integrado em Informática
            </Text>
            <Text style={GlobalStyle.texto}>
                Desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de 
                programação e das linguagens de programação. Utiliza ambientes de desenvolvimentos de sistemas, 
                sistemas operacionais e banco de dados. Realiza testes de software, mantendo registro que 
                possibilitem análises e refinamento dos resultados. Executa manutenção de programas de 
                computadores implantados. Possibilidades de atuação: Instituições públicas, privadas e do terceiro 
                setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores. 
            </Text>
            <Text style={GlobalStyle.texto}>
                - Modalidade: Presencial.  
            </Text>
            <Text style={GlobalStyle.texto}>
                - Carga horária do curso: 3.880h. 
            </Text>
            <Text style={GlobalStyle.texto}>
                - Duracão do curso: 4 anos.
            </Text>
            <Text style={GlobalStyle.texto}>
                - Resolucão de criacão do curso: Resolução Nº 13/2009-CONSUP/IFRN, de 22/05/2009.
            </Text>
         </View>
    )
}