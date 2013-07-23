* [User Stories]()
* [Infrastructure Stories]()

# User stories

## Creating a session

    As a user
	I'd like to be able to create a new estimation session
	And get a URL containing the new session ID
	So I can share the URL with my teammates
	So they (and I) can join the estimation session

## Joining a session for the first time

    As a user
    Given a URL for a valid session
    When I browse to the session URL for the first time
    I should be prompted to enter my name
    And upon submitting
    My name should be added to the list of participants in that session
    And I should enter the estimation session

## Entering an estimation session that I've joined

    Given I have joined a valid session
    When I enter the session
    I should see the Item Estimate screen for the item currently being estimated in the session

## The Item Estimate screen - user name

    Given a valid session
    When I view the Item Estimate screen
    My name should be displayed on top
    And I should have the ability to leave the session or edit my name

## The Item Estimate screen - entering a description

    Given a valid session
    When I view the Item Estimate screen
    There should be a section displaying the description of the item being estimated
    And it should have an edit link that allows me to enter/edit/save the description

## Remembering name upon joining a session for the first time

    As a user
    Given a URL for a valid session
    When I browse to the session URL for the first time
    Upon submitting my name
    My browser should remember that my name is associated with this session
    So that I can rejoin the session via URL without re-entering my name

## Rejoining a session

    As a user
    Given a URL for a valid session
    When I browse to the session URL for a session that I've already joined
    My browser should remember that my name is associated with this session
    And I should enter the estimation session without being prompted for my name

# Infrastructure stories

## Application structure

    As a developer
    I need to determine if we should have separate API and UI servers
 
## Libraries

    As a developer
    I need to determine which libraries/dependencies to use in the project
    To meet the following needs:

* Server side...
  * General node server framework
    * express?
    * hapi?
* Both server and client side...
  * Testing JavaScript 
    * Jasmine or Mocha? Others?
  * Websocket management
    * socket.io
  * Promises ?
    * Q
* Client side...
  * General
    * underscore.js
  * module management
    * Browserify, or Require.js?
  * DOM abstraction
    * jQuery or Zepto?
  * Model View management
    * Backbone (Angular/Ember likely heavier than necessary for this app)
  * CSS management
    * SASS, LESS, or Stylus? Others?

## CI and Deployment

    As a developer
    I need to determine which tools/services we will use for CI and deployment

* Continous Integration
  * Travis CI?
* Deployment
  * Joyent cloud or Nodejitsu? Others?