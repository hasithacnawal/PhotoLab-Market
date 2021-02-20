import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

import video from '../../videos/bgVideo.mp4'

const styles = {
    heroContainer: {
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 30px",
        height: "80vh",
        position: "relative",
        margin: 0,
    },
    videoStyles: {
        width: "100%",
        height: "80vh",
        objectFit: "cover",
        margin: "0px",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10px",
        display: "flex",  
        position: "absolute",
    },

}

class VideoBG extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.heroContainer}>
               <video autoPlay loop muted src = {video} type = 'video/mp4' className={classes.videoStyles}>
                   
               </video> 
            </div>
        )
    }
}

export default withStyles(styles)(VideoBG)
