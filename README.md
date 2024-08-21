```markdown
# TaskX - To-Do List Application

TaskX is a simple, responsive to-do list application built using React and Tailwind CSS. It allows users to add, update, delete, and mark tasks as complete. The app also includes a Navbar, Footer, and maintains the task list even after a page refresh by storing it in `localStorage`.

## Features

- **Add a Task:** Enter a task in the input field and click the "Add" button to add it to your list.
- **Edit a Task:** Click the "Edit" button next to a task to modify its text.
- **Mark as Complete:** Click the "Complete" button to mark a task as completed or to undo the completion.
- **Delete a Task:** Click the "Delete" button to remove a task from the list.
- **Persistent Storage:** Tasks are saved in `localStorage` and persist across page refreshes.
- **Responsive Design:** The application is responsive and looks great on all devices.
- **Sticky Footer:** The footer is always attached to the bottom of the page, even if there is minimal content.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/taskx.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd taskx
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

- **`Navbar.js`**: The navigation bar for the application, displaying the site name and navigation links.
- **`Footer.js`**: The footer that stays attached to the bottom of the page.
- **`App.js`**: The main component where the to-do list logic resides.

## Usage

1. **Adding a Task:**
   - Enter a task in the input field at the top and click the "Add" button.
   - The task will appear in the list below.

2. **Editing a Task:**
   - Click the "Edit" button next to the task you want to modify.
   - Modify the task in the input field that appears and click "Save".

3. **Marking a Task as Complete:**
   - Click the "Complete" button next to a task to mark it as done. The task will be crossed out.
   - Click the button again to mark it as incomplete.

4. **Deleting a Task:**
   - Click the "Delete" button next to a task to remove it from the list.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **localStorage:** Web storage API to store tasks persistently in the browser.
