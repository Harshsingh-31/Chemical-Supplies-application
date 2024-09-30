Chemical Supplies Management Application
1. Overview
This project is a Chemical Supplies Management Web Application built to manage a list of chemicals, including their properties like vendor, density, viscosity, packaging, and quantity. The application allows users to add, edit, delete, and sort chemical entries, providing a seamless user experience for managing chemical inventory.

2. Design Approach
2.1 Frontend Framework
Plain HTML, CSS, JavaScript:
The application is built using vanilla JavaScript, HTML, and CSS for simplicity and scalability. The decision to not use a frontend framework (like React or Angular) was to maintain a lightweight structure with minimal external dependencies.
2.2 Modular Design
The application is designed using a modular approach to keep the code organized and maintainable. Functions responsible for specific tasks are separated into modules to ensure that the project can be easily expanded and maintained.
Key Modules:
Table Management Module: Functions like loadTableData, addRow, deleteRow, and editRow handle CRUD operations on the chemical data.
Row Selection and Sorting Module: Functions like selectRow, moveRowUp, and moveRowDown manage row selection and movement. Sorting is handled by sortTable.
2.3 Data Management
The chemical data is stored as a JavaScript array (originalChemicals) containing objects with properties such as name, vendor, density, viscosity, etc. This structure allows easy manipulation of the data and facilitates the addition of more features in the future.
2.4 User Interface Design
Bootstrap (Optional): Bootstrap was used for styling modal dialogs for editing chemical details. However, this can be replaced with a custom CSS solution for a more tailored design.
Responsive Design: The CSS is designed to ensure responsiveness, providing an optimal experience across different screen sizes such as mobile, tablet, and desktop.
2.5 Key Functionalities
Add Chemical: Allows users to add new chemical details through a prompt-based interface.
Edit Chemical: Provides functionality to update details of existing chemicals via a modal dialog.
Delete Chemical: Lets users delete a selected chemical from the table.
Sort Chemicals: Enables sorting of chemicals by properties such as ID, name, vendor, etc.
Move Row Up/Down: Allows users to select a row and move it up or down within the table.
Save Table: A placeholder function saveTable() for future integration with local storage or a backend database.
Refresh Table: Resets the table to its initial state.
2.6 Error Handling
Basic validation has been implemented for numeric inputs like density, viscosity, and quantity to ensure that users input valid data. Inputs are validated before they are added or edited.

3. Design Choices
3.1 Why Bootstrap (Optional)?
Bootstrap was used to style the modal for editing chemical details because it provides responsive and easy-to-implement UI components. However, it is optional, and the project could be styled entirely with custom CSS for a more unique design.

4. Conclusion
This chemical supplies management application is designed to handle basic CRUD operations, sorting, and user interactions. The design choices focus on simplicity, modularity, and responsiveness, providing a solid foundation for future enhancements and scalability.
