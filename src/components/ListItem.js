import React from 'react'
import {Text} from 'react-native'
import {CardSection} from './common'

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

export default ListItem;