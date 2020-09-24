# Homework 4 Quiz App Readme

## What we needed to do

We needed to make a quiz application that did the following:

1. Asked a series of questions, with multiple choice answers
2. Added points for correct answers
3. Deducted from the play time for incorrect answers.
4. Ended when either all questions were answered or the time was finished.
5. Allowed the user to store their score and compare it with others.

## Let's start

To begin with, I sketched out the pieces I'd need to make this work.
I need the following

1. An array of questions and answers
2. An interface to display the questions
3. A way to check the user input against the correct answer in our question array
4. A way to award points for correct answers
5. A timer that reduces in time for incorrect answers.

Great. Now I have a starting point. I began by designing the basic layout of the quiz page, with its various parameters in HTML.
I made

1. An overall container element.
2. A timer
3. Our question box which contains radio buttons for our multiple choice selections.
4. A submit answer button.

I also created a separate div, called "result" that is hidden by default, but will display once the win/lose conditions are met.

Next, I styled these elements using CSS to look a little nicer. I liked using the border radius tool to round them boxes! I also used the :hover command to allow the user to highlight their option.

Now, I created a file called questions.js, and created an array of objects that will serve as our question and answer pool. I purposefully kept this separate from our main script for the sake of brevity.

Finally, I began coding the actual javascript. Let's dive into it.

## The Javascript!

I've added a lot of comments in the quiz-script.js file which explains what all my script does. Check it out!