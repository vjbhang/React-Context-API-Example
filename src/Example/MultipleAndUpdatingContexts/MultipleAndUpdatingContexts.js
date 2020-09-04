import React from "react";
import Sidebar from "./Components/sidebar/index";
import ProfilePage from "./Components/profile-page/index";

// Theme context, default to light theme
export const ThemeContext = React.createContext({
  theme: "light", //light/dark
  toggleTheme: () => {
    this.setState((state) => ({
      theme: (state.theme = "light" ? "dark" : "light")
    }));
  }

  // everything declared in createContext are default values.
  // what's passed on as a value in a provider can be easily manipulated
  // with state.
  // note, again, everything that goes inside createContext is literally context and is not actually sent as context. What's sent as context
  // is declared in the Provider value props.
});

// Signed-in user context
const UserContext = React.createContext({
  name: "Guest"
});

class MultipleAndUpdatingContexts extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === "light" ? "dark" : "light"
      }));
    };

    this.state = {
      signedInUser: "Private",
      theme: "light",
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    // App component that provides initial context values
    //   note: in most use cases of providers, value is always provided
    //          and that value is most likely in the state.
    return (
      <ThemeContext.Provider value={this.state}>
        <UserContext.Provider value={this.state.signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default MultipleAndUpdatingContexts;

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(user) => <ProfilePage user={user} theme={theme} />}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
