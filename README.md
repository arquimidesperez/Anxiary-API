# Anxiary-API
General Assembly Portfolio Project 2

### Description
Anxiary is a front-end react app utilizing the air table API to enable users to create a virtual diary for users who feel anxiety in their day-to-day life. The application will allow users to write, update, delete, their writings. The app will enable users to search for previous entries by date* and numerically score how their mood is on the given day which they can then view in a calendar view to track their mood/anxiety levels over time.

*undecided if searchable by date or post number

### API
API for this project: https://airtable.com/api

### API Snippet
```
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appdPcv2eTjIOH8ZJ');

base('Table 1').create([
  {
    "fields": {
      "Date": "2021-06-07",
      "Notes": "Oh Boy, I hope this gets approved",
      "Mood": "4",
      "Title ": "A Second Project"
    }
  },
  {
    "fields": {
      "Date": "2021-06-07",
      "Notes": "Oh Boy, I hope this gets approved",
      "Mood": "4",
      "Title ": "A Second Project"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
```

### Wireframes
<img width="826" alt="Screen Shot 2021-06-07 at 9 36 18 AM" src="https://user-images.githubusercontent.com/67838784/121026246-f1fd2e00-c773-11eb-8241-ffdece5e4ac9.png">
<img width="786" alt="Screen Shot 2021-06-07 at 9 36 26 AM" src="https://user-images.githubusercontent.com/67838784/121026253-f3c6f180-c773-11eb-9ee8-b19a9a9126b9.png">


### Component Hierarchy
<img width="782" alt="Screen Shot 2021-06-07 at 9 08 29 AM" src="https://user-images.githubusercontent.com/67838784/121023493-54a0fa80-c771-11eb-91ce-22dc3118ef40.png">

### MVP
* Enable user to write, edit, delete posts
* Enable user to search through previous entries
* Enable user to track their mood-timeline


### Post-MVP
* Media queries for users on Mobile vs. Desktop
* User authentication (login/password)


### Goals

| Day    | Deliverable                                                                    | Status |
| ------ | ------------------------------------------------------------------------------ | ------ |
| June 7 | Prompt Approval - API Set-UP                                                   |        |
| June 8 | React Components                                        |        |
| June 9 | React Classes |        |
| June 10 | CSS Styling & Media Queries - Flexbox                |        |
| June 11 | User Authentication (Post MVP)                  |        |


### Timeframes
| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| API Set-UP              |    H     |    2 hours     |         |       |
| AirTable Get, Post, Delete  |    H     |    3 hours     |            |         |
| React Components  |    H     |    3 hours     |            |         |
| React Classes  |    M     |    3 hours     |            |         |
| CSS Styling  |    M     |    3 hours     |            |         |
| Media Queries  |    H     |    3 hours     |            |         |
| User Authentication  |    L     |    3 hours     |            |         |


### Code Snippet


### Change Log


### Deployed Link

