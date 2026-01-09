# 🚀 Acelerik | AI Automation Platform

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-FF6584?style=for-the-badge&logo=n8n&logoColor=white)

> **Plataforma SaaS para la digitalización y automatización de procesos empresariales mediante IA.**
>
> 🔗 **Live Demo:** [https://acelerik.com](https://acelerik.com)

---

## 💡 Sobre el Proyecto

Acelerik nace con la misión de democratizar la Inteligencia Artificial para pequeñas y medianas empresas. La plataforma permite a los usuarios gestionar flujos de trabajo automatizados sin necesidad de infraestructura compleja.

El desafío técnico principal fue crear una **Single Page Application (SPA)** altamente reactiva que se comunicara con flujos lógicos complejos (n8n) sin depender de un backend monolítico tradicional.

## 🛠 Tech Stack & Arquitectura

Este proyecto sigue una arquitectura **Modern Frontend** con un enfoque **Serverless/Low-Code** para la lógica de negocio.

### Frontend (Client-side)
- **Core:** React 18 (Hooks & Functional Components).
- **Lenguaje:** TypeScript (Tipado estricto para escalabilidad).
- **Build Tool:** Vite (Optimización de assets y HMR).
- **UI/UX:** Tailwind CSS + shadcn/ui (Diseño modular y accesible).
- **Routing:** React Router DOM.

### Backend & Automation (Logic-side)
- **Orquestación:** n8n (Gestión de flujos de datos y webhooks).
- **IA:** OpenAI API (Integración para procesamiento de texto).
- **Integraciones:** Conexión con CRMs y herramientas de terceros.

## 🚀 Key Features

- **⚡ Performance First:** Optimización de Core Web Vitals y carga diferida (Lazy Loading).
- **🎨 UI Moderno:** Interfaz minimalista con soporte nativo para Dark Mode.
- **📱 Responsive Design:** Adaptabilidad total mobile-first.
- **🔒 Seguridad:** Gestión de variables de entorno y validación de formularios en cliente.

---

## 👨‍💻 Instalación y Desarrollo Local

Si deseas clonar y correr este proyecto localmente:

```bash
# 1. Clonar el repositorio
git clone [https://github.com/cvidaal/acelerik-smart-automation.git](https://github.com/cvidaal/acelerik-smart-automation.git)

# 2. Instalar dependencias
cd acelerik-smart-automation
npm install

# 3. Correr servidor de desarrollo
npm run dev
