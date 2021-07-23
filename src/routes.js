import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {PageIFRN} from './pages/PageIFRN';
import { PageInformacoes } from './pages/PageInformacoes';
import { PageApresentacao } from './pages/PageApresentacao';
import { PageRegInterno } from './pages/PageRegInterno';
import { PageContato } from './pages/PageContato';
import { PageLocalizacao } from './pages/PageLocalizacao';
import { PageEnsino } from './pages/PageEnsino';
import { PageEtec } from './pages/PageEtec';
import { PageGraduacao } from './pages/PageGraduacao';
import { PageNoticias} from './pages/PageNoticias';
import { PageN1 } from './pages/PageN1';
import { PageN2 } from './pages/PageN2';
import { PageADS } from './pages/PageADS';
import { PageQuimica} from './pages/PageQuimica';
import { PageAlimentos } from './pages/PageAlimentos';
import { PageApicultura } from './pages/PageApicultura';
import { PageInformatica } from './pages/PageInformatica';

const Tabs = createBottomTabNavigator();
const InstitutoStack = createStackNavigator();
const CursosStack = createStackNavigator();

/**
 * Here stack for tabInstituto
 * 
 */


function InstitutoStackScreen() {
  return(
    <InstitutoStack.Navigator> 
      <InstitutoStack.Screen name="PageIFRN" component={PageIFRN} options={{headerShown:false}}  />
      <InstitutoStack.Screen name="PageInformacoes" component={PageInformacoes}/>
      <InstitutoStack.Screen name="PageApresentacao" component={PageApresentacao} />
      <InstitutoStack.Screen name="PageRegInterno" component={PageRegInterno} />
      <InstitutoStack.Screen name="PageContato" component={PageContato} />
      <InstitutoStack.Screen name="PageLocalizacao" component={PageLocalizacao} />
      <InstitutoStack.Screen name="PageNoticias" component={PageNoticias} />
      <InstitutoStack.Screen name="PageN1" component={PageN1} />
      <InstitutoStack.Screen name="PageN2" component={PageN2} />
    </InstitutoStack.Navigator>
  )
}

/**
 * Here stack for tabEnsino
 * @returns 
 */

 function EnsinoStackScreen() {
  return(
    <CursosStack.Navigator>
      <CursosStack.Screen name="PageEnsino" component={PageEnsino} options={{headerShown:false}}  />
      <CursosStack.Screen name="PageEtec" component={PageEtec} />
      <CursosStack.Screen name="PageAlimentos" component={PageAlimentos}/>
      <CursosStack.Screen name="PageApicultura" component={PageApicultura} />
      <CursosStack.Screen name="PageInformatica" component={PageInformatica} />
      <CursosStack.Screen name="PageGraduacao" component={PageGraduacao}  />
      <CursosStack.Screen name="PageADS" component={PageADS} />
      <CursosStack.Screen name="PageQuimica" component={PageQuimica} />
    </CursosStack.Navigator>
  )
}

export  function Routes() {
  return (
      <Tabs.Navigator 
        tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#771818',
        labelStyle: {
          fontSize: 14,
        },
        inactiveTintColor: 'green',
      }}
      >
          <Tabs.Screen name="instituto" 
            options={{
              tabBarIcon: ({ color }) => <FontAwesome5 name="school" size={24} color="black" /> ,
              title: 'Instituto',
            }}
          component={InstitutoStackScreen}/>

          <Tabs.Screen name="ensino" 
             options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-graduate" size={24} color="black" />
              ),
              title: 'Ensino',
            }}
          component={EnsinoStackScreen}/>
      </Tabs.Navigator>
  );
}