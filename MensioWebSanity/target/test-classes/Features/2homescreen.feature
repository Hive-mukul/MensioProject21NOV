@Sanity
Feature: Check all items visibility on home screen

@brandedcontent
  Scenario: Verify all the Branded Content Cards are visible
    Then Television by Brand card is visible
    Then Television by Team card is visible
    Then Television Team as Brands Card is visible
    Then Streaming Originals Card is visible
    Then Theatrical Releases Card is visible
    Then Social Card is visible

  @adintelligence
  Scenario: Verify all the Ad Intelligence Cards are visible
    Then Creative Explorer Card is visible
    Then National TV Ad Intelligence Card is visible
    Then Cross-Platform Ad-Intelligence Card is visible
    Then National TV eCPM Card is visible
