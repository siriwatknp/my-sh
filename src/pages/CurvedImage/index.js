import React from 'react'
import Paper from 'material-ui/Paper';
import image from 'assets/pictures/IMG_0159.jpg';
import './CurvedImage.css';

const CurvedImage = ({}) => {
  return (
    <Paper>
      <div></div>
      <a-scene embedded>
        <a-curvedimage
          src={image}
          height="20"
          radius="10"
          rotation="0 0 0"
          theta-start="90"
          theta-length="180"
          scale="2 2 2"
          position="0 0 0"
        >
        </a-curvedimage>
        <a-sky color="#000000"/>
      </a-scene>
    </Paper>
  )
}

CurvedImage.propTypes = {}
CurvedImage.defaultProps = {}

export default CurvedImage

