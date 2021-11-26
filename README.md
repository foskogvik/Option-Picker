# Option-Picker

This project is based on the "Indecision App" from Andrew Meads React course on udemy. https://udemy.com/course/react-2nd-edition/
I have edited the application to use the JSON-server project which let's you create a mock database for use with frontends. https://github.com/typicode/json-server.
I have also used styled-components in place of SCSS for styling.

There is a flaw in how id's are incremented as it consistently goes up from 1 when your start. So if you delete and reenter an entry. it will start from 2.
This goes on until the running instance is refreshed.
This is due to the way JSON-Server auto-inciments entries. I have yet to find a work around.

Hosted at vercel: https://option-picker.vercel.app/
