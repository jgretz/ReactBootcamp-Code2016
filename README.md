# React Bootcamp

# Day 1
This day is all about setting a foundation for React. We are going to iteratively build out a project throughout the day. Since we are working inside of React for the entire day, there are going to be  some things we are going to touch but not explain until later. There will also be some "non-ideal" code to start. Be patient ...

## Lab 1
### Context:
The point of this lab is pretty simple.

### To Do:
1. Run ``` npm install ```
2. Checkout the starting place - ``` git checkout day1-start ```
3. Run ``` npm start ``` and make sure you see a web page.

## Lab 2
### Context:
We are going to get familiar with some of the ES6 syntax.

### To Do:
1. Convert the Heroes function to a class
  1. Add ``` { Component } ``` to the react import
  2. Move "html" code into a render method
  3. Change the export to just be 1 line
2. Add a constructor, and set an array of items
3. Use the property shorthand syntax ``` const { } = obj ``` to get our items in the render method
4. Use string interpolation to print out the items
  1. Use ``` { } ``` to wrap the string in the html

## Lab 3
### Context:
This lab is going to focus on getting you comfortable with JSX. Because we are using ReactDom, this is going to feel like you are writing HTML

### To Do:
1. Use ``` .map ``` rather than explicit index calls
2. Create a render list method and factor out the list render
3. Create a render list item method and factor out the list item render
4. Add a style to the list item to set the label style
5. Add a section after the header with a text box and a button
  1. These won't do anything for now

## Lab 4
### Context:
We are going to make some components

### To Do:
Create the following components
1. Input
  * This won't do anything beyond display still
  * This should be a class
2. List
  * This should be a stateless component
3. List Item
  * This should be a stateless component

## Lab 5
### Context:
We are going to hook up state, and start making our form do something

### To Do:
1. Add class-autobind into Home and Input
2. Move our pre-populated list to state
   * Start with an empty array
3. Add change methods to input to handle typing into the box
4. Expose a functional property on input to capture the user hitting "add"
5. Update state in home when the user presses add

## Lab 6
### Context:
We are going to quickly play around with HMR

### To Do:
1. Change the list's ol to a ul, save
2. Change the font size and color of h1
3. Change the color of the h2
4. Give the input some style

## Lab 7
### Context:
In this lab, we are going to play with lodash

### To Do:
1. Add a render hero method that prints out the properties of the hero
  1. Don't manually do it
  2. Omit the comics property
2. Add a method to render heroes in alphabetical order
  1. Add an appropriate header
3. Render the most popular hero (defined by having the most comics)
  1. Add an appropriate header

## Lab 8
### Context:
In this lab, we are going to get familiar with promises

### To Do:
1. Create a file in actions name load_heroes
  1. Export a function named loadHeroes that returns a promise that delays for a second, then resolves to the array of heroes supplied
  2. Use the delay method that lodash supplies
2. Make the initial state in home an empty array
3. Import the loadHeroes function in home, call it in componentWillMount, update the state appropriately

## Lab 9
### Context:
We are going to get some data from an external source. Please note, I only get 3000 calls a day, if you
want to use this key beyond what we are going to do, get your own key - its free ...

### To Do:
1. Update the load_heroes file to use fetch or axios rather than return a static array
2. Use the following information
  1. method: get
  2. url: https://gateway.marvel.com:443/v1/public/characters
  3. import the function from the util/marvel file. expand the result of this function into the params of the call
  4. parse the response from marvel into the same form we need
  5. your going to have to omit some more properties too
3. Add a new loadHeroesNamed function that will be exported
  1. factor the code as desired
  2. accepts a string
  3. use the nameStartsWith parameter of the api to filter the results
  4. add a parallel call into componentWillMount to load heroes that start with a letter of your choice
  5. add state and a list to display the heroes added above

---------------------------------------

# Day 2
This day is all about take our React skills to the next level

## Prep
1. Checkout the starting place - ``` git checkout day2-start ```
2. Run ``` npm start ``` and make sure you see a web page.

## Lab 1
### Context:
We are going to move our data out to redux

### To Do:
1. Convert the loadHeroes actions to use redux thunk or redux promise
2. Add a reducer for the hero results
3. Add the logic to connect the home component to redux

## Lab 2
### Context:
In this lab, we are going to play with routing

### To Do:
1. Make the Heroes Component show when the user goes to Index
2. Hook up the menu for heroes, comics, creators, and stories by adding routes, and links
3. Add the ability to specify nameStartsWith for heroes via the route (all the way through the action creator)
4. Import Link from react-router and convert ``` <a> ``` to ``` <Link> ``` in the menu

## Lab 3
### Context:
We are going to add some style to the site

### To Do:
1. Abstract the variables at the top of the page out to their own file and import it properly into the root styles
2. Add a menu file, and then add the code to style the menu a bit, at least by:
  1. Put some width between the items
  2. Add a cursor when you hover
  3. Add a new color into the variables, and then make the color of the menu links that

## Lab 4
We are going to bring in [React-Bootstrap](https://react-bootstrap.github.io/components.html)

### To Do:
1. Convert the menu to a Nav
2. Convert the list to a table, use striped and bordered as a style
  1. Make name and description the two columns
