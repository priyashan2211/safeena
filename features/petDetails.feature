Feature: pet details

    Scenario: Verify pet details
        Given User is on pet clinic website
        And User is on "FIND OWNERS" page
        When User is navigate to "Add Owner" page
        And User is on "Add Owner" page
        When User is navigate to "Add Pet" page 
        And User is on "Add Pet" page
        Then Verify all pet details displayed in type
