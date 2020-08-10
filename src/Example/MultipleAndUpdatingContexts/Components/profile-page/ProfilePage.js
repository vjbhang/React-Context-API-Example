import React, { Component } from "react";
import { Container, Button } from "./ProfilePage.styled";
import { ThemeContext } from "../../MultipleAndUpdatingContexts";

export default class ProfilePage extends Component {
  render() {
    const { theme } = this.props;
    console.log(theme);
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <Container theme={theme}>
            <Button onClick={toggleTheme}>Light/Dark Mode</Button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}
