import React from 'react';

const Map = (props) => {
    console.log('Map', props)
    return (
        <div classsName="new-listing">
      <iframe
        width="600"
        height="450"
        title="addedNewListing"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCh5I0uYvNQrOBIhNw0K9ZNCZWuCGusuEQ&q=${props.address}`}
      ></iframe>
    </div>
    )
}

export default Map;