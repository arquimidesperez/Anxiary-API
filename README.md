# Anxiary-API

## Project Description
>Anxiary (Anxiety + Diary) is a front-end react app utilizing the air table API to enable users to create a virtual diary for users who feel anxiety in their day-to-day life. The application will allow users to write, update, delete, their writings. The app will enable users to search for previous entries by date or id and numerically score how their mood is on the given day which they can then view in a calendar view to track their mood/anxiety levels over time. 

## Deployed Link
Anxiary: https://anxiary.netlify.app/

## Index
- [MVP](#mvp)
- [Goals](#goals)
- [API](#api)
- [API Snippet](#api-snippet)
- [Wireframes](#wireframes)
- [Component Tree](#component-tree)
- [ERD Model](#erd-model)
- [Project Schedule](#project-schedule)
- [Timeframes](#timeframes)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)

## MVP
- Enable user to write, edit, delete posts
- Enable user to search through previous entries
- Enable user to track their mood-timeline

## API
API for this project: https://airtable.com/api

## API Snippet
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

## Wireframes
<img width="826" alt="Screen Shot 2021-06-07 at 9 36 18 AM" src="https://user-images.githubusercontent.com/67838784/121026246-f1fd2e00-c773-11eb-8241-ffdece5e4ac9.png">

<img width="825" alt="Screen Shot 2021-06-07 at 9 37 49 AM" src="https://user-images.githubusercontent.com/67838784/121026373-10632980-c774-11eb-9a58-534d52cbec88.png">
<!-- 
## Component Hierarchy
<img width="782" alt="Screen Shot 2021-06-07 at 9 08 29 AM" src="https://user-images.githubusercontent.com/67838784/121023493-54a0fa80-c771-11eb-91ce-22dc3118ef40.png"> 
-->

## Project Schedule

| Day    | Deliverable                                                                    | Status |
| ------ | ------------------------------------------------------------------------------ | ------ |
| June 7 | Prompt Approval - API Set-UP                                                   |    ✅  |
| June 8 | React Components                                                               |    ✅  |
| June 9 | React Classes                                                                  |    ✅  |
| June 10 | CSS Styling & Media Queries - Flexbox                                         |    ✅  |
| June 11 | User Authentication (Post MVP)                                                | W.I.P  |

## Timeframes
| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| API Set-UP              |    H     |    2 hours     |     2 hrs     |    2 hrs     |
| Get, Post, Delete       |    H     |    3 hours     |     2 hrs     |    2.5 hrs   |
| React Components        |    H     |    3 hours     |     4 hrs     |    4.5 hrs   |
| React Classes           |    M     |    4 hours     |     4 hrs     |    4 hrs     |
| CSS Styling             |    M     |    4 hours     |     4 hrs     |    4 hrs     |
| Media Queries           |    H     |    4 hours     |     4 hrs     |    4 hrs     |
| User Authentication     |    L     |    3 hours     |     3 hrs     |    3 hrs     |
| Total                   |          |    23 hours    |    23  hrs    |   24 hrs      |

## Post-MVP
- Media queries for users on Mobile vs. Desktop
- User authentication (login/password)

## Code Showcase
EditViewEntries.jsx
```
  const { id } = useParams();
  const [editEntries, setEditEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEntry(id);
      setEditEntries(response.fields);
    }
    fetchData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditEntries((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = editEntry(id, editEntries);
  }
```