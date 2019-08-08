import React from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from './actions'

class ListItem extends React.Component {
    
    render(){
        const {titleStyle} = styles;
        const { id, title } = this.props.library.item
        console.log(this.props)
        return(
            <TouchableWithoutFeedback
                onPress = {() => this.props.selectLibrary(id)}
            > 
                <View> 
                    <CardSection>
                        <Text style = {titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
         fontSize: 20,
         paddingLeft: 15
    }
}


export default connect(null, actions)(ListItem);