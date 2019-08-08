import React from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from './actions'
// import console = require('console');

class ListItem extends React.Component {

    renderDescription(){
        const {item} = this.props.library
        const {expanded} = this.props

        if(expanded){
            return (
                <Text> {item.description} </Text>
            )
        }
    }
    
    render(){
        const {titleStyle} = styles;
        const { id, title } = this.props.library.item
        
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
                    {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id

    return {expanded}
}

export default connect(mapStateToProps, actions)(ListItem);