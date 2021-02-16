# React Context Use Cases

A prime use case for using React Context.

The example shows how to consume multiple contexts and how to update context in a nested component **all-in-one**.

Go to `./src/Example/MultipleAndUpdatingContexts.js`.

Ref Link: [React-Context](https://reactjs.org/docs/context.html)

Combined examples from [Updating Context From a Nested Component](https://reactjs.org/docs/context.html#updating-context-from-a-nested-component) and [Consuming Multiple Contexts](https://reactjs.org/docs/context.html#consuming-multiple-contexts), both examples provided by React.

## Preview

![Preview](https://i.imgur.com/jT45Jsj.gif)

## Self-Notes

When using React.createContext(), whatever goes inside the parameters act as a default value. However, that default value is not actually used because the context is declared as a `value` as a prop where the `Provider` tag is declared within JSX.

As shown in the 'Updating Context From a Nested Component' example, the state is sent as a `value` prop where the `Provider` tag is. In that `state`, both variables and functions can be sent along.

If the receiving component needs to update based on context changes, have the component subscribe to changes by using a `Consumer` tag. With the `Consumer` tag as a wrapper, have the component return as an arrow function within `{}` with the receiving `value` props declared. Example: `<ThemeContext.Consumer> {({toggleTheme, theme}) => ( <Container prop={toggleTheme} prop2={theme} /> )} </ThemeContext.Consumer>`

When consuming multiple contexts, "To keep context re-rendering fast, React needs to make each context consumer a separate node in the tree."
