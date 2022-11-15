import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TransactionList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.economicBalanceStyle}> Economic balance: 0€ </Text>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>Transaction 1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1.5,
        marginTop: 10,
        borderRadius: 15,
        paddingRight: 20,
        backgroundColor: 'white',
        width: '95%',
        height: 70,
    },
    listItemText: {
        fontSize: 20,
        marginLeft: 20
    },
    economicBalanceStyle: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
});

export default TransactionList