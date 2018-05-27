import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.email && <p>{props.email}</p>}
      {props.greeting && <p>{props.greeting}</p>}
    </div>
  );
};

Profile.defaultProps = {
  greeting: 'Hello !!'
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  greeting: PropTypes.string
};

export default Profile;