# CARE Coding Challenge

## Problems and Solutions

### Dummy-API

Since I can't update the API-Data, he will not find new Posts when I want to edit and delete them. I still wanted to show how its done but it will result in a 404-Error. I worked with the data in the frontend it to show the state changes but I also made the API-Errors visible.

### Query Limitations

Due to limitations to the API I couldn't order the response within the query (e.g. ?order=desc). since I normally wouldnt know the size it wouldn't make sense to work with limit and skip since I would need only the last 50. Therfore I queried all posts and managed/limited them in the frontend.
https://dummyjson.com/docs#intro-limit

## Used Libraries/Packages

### Taiwind/Daisy UI

Used to make a quick, pretty and functioning UI. Since not information was given I concluded no a costum solution is needed. I also used the Daisy UI modal solution.

### Axion

I prefer Axion when working with APIs instead of fetch. It's a bit simplyfied and prettier in my opinion.

### Toastify

Toastify is used to make simple error- and success-messages.

## What I tried to archieve

### I tried to archieve to fullfill all requirements from the task.

### I tried to build it so it can be scaleable.

In case of more forms/modal-types, additional API-Calls ...

### I tried to make the code understandable and made different files for differen purposes

Using the PostContext as a controller to share functions and states, using the PostApiAction.js only for API-Calls and the PostReducer.js to manage all the states.
Also I created a layout-folder for shared, layout-specific, jsx-files.
And a helper-folder for small helper-functions.

### I tried to make a userfriendly UI/UX

I stuck to the well-made Daisy-UI-Look and adjusted it with Tailwind classes.
I only added a few lines of CSS which I simply put in the index.css since it was only a small amount.
Normally I would create a CSS/SASS-File for every compnent or component-group.

## Further optimization (which I didn't include)

At the moment there is an User-API-Call for every unique user out of the existing posts. If a new post is added, it gets called for every unique user again.

If I had more time I would store the users in a state or maybe localstorage.
If one or more User-Ids are not found, query the users and add them to the user-array.
If not, don't fire API-Calls and use the userarray locally.

## The task

Render a list of posts served by an API and allow creating new ones as well as updating and deleting existing ones.

- Use the API at https://dummyjson.com/ to request the first 50 posts and render them in a list.
  - Each post should contain the title, the body, the number of reactions, the list of tags and the first and last name of the post's user.
  - Each post should have two interactive elements: an edit and a delete button.
- Somewhere on the page, there should be a button for creating new posts.
- The create and edit buttons should open a modal dialog containing a form for setting the post's title and body.
  - There should be a confirm button in the modal that - when clicked - calls the respective API endpoint (add or update post), and as soon
    as the server responds, the modal should close and the changes should be visible in the list of posts.
  - There should be a close button in the modal that closes the modal and discards any changes made.
  - There should be an error message if either the title or body are empty.
- The delete button should open a modal dialog asking the user to confirm if they really wish to delete the post.
  - There should be a confirm and a cancel button in the modal.
  - Clicking the confirm button should call the delete post API endpoint. As soon as the server responds, the modal should close and the
    post should be removed from the list.
- During all server requests, a loading state should be shown.

Technical details

- For all intents and purposes, the active user will always be the user with the id 1. Any new posts should be made as user 1. The user may
  only edit and delete posts made by user 1. There is no need to bother with authentication, let's just assume we are always user 1.
- Any requests made to the API using write operations will not be persisted on the server. This is fine: A browser refresh should simply
  cause the original list of 50 posts to be shown again.

Constraints and freedoms

- You should use React to complete the task.
- You are free to use (or not use) any additional frameworks or libraries - whatever you are comfortable with and consider appropriate for
  the task.
- Feel free to add comments if you'd like to share your thought processes. This is optional but might help us understand why you did things
  a certain way.

What we're paying attention to

- Architecture; whether everything has its place, is maintainable and extendable and avoids overengineering
- Clean code; whether you picked a certain code style and stuck to it
- Bugs
