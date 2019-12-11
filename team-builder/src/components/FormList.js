import React from 'react';

const FormLists = props => {

    return (
        <div className="form-list">
        {props.FormLists.map(member => (
          <div className="note" key={member.id}>
            <h2>{member.title}</h2>
            <p>{member.body}</p>
          </div>
        ))}
      </div>
    );
};

export default FormLists;