import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAdd} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons,
});

const mapDispatchToProps = (dispatch) => ({
  personAdd: () => dispatch({ type: actionTypes.ADD_PERSON }),
  personDelete: (id) =>
    dispatch({ type: actionTypes.DELETE_PERSON, personId: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
