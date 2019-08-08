//Import Libraries for component
import React from 'react'
import {Text, View} from 'react-native'

//Make a component

const Header = (props) => {
    

    return (
        <View style = {styles.viewStyle}>  
            <Text style = {styles.textStyle}> {props.headerText} </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
//Make the component availabe to other parts of the app

export {Header}