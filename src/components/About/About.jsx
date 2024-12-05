import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleUser from './SingleUser';

const About = () => {
const users = useLoaderData()
console.log(users)
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
      {
        users.map(user=> <SingleUser key={user.id} user={user} /> )
      }
    </div>
  );
};

export default About;