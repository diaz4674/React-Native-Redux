import React from 'react'
import {Text, TouchableWithoutFeedback, View,  UIManager, LayoutAnimation} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from './actions'
// import console = require('console');

class ListItem extends React.Component {
    componentDidUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring()
    } 

    renderDescription(){
        const {item} = this.props.library
        const {expanded} = this.props

        if(expanded){
            return (
                <CardSection> 
                    <Text style = {{flex: 1}}> {item.description} </Text>
                </CardSection>
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