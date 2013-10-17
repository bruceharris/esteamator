# User stories

## The Item Estimate screen - exit session

    Given a valid session
    When I view the Item Estimate screen
    A link to exit the session should appear next to my name
    And following that link should remove me from the session
    And update the screens of all participants to indicate I have left
    And navigate to an exit screen that provides a link for me to re-enter the session

## The Item Estimate screen - removing a participant

    Given a valid session
    When I view the Item Estimate screen
    A link to remove a participant from the session should appear next to each participants name
    And if all other participants choose to remove that participant from the session
    That participant should be removed from the session
    And the screens of all participants should be updated accordingly
    And further input from the removed participant should not be honored
    (details of behavior for the removed participant TBD)

## Report - download CSV

## Option for best/expected/worst

## Opt out of estimate - by user or 2 others?

## Editable consensus for each work item

## Option to re-estimate an item

## Collection rules for updates

## When editing fields - should be able to cancel

## Router should validate session

## use blur not change

## user story description should not accept blank

## editing username should not accept blank

## bulk upload user stories

## ensure only first click of "next item" is honored

<!--

# Completed items

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
    And my name should appear on the same screen of all participants

## The Item Estimate screen - participant names

    Given a valid session
    When I view the Item Estimate screen
    The screen should display a list of the names of the session participants

## The Item Estimate screen - item number

    Given a valid session
    The system should keep track of the sequence of items being estimated
    And when I view the Item Estimate screen
    The screen should display the sequence number of the item currently being estimated

## The Item Estimate screen - estimate entry

    Given a valid session
    When I view the Item Estimate screen
    An input box and submit button should appear next to my name
    So that I can submit an estimate for an item

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

## The Item Estimate screen - entering a description

    Given a valid session
    When I view the Item Estimate screen
    There should be a section displaying the description of the item being estimated
    And it should have an edit link that allows me to enter/edit/save the description
    And editing/saving should update the description as displayed on the screens of all participants

## The Item Estimate screen - editing item description

    Given a valid session
    When I view the Item Estimate screen
    I should have the ability to edit the description of the work item after it's been set
    And doing so should update the description as displayed on the screens of all participants

## The Item Estimate screen - editing my name

    Given a valid session
    When I view the Item Estimate screen
    I should have the ability to edit my name
    And doing so should update my name as displayed on the screens of all participants

-->