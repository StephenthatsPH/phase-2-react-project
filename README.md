# PlanIT PlantIT
The idea behind PlanIT PlantIT is that I wanted some where to go any easily be able to find plants for my garden, hence the name. It can also be used for other matters whether that be for a research paper, landscaping plans, trying to find out if that crazy itch that won't go away happened because you didn't realize you walked bare foot into a patch of poison ivy. Don't worry we got you. Our archive lists includes flowers, trees, bushes, and more.

# How to use
1. Fork and clone this repository
2. cd into the file directory and enter in `npm install`
3. Next to open it enter `code .`
4. Once open enter `npx json-server --watch db/db.json --port 8000` into the terminal
5. Finally to start the page open a new terminal and enter `npm start`

# Features
## Current Features:
   * Plants listing page
   * create new (with a category association as part of the data)
   * delete existing

# Project Overview


### MVP Requirements

* 5 components
    1. Home
    2. Header
    3. Plants
    4. Navbar
    5. Form

* 3 Client-side Routes
    1. Home - /
    2. Plants - /plants
    3. Form - TBD

* JSON server

# What I would eventually like to do:
### SuperUser/Admin views
CRUD for each section of your store.  Category and Product
### Category
   * list all
   * create new
   * update existing
   * delete existing
### Product
   * list all
   * create new (with a category association as part of the data)
   * update existing
   * delete existing
### Second Customer view
* show all categories
    * show all products for a given category
* allow customer to add product to cart
* shopping cart
    * update quantity
    * remove item
    * show items currently in cart
* checkout
    * calculate total in cart Sum(product price * quantity)