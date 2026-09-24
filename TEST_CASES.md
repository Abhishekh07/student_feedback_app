# Test Cases - Student Feedback Web Application

## Project Name
Student Feedback Web Application Using DevOps Tools

## Objective
To verify that the Student Feedback Web Application works correctly for
valid inputs, invalid inputs, rating selection, feedback submission,
statistics calculation, and responsive design.

---

## Test Case Table

| Test Case ID | Test Scenario | Test Input | Expected Result | Status |
|---|---|---|---|---|
| TC-01 | Submit valid feedback | Valid name, course, rating and feedback | Feedback should be displayed in Student Voices | PASS |
| TC-02 | Empty student name | Name left blank | Form should prevent submission | PASS |
| TC-03 | Course not selected | Course left unselected | Form should prevent submission | PASS |
| TC-04 | Feedback character limit | Enter more than 300 characters | Feedback should be limited to 300 characters | PASS |
| TC-05 | Five-star rating | Select 5 stars | Five filled stars should appear in feedback | PASS |
| TC-06 | Multiple feedback submissions | Submit feedback from multiple students | All feedback entries should be displayed | PASS |
| TC-07 | Statistics calculation | Submit ratings 5, 4 and 3 | Total = 3 and Average = 4.0 | PASS |
| TC-08 | Responsive design | Open application on mobile screen | Website should adjust to mobile screen | PASS |
| TC-09 | Feedback character counter | Type feedback text | Character counter should update automatically | PASS |
| TC-10 | GitHub Pages deployment | Push project to main branch | Website should deploy through GitHub Actions | PASS |

---

## Detailed Test Cases

### TC-01: Submit Valid Feedback

**Input:**
- Student Name: Abhishek
- Course: Data Science
- Rating: 5 Stars
- Feedback: The course content is very useful.

**Expected Result:**
The feedback should appear in the Student Voices section.

**Status:** PASS

---

### TC-02: Empty Student Name

**Input:**
- Student Name: Empty
- Course: Data Science
- Rating: 5 Stars
- Feedback: Good learning experience.

**Expected Result:**
The form should prevent submission because the student name is required.

**Status:** PASS

---

### TC-03: Course Not Selected

**Input:**
- Student Name: Abhishek
- Course: Not selected
- Rating: 5 Stars
- Feedback: Good learning experience.

**Expected Result:**
The form should prevent submission because the course is required.

**Status:** PASS

---

### TC-04: Feedback Character Limit

**Input:**
Enter more than 300 characters in the feedback box.

**Expected Result:**
The feedback field should not allow more than 300 characters.

**Status:** PASS

---

### TC-05: Star Rating

**Input:**
Select 5 stars.

**Expected Result:**
The submitted feedback should display:

★★★★★

**Status:** PASS

---

### TC-06: Multiple Feedbacks

**Input:**
Submit feedback from multiple students.

**Expected Result:**
All submitted feedback entries should appear in the Student Voices section.

**Status:** PASS

---

### TC-07: Statistics Calculation

**Input:**
Submit three feedbacks with ratings:

- 5 Stars
- 4 Stars
- 3 Stars

**Expected Result:**

Total Feedback:

3

Average Rating:

4.0

**Calculation:**

(5 + 4 + 3) / 3 = 4.0

**Status:** PASS

---

### TC-08: Responsive Design

**Input:**
Open the application on a mobile-sized screen.

**Expected Result:**
The website should automatically adjust its layout to fit the smaller screen.

**Status:** PASS

---

### TC-09: Character Counter

**Input:**
Type text into the feedback box.

**Expected Result:**
The character counter should automatically update, for example:

0 / 300

45 / 300

100 / 300

**Status:** PASS

---

### TC-10: GitHub Pages Deployment

**Input:**
Push the project to the `main` branch.

**Expected Result:**
GitHub Actions should execute the CI/CD workflow and deploy the website to GitHub Pages.

**Status:** PASS

---

## Testing Conclusion

All defined test cases were executed successfully. The application
correctly handles user input, validation, feedback submission, ratings,
statistics, character limits, responsive design, and GitHub Pages
deployment.