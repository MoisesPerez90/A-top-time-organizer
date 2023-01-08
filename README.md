# Third-Party APIs: Work Day Scheduler

## Behavior

This app was created to implement a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by JQuery.

In order to develop this app, I used the [Day.js](https://day.js.org/en/) library to work with date and time.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

![AppScreenshot](https://user-images.githubusercontent.com/118077086/211221166-6472e633-7077-4c10-a68b-e7b0796b513d.PNG)
