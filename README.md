# Financial Dashboard - Next.js + ShadCN UI 🚀

## Overview
A modern **Financial Management Dashboard** built with **Next.js** and **ShadCN UI**. It includes **secure authentication, transaction tracking, budget insights, and user management**, featuring a clean and responsive design.

## Features
- **Landing Page** with feature highlights and call-to-action.
- **Dashboard** for financial tracking and analytics.
- **Transactions Management** for viewing, filtering, and adding expenses.
- **User Management** (Admin) for role-based access.
- **Settings Page** for profile updates and preferences.
- **Real-time Charts & Tables** for financial insights.

## UI Components Used (ShadCN)
### **Global Layout**
- `sidebar` - Navigation menu.
- `navbar` - Top bar with user profile & notifications.
- `footer` - Bottom section with links.
- `switch` - Theme toggle (Dark/Light mode).

### **Landing Page**
- `hero section` - Introduction & CTA.
- `carousel` - Showcasing dashboard features.
- `card` - Key feature highlights.
- `accordion` - FAQs section.
- `badge` - Display benefits (e.g., "Secure", "Real-time").
- `button` - Signup/Login actions.
- `sheet/drawer` - Mobile-friendly menu.

### **Dashboard & Pages**
- `card` - Financial metrics (balance, income, expenses).
- `chart` - Visual representation of transactions.
- `progress` - Budget tracking.
- `table` - List transactions.
- `pagination` - Handle multiple pages of transactions.
- `tabs` - Switch views (Income, Expenses, Overview).
- `form` - Adding transactions & user management.
- `calendar` - Select transaction dates.
- `alert-dialog` - Confirmations (e.g., delete transaction).
- `sonner` - Notifications.
- `skeleton` - Loading placeholders.
---

## Dashboard Pages & UI Components
### **Home / Overview Page**
- `card` - Key financial metrics (total balance, income, expenses).
- `chart` - Income vs. Expenses, Spending Trends.
- `progress` - Budget tracking.
- `table` - Recent transactions summary.

### **Transactions Page**
- `table` - Display all transactions with sorting & filtering.
- `pagination` - Manage multiple pages of transactions.
- `badge` - Status indicators (Pending, Completed, Failed).
- `tabs` - Switch between Income, Expenses, Transfers.
- `form` - Add/Edit transactions.
- `alert-dialog` - Confirm delete transaction.

### **Add Expense / Income Page**
- `form` - Add a new financial entry.
- `calendar` - Select transaction date.
- `select` - Choose category (Food, Rent, Salary, etc.).
- `badge` - Assign labels.
- `alert-dialog` - Confirmation before saving.

### **User Management (Admin Only)**
- `table` - Display users and roles.
- `avatar` - User profile images.
- `form` - Add/Edit user details.
- `alert-dialog` - Confirm user deletion.
- `switch` - Activate/Deactivate users.

### **Settings Page**
- `tabs` - Switch between Profile, Security, Preferences.
- `form` - Update user details.
- `switch` - Enable/Disable features.
- `accordion` - FAQs or help section.

### **Notifications / Alerts**
- `sonner` - Notification popups.
- `alert-dialog` - Critical action confirmations.
- `progress` - Show pending action status.

## Installation
```sh
# Clone the repo
git clone https://github.com/vaibhavvatsbhartiya/CPA-Tech.git
cd CPA-Tech

# Install dependencies
npm install

# Run the development server
npm run dev
```

## Tech Stack
- **Frontend:** Next.js, ShadCN UI
- **Backend:** Node.js, Express (optional for API)
- **Database:** MongoDB / PostgreSQL (optional)
- **Authentication:** JWT 

## License
MIT

