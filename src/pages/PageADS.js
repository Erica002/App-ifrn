import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageADS(){
    return(
        <View style={GlobalStyle.container}>
             <Text style={GlobalStyle.title}>
                Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)
            </Text>
            <Text style={GlobalStyle.texto}> 
                Contato com a coordenação do curso (Prof. Irlan Moreira):
            </Text>
            <Text style={GlobalStyle.bold}>
                E-mail: cotads.pf@ifrn.edu.br 
            </Text>
            <Text style={GlobalStyle.title}>
            Identificação do Curso
            </Text>
            <Text style={GlobalStyle.texto}>
            Curso Superior de Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) é uma oferta presencial do Campus Pau dos Ferros do IFRN, situado na BR 405, KM 154, Bairro Chico Cajá, Pau dos Ferros/RN. O projeto pedagógico do curso foi aprovado pela Resolução nº 16/2012-CONSUP/IFRN de 01/03/2012.
            </Text>
            <Text style={GlobalStyle.subtitle}>
            Sobre o Curso:
            </Text>         
            <Text style={GlobalStyle.texto}>
            O Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas forma profissionais que  analisam, projetam, documentam, especificam, testam, implantam e mantém sistemas computacionais de informação. Este profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação deste profissional.            
            </Text>
            <Text style={GlobalStyle.subtitle}>
            Carga Horária:
            </Text>
            <Text style={GlobalStyle.texto}>
            2.594 horas
            </Text> 
            <Text style={GlobalStyle.subtitle}>
            Duração do Curso:
            </Text>
            <Text style={GlobalStyle.texto}>
            3 anos
            </Text>   
            <Text style={GlobalStyle.subtitle}>
            Resolução de criação do curso:
            </Text>
            <Text style={GlobalStyle.texto}>
            Resolução Nº 17/2012-CONSUP/IFRN, de 01/03/2012.
            </Text>     
         </View>
         
    )
}