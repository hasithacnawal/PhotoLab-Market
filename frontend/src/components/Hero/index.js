
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import VideoBG from './VideoBG';

const styles = {
    images: {
        backgroundSized: "cover"
    }
}

class Hero extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
               <VideoBG/>
            </>
        )
    }
}

export default withStyles(styles)(Hero);