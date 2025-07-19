# SAI PRASAD – PORTFOLIO WEBSITE

**Personal Developer Portfolio | Built with React + TypeScript + TailwindCSS + Vite + ShadCN + Google Sheets Integration**

---

## 🔧 FEATURES

- Modern, elegant, and responsive design  
- Built with React + Vite + TypeScript  
- Uses TailwindCSS for custom styling  
- ShadCN UI components for clean design  
- Lucide Icons and Framer Motion for animations  
- 3D hover effects, glassmorphism, gradients  
- Live contact form with submission to Google Sheets  
- Mobile-friendly and interactive  
- Deployed and optimized for fast loading  

---

## 🚀 HOW TO RUN THIS PROJECT LOCALLY

### 1. System Requirements
- Node.js version 16 or above  
- Git installed (optional)  
- Code editor (VS Code recommended)  

### 2. Installation Steps

```bash
# Clone the repository (or skip if already downloaded)
https://github.com/saiprasad367/Portfolio.git
# Go into the project folder
cd saiprasad-digital-canvas-main

# Install dependencies
npm install
```

### 3. Start the Local Dev Server

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:5173
```

You’ll see your personal portfolio running locally.

---

## 📦 DEPENDENCIES USED

This project uses:

```bash
react
react-dom
react-router-dom
vite
typescript
tailwindcss
clsx
framer-motion
lucide-react
@shadcn/ui
react-hot-toast
```

### 💻 Manual Installation (Optional)

```bash
npm install react react-dom react-router-dom
npm install -D vite typescript tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install clsx framer-motion lucide-react react-hot-toast
```

### 🧩 ShadCN UI Setup

```bash
npx shadcn-ui@latest init
```

Follow the on-screen steps to complete setup.

---

## 📨 CONTACT FORM (Google Sheets Integration)

This project allows users to send messages via a contact form, which are automatically saved to your Google Sheet.

---

## 📝 SETUP GOOGLE SHEETS SCRIPT (ONE-TIME SETUP)

1. Create a new Google Sheet  
2. Go to `Extensions > Apps Script`  
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const name = e.parameter.name;
    const email = e.parameter.email;
    const subject = e.parameter.subject;
    const message = e.parameter.message;
    sheet.appendRow([name, email, subject, message, new Date()]);
    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy > Manage Deployments > New Deployment**  
5. Select **Web App**  
6. Set:
   - Execute As: **Me**
   - Access: **Anyone**
7. Click **Deploy** and authorize permissions  
8. Copy the Web App URL (you’ll use this in your React app)

---

## 🔗 INTEGRATE GOOGLE SCRIPT IN REACT FRONTEND

In `Contact.tsx`:

```ts
const scriptURL = "YOUR_SCRIPT_URL";

const form = new FormData();
form.append("name", formData.name);
form.append("email", formData.email);
form.append("subject", formData.subject);
form.append("message", formData.message);

await fetch(scriptURL, {
  method: "POST",
  body: form
});
```

Replace `YOUR_SCRIPT_URL` with your actual deployed Apps Script URL.

---

## 🌍 DEPLOYING TO PRODUCTION

### ✅ Using Vercel (Recommended)

1. Go to https://vercel.com  
2. Login with GitHub and import your repository  
3. Set:
   - **Build Command:** `npm run build`
   - **Framework:** `vite`  
4. Vercel auto-deploys with every GitHub push

### 📦 Using Netlify

1. Visit https://netlify.com  
2. Connect your GitHub repo or drag & drop your `dist` folder  
3. Netlify will host your site for free with live preview

---

**🔗 Built  by Sai Prasad**
