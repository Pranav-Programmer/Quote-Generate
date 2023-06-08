
# Quote Generator React Component

The Quote Generator React Component is a reusable component that displays random quotes. It can be easily integrated into a React.js web application to add a dynamic and interactive quote feature. This component fetches quotes from an external API and allows users to generate new quotes with a click of a button.
## Installation
To use the Quote Generator React Component in your React.js web application, follow these steps:

1. Install the necessary dependencies:

```bash
  npm install @material-ui/core
```

2. Copy the 'Quote.js' file into your project's component directory.
3. Import the 'Quote' component in your desired location:

```bash
  import Quote from './components/Quote';
```

4. Place the 'Quote' component in your JSX markup:

```bash
  function App() {
  return (
    <div>
      {/* Other components */}
      <Quote />
      {/* Other components */}
    </div>
  );
}
```

5. Customize the appearance and behavior of the component by modifying the provided CSS classes and the 'fetchQuote' function.

6. Run your React.js application and see the Quote Generator component in action!

## Component Features

The Quote Generator React Component offers the following features:

* Fetches random quotes from an external API.
* Dynamically updates the background color of the quote container.
* Allows users to generate new quotes with a click of a button.
* Displays a loading spinner while fetching quotes.
* Provides customizable CSS styles to match your application's design.

https://user-images.githubusercontent.com/79044490/229070942-95996bb5-6c6e-4adc-91e8-f4ca1725b440.mp4

## Customization

You can customize the appearance and behavior of the Quote Generator React Component by modifying the provided CSS classes and the 'fetchQuote' function.

* CSS classes: The component uses Material-UI's 'makeStyles' hook to define CSS styles. You can modify the 'quoteContainer', 'button', and other classes in the 'useStyles' hook to change the component's appearance.

* 'fetchQuote' function: The 'fetchQuote' function retrieves quotes from the "https://type.fit/api/quotes" API. You can customize the API endpoint or modify the logic inside the function to fetch quotes from a different source.


## 🚀 Credits

The Quote Generator React Component was created by Pranav Dharme and is inspired by various online resources and tutorials.

Happy coding!
