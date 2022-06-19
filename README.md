# OpenCourseware 


## Fully responsive single page application made using React and Django!

### TECH USED
  -   React
  -   Django
  -   Postgresql

---

## Getting Started

Clone the repo to your local environment, you have to seperately install all the dependencies for backend and frontend. 

For Backend, go to the backend folder (cd Backend) and setup the virtual environment 

    ## Create a virtual environment
    ```powershell
        python -m venv environment_path
        env\Scripts\Activate
    ```

For Frontend, go to the frontend folder (cd Front-end) and run
``` npm i ```


To run a development environment, you can use the `npm start` command. This will start up a development web server on port 3000 for frontend

To run development backend server use ``` python manage.py runserver ``` command

Note: you have to do run backend and frontend seperately.

## 🏭 Features

#### Student
- [x] **Authentication system** with signup,login,otp verification,resend otp,forgot password (fully validated with bootstrap alerts)
- [x] **Redux store** to easily manage states
- [x] Homepage with courses being fetched categorically
- [x] **Recommended Courses** based on user's preferences
- [x] CoursePage with all the content of the course
- [x] **Searching** based on course
- [x] Download **resourses** (pdf - notes)
- [x] Responsive React Video player for videos
- [x] **Rating** and **Review** of Courses
- [x] **QnA** for each course/topics
- [x] **Quiz** for each course
- [x] **Certification** after completion of course and quiz

#### Teacher
- [x] Proper Authentication system with signup,login,forgot password
- [x] Fully validated teacher uploading form with description,title,Image and other details
- [x] Teacher can upload videos 
- [x] Teacher can upload required resources for the course
- [x] Teacher can add Quizes for the course
- [x] Teacher can see their uploaded courses
- [x] Teacher can delete their course
- [x] Teacher can edit their courses
- [x] Teacher can view their course ratings and review
- [x] Teacher can provide answers to questions asked by students

## Screenshots
 ---
 ### Main Screens

 #### Homepage
![alt text](https://raw.githubusercontent.com/Aayushshah196/IOE-OCW/main/assets/sample1.png)

#### User Courses
![alt text](https://raw.githubusercontent.com/Aayushshah196/IOE-OCW/main/assets/mycourses.png)

#### Course Page
![alt text](https://raw.githubusercontent.com/Aayushshah196/IOE-OCW/main/assets/coursedetails.png)

#### Course Details
![alt text](https://raw.githubusercontent.com/Aayushshah196/IOE-OCW/main/assets/coursevideo.png)

#### Teacher Uploading Details
![alt text](https://raw.githubusercontent.com/Aayushshah196/IOE-OCW/main/assets/courseform.png)

#### Teacher Uploading Videos
![alt text](https://raw.githubusercontent.com/Aayushshah196/IOE-OCW/main/assets/lessonform.png)





