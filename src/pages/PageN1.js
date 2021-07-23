import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageN1(){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.bold}>
                EMPREENDEDORISMO
            </Text>
            <Text style={GlobalStyle.title}>
                IFRN seleciona bolsistas para Incubadora de Tecnologia
            </Text>
            <Text style={GlobalStyle.texto}>
                19/07/2021 - A seleção será para atuação do projeto no Campus Pau dos Ferros
            </Text>
            <Text style={GlobalStyle.texto}>
                A Diretoria Geral do Campus Pau dos Ferros do Instituto Federal de Educação, Ciência e Tecnologia 
                do Rio Grande do Norte (IFRN), no uso de suas atribuições legais, torna público o Edital 
                N° 11/2021 - DG/PF/RE/IFRN de seleção para contratação, por tempo determinado, de bolsista para atuar 
                na Incubadora de Tecnologia do Ato Oeste (ITAO).            
            </Text>
            <Text style={GlobalStyle.texto}>
                Será disposta 02 (duas) vagas para atuar no apoio a gestão da incubadora tecnológica ITAO, 
                com Bolsa auxílio mensal no valor de R $320,00 (trezentos e vinte reais) com duração de até 9 meses.            </Text>
            <Text style={GlobalStyle.subtitle}>
                Etapas de seleção            
            </Text>
            <Text style={GlobalStyle.texto}>
                Os candidatos serão selecionados por meio de análise de Currículo e entrevista, sendo esta realizada por uma banca examinadora composta por três 
                servidores do Campus Pau dos Ferros (Gerente da incubadora, Coordenação de pesquisa e  professor do campus).            </Text>
            <Text style={GlobalStyle.texto}>
                Na primeira fase, será realizada a validação da documentação entregue de forma online, 
                a obediência dos candidatos aos critérios estabelecidos no  edital e avaliado o histórico escolar 
                do candidato. Serão selecionados na primeira fase os 10 candidatos que apresentarem maior Índice 
                de Rendimento Acadêmico (IRA) e estiverem de acordo com os critérios estabelecidos como requisito 
                para os bolsistas. O resultado desta fase será divulgado no dia 30 de julho.            
            </Text>
            <Text style={GlobalStyle.texto}>            
                Na segunda fase, serão realizadas as entrevistas individuais de forma online, via Conferência,
                que ocorrerá no dia 03 de agosto, com os candidatos selecionados na primeira fase, seguindo o 
                cronograma estabelecido pela banca examinadora, que será divulgado junto ao resultado da primeira 
                etapa no dia 30 de julho pelo site e redes sociais do Campus Pau dos Ferros.         
            </Text>
            <Text style={GlobalStyle.subtitle}>
                Inscrições
            </Text>
            <Text style={GlobalStyle.texto}>
                As inscrições devem ser feitas de 19 de julho a 23 de julho de 2021, por meio do preenchimento 
                integral da ficha de inscrição e enviadas com documento em formato pdf para o e-mail da Coordenação 
                e Pesquisa e Inovação do Campus Pau dos Ferros (copein.pf@ifrn.edu.br). 
            </Text>      
            <Text style={GlobalStyle.subtitle}>
                Acesse
            </Text>   
            <Text style={GlobalStyle.title}>
                EDITAL Nº 11/2021 - Seleção de Bolsa para atuação na Incubadora Tecnológica do Auto Oeste no site da Institução.
            </Text>   




         </View>
    )
}