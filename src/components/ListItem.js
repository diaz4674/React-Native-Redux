import React from 'react'
import {Text} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

class ListItem extends React.Component {
    
    render(){
        const {titleStyle} = styles;
        return(
            <CardSection>
                <Text style = {titleStyle}>{this.props.library.item.title}</Text>
            </CardSection>
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