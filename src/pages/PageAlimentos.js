import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageAlimentos(){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>
                ::: Curso Técnico Integrado em Alimentos
            </Text>
            <Text style={GlobalStyle.texto}>
                Atua no processamento e conservação de matérias-primas, produtos e subprodutos da indústria alimentícia e de bebidas, realizando análises físico- químicas, microbiológicas e sensoriais. Auxilia no planejamento, coordenação e controle de atividades do setor. Realiza a sanitização das indústrias alimentícias e de bebidas. Controla e corrige desvios nos processos manuais e automatizados. Acompanha a manutenção de equipamentos. Participa do desenvolvimento de novos produtos e processos Possibilidades de atuação: Indústrias de alimentos e bebidas. Entrepostos de armazenamento e beneficiamento. Laboratórios, institutos de pesquisa e consultoria. Órgãos de fiscalização sanitária e proteção ao consumidor. Indústria de insumos para processos e produtos.               
            </Text>
            <Text style={GlobalStyle.texto}>
                - Modalidade: Presencial.  
            </Text>
            <Text style={GlobalStyle.texto}>
                - Carga horária do curso: 3.480h. 
            </Text>
            <Text style={GlobalStyle.texto}>
                - Duracão do curso: 4 anos.
            </Text>
            <Text style={GlobalStyle.texto}>
                - Resolucão de criacão do curso: Resolução Nº 18/2006-CONSUP/IFRN, de 26/07/2006.
            </Text>
         </View>
    )
}