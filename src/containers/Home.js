import React, { Component } from "react";
import ProctoringContainer from "../components/ProctoringContainer/ProctoringContainer";

export default class Home extends Component {
  render() {
    return (
      <ProctoringContainer>
        <div
          style={{
            padding: "30px",
            textAlign: "center",
            width: "full",
          }}
        >
          EXAM CONTENT HERE
        </div>
      </ProctoringContainer>
    );
  }
}
