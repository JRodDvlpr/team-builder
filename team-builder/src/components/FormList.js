import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
  width: 33%;
  border: 1px solid black;
`

const FormLists = props => {

  return (
    <div className='team-List'>
   {props.members.map((member, index) => {
      return(
        <Card className='teamMember' key={index}>
        <h2>{member.name}</h2>
        <h3>{member.role}</h3>
        <p>{member.email}</p>
      </Card>	               
        )
      })}
    </div>
);	   
};

export default FormLists;