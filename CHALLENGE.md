## Introduction

At Capturi, one of the core tools we use to deliver conversational insights is our _trackers_ feature. A _tracker_ is a configuration consisting of a list of words and phrases that you want to track in customer conversations, which speaker to track in the call and several other properties.
Trackers will be processed on all incoming conversations and will provide crucial insight into customer inquiries, critical problems, potential for improvement and other forms of business-critical knowledge for Capturi customers.
Fx. a customer service center might configure one of their trackers to target the customer when the customer uses words that represent frustration. Similarly a sales department might configure a tracker that targets the sales agent to make sure the sales agent opens customer calls with certain phrases that characterize openings of succesful sales calls.

## Challenge

You will be building a single page application to manage trackers. The app should include a list of all trackers in the app and allow the user to create a new tracker.

A simple API is provided: [API documentation](./api/README.md)

### Tasks

- On the main route `/` list all trackers in some manner.
   - It should be possible to delete a tracker in the list.
   - Make it possible to filter the list on the `speaker` property of a Tracker (client side filtering).
- Support adding a new tracker on the route `/new`
   - Validate all properties of the tracker
   - The phrases of a tracker follow certain rules. Implement a strategy to validate the following criteria continuously during editing and make sure that it is indicated in the UI which rule(s) any given phrase violates.
      1. A phrase is considered **short** if the length of the phrase is less than 5 characters.
      2. A phrase is considered too **long** if it contains more than 4 words.
      3. **Duplicate** phrases are not allowed
      4. Phrases should be checked to see if they contain words **unknown** to our dictionary (See the [Dictionary API](api/README.md#Dictionary-API) ).
- Support editing an existing tracker on the route `/edit/:id`
- Add loading states in the UI where appropriate (All requests to the API will have a random latency applied)

## General requirements
A single page application using **React** with **Typescript** including:

- A visually pleasing experience. You don't have to be a designer but you must have put an effort into making this look good
- A component-based approach: split your code into small building blocks, showcase your clean architecture skills.
- The use of any libraries or frameworks as long as you can explain to us why you chose them.
- A brief description of your project. How long did it take? Which part was the hardest to implement? What functionalities are you most proud of? Future work and shortcomings?
- We appreciate that this can be time consuming. If you are short on time then leave something out. But let us know how you would have approached that part in the documentation.

## What we're looking for

- Production grade code (clean, maintainable, reusable code)
- Showing your work through your commit history
- Polish and visual creativity
- Pride in craftsmanship

## Practicalities

When you are ready to work on the challenge, fork this repository and do your magic.
Once you are ready to submit your work, share the link to your repository with us. If you prefer to keep it private, we will provide you with some emails to invite to the repository.

We are looking forward to seeing your solution. Enjoy!
