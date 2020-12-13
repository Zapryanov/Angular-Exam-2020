# Angular-Exam-2020
 My-First-Angular-Exam

The App is a SPA for advertizing car ads.

Project setup:
    In REST-API:
        npm install
    
    In real-exam:
        npm install

To start the BackEnd, open CMD in REST-API and use the command "npm start" 
To start the Angular App open CMD in real-exam and use command "ng serve"

Generated with Angular CLI:
    Angular CLI Version: 10.2.0
    Node: 14.15.0

Usage of cloud storage:
    - Atlas (MongoDb) - (Here store all info about each car)

LoginPage and RegisterPage both has validation:
    - the Username must be at least 3 characters long
    - Password and Re-Password must be the same.

The application have PUBLIC part and PRIVATE part.

The Public part is:
    At the top right of the header section, username is "Guest".
    The user can see all the ads and view the details, but CANNOT CREATE ads because the button to create an ad is NOT DISPLAYED. The buttons for Deleting and Editing even his ads are NOT DISPLAYED. He can only look.

The Private part is:
    When the user is logged in, the username appears on the page at the top right of the header section and he can create ads. He can look at all the ads again, but here the buttons for deleting and editing these ads, which only he has created, are already displayed.
    A button for the Profile page already appears, which shows how many ads there are and the ads themselves are displayed.

Both - Public and Private parts has a this functionallity:
    If there are no existing ads at all, a page with a default photo is displayed with a caption inviting the user to log in or register if he is not registered and create an ad if he wants to sell a car.

Creating Car Ad:
    When creating a car, all fields are required except for the photo field. If no photo is added, the application adds a default one.

Good User Interface:
    - Loading spinner animation, when refresh the App and make request to database;
