import React, { Component } from "react";
import { Container } from "./Sidebar.styled";
import { SidebarContext } from "../../MultipleAndUpdatingContexts";

function Sidebar() {
  return (
    <SidebarContext.Consumer>
      {(value) => <Container>{value}</Container>}
    </SidebarContext.Consumer>
  );
}

export default Sidebar;
