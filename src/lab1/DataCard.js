import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

const DataCard = (props) => {
  const {image, ...profile} = props.data;
  return (
    <div style={{padding: 20, backgroundColor: '#404453', borderRadius: 10}}>
      {image &&
        <div className="image">
          <img style={{width: '100%', borderRadius: 10}} src={image} alt={props.name} />
        </div>
      }
      <div>
        <div className="body" style={{color: 'white'}}>
          <Profile {...profile} />
        </div>
        <div className="footer" style={{display: 'flex'}}>
          <a style={{backgroundColor: '#27dbff', flex:1, padding: 10, borderRadius: 10}}>View Profile</a>
        </div>
      </div>
    </div>
  )
};

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string
};

export default DataCard;