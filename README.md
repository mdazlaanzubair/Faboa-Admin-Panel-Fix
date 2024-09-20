# Faboa Admin Panel - Code Audit and Refinement

## Overview

This repository is for the task focuses on auditing and refining the existing codebase for the Faboa Admin Panel. The aim is to optimize the code, improve responsiveness, and ensure the design matches the Figma layout with pixel-perfect accuracy.

## Task Objectives

- **Code Audit**: Review and improve the structure, removing redundancies and optimizing performance.
- **Responsive UI**: Ensure that the UI is fully responsive across all screen sizes and devices.
- **Design Implementation**: Implement the design based on the provided Figma file with 100% pixel perfection.
- **Static Columns**: Ensure that the "Full Name" column and the "Status," "Activity," and "Delete" columns remain static, while other content can scroll horizontally or vertically as required.

## Design File

- [Figma Design Link](https://www.figma.com/design/KG7dohmyexLIiWCJU4vxAt/Faboa-Admin-Panel---Test?node-id=1-7092&t=C4PjcSWqfGuvhQn3-1)

## Code Audit Observations

- **Project Structure**: The structure is organized, but multiple libraries (MUI, Bootstrap, etc.) overlap. Consolidation would enhance maintainability.
- **Theme Maintenance**: Styles are spread across multiple frameworks (CSS, Styled Components, Bootstrap, MUI, React Bootstrap). A unified approach (e.g., Tailwind CSS with Shad CN) is recommended for scalability and ease of future branding changes.
- **Debugging**: Some console logs lack identifiers, making debugging challenging.

## Credentials for Testing

- **Email**: faboa123@mailinator.com
- **Password**: hello

## Components Worked On

- **Members Component**: `src/screens/app/Members/index.jsx`
- **PrivateRoutes Component`: `src/Routes/PrivateRoutes.jsx`
- **Filters Component**: `src/components/Filter.jsx`
- **StatusTabs Component**: `src/components/shareComponent/CustomTab.jsx`
- **MainHeader Component**: `src/components/Header.jsx`
- **CsvData Component**: `src/components/CsvData.jsx`
- **TableView Component**: `src/components/Table.jsx`

## Project Setup and Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** package manager

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/mdazlaanzubair/Faboa-Admin-Panel-Fix.git
   ```

2. Navigate to the project directory:

   ```bash
   cd faboa-admin-panel
   ```

3. Install the required dependencies

    *`[the project contains some deprecated dependencies so use --force flag to avoid errors]`*:

   ```bash
   npm install --force
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

## Contact
For any questions or further clarifications, feel free to reach out via [email at mdazlaan1996@gmail.com](mailto:mdazlaan1996@gmail.com).
