# 🎨 Creative Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

> A high-performance, interactive portfolio template built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. Featuring fluid animations, glassmorphism UI, and a responsive design.

![Project Preview](https://res.cloudinary.com/dz2n6zgd3/image/upload/v1768986697/Captura_de_tela_2026-01-21_061202_n0sxuc.png) 

---

## 🚀 Key Features

* **⚡ Next.js App Router:** Built on the latest React framework standards for speed and SEO.
* **🎭 Fluid Animations:** Immersive entrance animations and page transitions using `Framer Motion`.
* **✨ Glassmorphism UI:** Modern frosted glass aesthetics in the Navbar, Cards, and Forms.
* **🌊 Dynamic Background:** Custom `FluidBackground` component with animated floating blobs.
* **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop via Tailwind CSS.
* **📂 Project Filtering:** Interactive project gallery with category filtering capabilities.
* **📝 Interactive Forms:** Contact form UI with validation states and loading feedback.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14+** | React Framework (App Router & Server Components) |
| **TypeScript** | Static Typing and Type Safety |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Framer Motion** | Animation library for React |
| **Lucide React** | Lightweight and consistent icon set |

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx       # Root layout (Fonts, Navbar injection)
│   ├── page.tsx         # Home page (Hero, Sections assembly)
│   └── globals.css      # Global styles & Tailwind directives
├── components/
│   ├── layout/          # Structural components (Navbar, Footer)
│   ├── sections/        # Page sections (Projects, Services, Contact)
│   └── ui/              # Reusable UI elements (FluidBackground)
└── ...
⚡ Getting Started
Follow these steps to run the project locally:

Clone the repository:

Bash
git clone [https://github.com/ToledoSoftware/portfolio-creative.git](https://github.com/ToledoSoftware/portfolio-creative.git)
cd portfolio-creative
Install dependencies:

Bash
npm install
# or
yarn install
# or
pnpm install
Run the development server:

Bash
npm run dev
Open your browser: Navigate to http://localhost:3000 to see the application running.

🎨 Customization
This template is designed to be easily customizable.

1. Update Projects
Go to src/components/sections/Projects.tsx:

JavaScript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Design",
    // ...
  }
];
2. Update Services
Go to components/sections/Services.tsx to modify the services list and icons.

3. Contact Form Logic
The form in components/sections/Contact.tsx currently simulates a submission. To make it functional, integrate it with a service like EmailJS or Formspree.

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

👨‍💻 Author
Emmanuel Toledo

Portfolio: emmanueltoledo.dev.br

LinkedIn: /emmanuellucastoledo

GitHub: @ToledoSoftware

<p align="center"> Built with ❤️ using Next.js and Tailwind CSS </p>