# Unit 08 Project 1 Homework: Professional Materials

Updated portfolio page.


### ⭐ DEPLOYED SITE

[Click here](https://lauren-briggs.github.io/portfolio/).

![Screenshot of deployed site](assets/images/portfolio.png)
## Requirements

* Submit an updated portfolio featuring Project 1 and two exemplary homework assignments.

* Submit an updated GitHub profile with pinned repositories featuring Project 1 and two exemplary assignments.

* Submit an updated resume

* Submit an updated LinkedIn profile

## Updated Portfolio

Your updated portfolio should:

1. Display your full name, email, and phone number

2. Have links to your GitHub profile and LinkedIn profile

3. Have a link to a downloadable PDF of your resume

4. Display at least 2 examples of student work from either deployed projects or homeworks. For each project, make sure you have the following:

    * Project title

    * Link to the deployed version

    * Link to the GitHub repository

    * Screenshot of the deployed application

5. Have a polished, mobile-responsive user interface.


# portfolio -- WEEK 02
Portfolio, week two homework

For this website I started by defining the header, h1 and nav tags. The header is inline-flex to allow for the nav list items to be side by side.

I created a section for the background img in html, but actually linked the img in css. I had some issues positioning the subtitle - it is still not perfect and isn't super responsive. I thought it should be relative but it wouldn't work properly unless absolute.

For the grid - I tried doing the whole thing flex but in the end decided to create a grid which I think worked well. 

I then used a flex display with flex wrap for the project boxes, and made the min width for the first box to be 50vw, larger than rest of the boxes so they would be forced onto the next row.

To mimic the hover effect on the project imgs, I set the regular opacity to 0.8, and used the pseudo class :hover and changed the opacity to 1

It was already largely responsive because of the flex grid and because I had used vw - but one of the main changes I made using media query was the alignment and flex-direction of the nav and contact links.

I did have trouble with the positioning of the contact links on a narrower screen - I couldn't figure out why they were getting pushed the the bottom.

Thanks :)
