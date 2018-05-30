# Balanced-Parenthesis-Finder-JavaScript
Balancing Parenthesis Using a Small App. It is small fun app to find if parenthesis are Balanced.

app2.js file is another way coding the app.

Algorithm Outline:

  1. create a stack and store it in a variable
       the stack will be used to hold all the opened parentheses in the input string

  2. create two object maps — one for all the open parenthesis characters and one for all the closed parenthesis characters
       for the open parentheses map, set the keys to the open parenthesis symbols and the values to the matching closing parenthesis symbol
       for the closed parentheses map, set the the keys to the closed parenthesis symbols and the values to true

  3. iterate through the characters of the string
       for each character
        *  if the character is an open parenthesis character, push the character onto the stack
        *  else if the character is a closed parenthesis character, then pop off the last opening parenthesis     from the stack and compare it’s closing pair to the current character
            if the character is not equal to the required closing parenthesis symbol, then you have an imbalanced string and should return false

  4. return an equality comparison between the stack length and 0 — if the stack is empty and we have looped through the whole input string, we can assume that we have a balanced string.
