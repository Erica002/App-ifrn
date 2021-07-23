import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyle from '../styles/GlobalStyle';

export function PageN2(){
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.bold}>
                CONSUP
            </Text>
            <Text style={GlobalStyle.title}>
                Eleição do Conselho Superior chega a resultado final
            </Text>
            <Text style={GlobalStyle.texto}>
                13/07/2021 - Nem todas as vagas de suplência foram preenchidas, portanto outro edital deverá 
                entrar em vigor
            </Text>
            <Text style={GlobalStyle.texto}>
                A Comissão Eleitoral, constituída pela Portaria n° 527/2021 da Reitoria do Instituto Federal 
                do Rio Grande do Norte, publicou o resultado final à representação no Conselho Superior (Consup) 
                no biênio 2021/2023.
            </Text>
            <Text style={GlobalStyle.texto}>
                Foram apurados os 2.293 votos, sendo 581 destinados a docentes, 1.492 a discentes e 220 a técnicas 
                e técnicos-administrativos. Por fim, há a relação dos candidatos eleitos com os maiores percentuais 
                proporcionais de votação, no quantitativo igual a ⅓ (um terço) da quantidade de campi para cada segmento.
            </Text>
            <Text style={GlobalStyle.subtitle}>
                Resultado Final
            </Text>
            <Text style={GlobalStyle.texto}>
                No resultado final, consta que há 6 vagas de suplência disponíveis para técnicas e técnicos-administrativos, 
                1 vaga de suplência para discentes e 5 para docentes. Para preencher os 11 espaços, outro edital deverá ser 
                montado pela Comissão Eleitoral.
            </Text>
            <Text style={GlobalStyle.subtitle}>
                Consup
            </Text>
            <Text style={GlobalStyle.texto}>
                O Conselho Superior do Instituto Federal do Rio Grande do Norte tem por finalidade conduzir a ação institucional, 
                zelando pela atuação pluricurricular e multicampi com qualidade socialmente referenciada. O Consup, de caráter 
                consultivo e deliberativo, é o órgão máximo do IFRN. Na prática, cabe a ele aprovar a política geral para a atuação 
                institucional e zelar pelo seu cumprimento; aprovar o plano de desenvolvimento institucional, o plano geral 
                de cada gestão e os planos anuais de ação, assim como a proposta orçamentária anual; 
                aprovar o projeto político-pedagógico e autorizar a criação e extinção de cursos no âmbito do Instituto, 
                bem como o registro de diplomas, entre outros.
            </Text>
            <Text style={GlobalStyle.texto}>
                O Edital com o processo eleitoral de novos membros do Conselho para o biênio de 2021/2023 foi divulgado no 
                final de maio de 2021.
            </Text>   
         </View>
    )
}