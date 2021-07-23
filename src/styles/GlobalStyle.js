import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({    
    head: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 8,
        
    },

    title: {
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 4,
        marginBottom: 4,
        
    },

    subtitle: {
        fontSize: 11,
        marginTop: 2,
        marginBottom: 2,

    },

    texto: {
        fontSize: 10,
        textAlign: 'justify',
        marginTop: 2,
        marginBottom: 2,
    },

    bold: {
        fontSize: 10,
        fontWeight: 'bold',

      },

    container: {
        flex: 1,
        backgroundColor: '#b2d8b2',
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 18,
        paddingRight: 18,
       
    },
    
    button: {
        backgroundColor: '#323232',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 14,

    },

    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#b2b2b2',
    
    },
    
    droidSafeArea: {
        flex: 1,
        paddingTop: 32,

    },
});