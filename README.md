# Simple Dashboard App

A dashboard built with Angular featuring a responsive UI.

🔗 [Live Demo](https://simple-dashboard-app-gamma.vercel.app/dashboard)

## 🚀 Tech Stack

- **Angular v20**
- **Angular Material**
- **Tailwind**
- **RxJS & Signals**
- **ESLint, Prettier & Sheriff**
- **lint-staged & Husky**

## 🛠 Why These Tools?

### 🎨 Tailwind

For more readable components using inline styles and templates.

### 🧱 Angular Material

Prebuilt UI components for faster development.

### 🔄 RxJS & Signals

For demonstrative purposes both were used, although signals have a way to go still, they are the future of Angular.

### 🧹 ESLint, Prettier, Sheriff

Consistent code style, structure and formatting.

### 🛡️ lint-staged & Husky

Automated code quality checks before every commit.

## 🧩 Project Structure & Responsibilities

- **page-core-layout.ts**  
  Sets the overall layout of the app.  
  This is the shell that wraps all other pages.

- **page-table.ts / page-dashboard.ts**  
  Responsible for setting up the layout of their respective domains (table or dashboard).  
  They also handle all necessary calls to the domain service.

- **component-\*.ts**  
  Contains components such as tables, charts, maps, dialogs, etc.  
  Each component is focused on a specific UI or data visualization task.

- **data-\*.ts**  
  These files define the data models and services for fetching and managing data.

- **util-\*.ts**  
  Utility functions, pipes, or helpers that do not fit into the other categories.

## 🧪 Setup & Development

```bash
# Install dependencies
npm install

# Run the app locally
npm start
```
