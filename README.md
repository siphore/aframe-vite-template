# A-Frame Vite Template

## 1. Notice

Copyright © 2025 [James Maki](https://www.jamesmaki.com).

## 2. Table of Contents

<!-- TOC -->

- [1. Notice](#1-notice)
- [2. Table of Contents](#2-table-of-contents)
- [3. Introduction](#3-introduction)
- [4. Getting Started](#4-getting-started)
    - [4.1. Prerequisites](#41-prerequisites)
    - [4.2. Installation](#42-installation)
- [5. Development Server](#5-development-server)
    - [5.1. Launch Development Server](#51-launch-development-server)
    - [5.2. Testing in the Browser](#52-testing-in-the-browser)
    - [5.3. Testing on Other Devices on Your Local Network](#53-testing-on-other-devices-on-your-local-network)
    - [5.4. Rapid Development](#54-rapid-development)
    - [5.5. Stopping the Development Server](#55-stopping-the-development-server)
- [6. Creating a Production Build](#6-creating-a-production-build)
- [7. Testing Your Production Build](#7-testing-your-production-build)
- [8. Project Template](#8-project-template)
    - [8.1. Folder Structure](#81-folder-structure)
    - [8.2. Sample Component](#82-sample-component)
- [9. References](#9-references)

<!-- /TOC -->

## 3. Introduction

[A-Frame](https://aframe.io) is a powerful open-source framework for building virtual reality (VR) and augmented reality (AR) experiences with HTML. One of the key benefits of A-Frame is that it enables developers to create immersive experiences without needing to set up or manage complex build pipelines. In fact, A-Frame does not require any build or bundler, making it a great choice for rapid prototyping, proof-of-concepts, and smaller projects.

However, in larger-scale applications, a bundler can be helpful. A bundler takes multiple modules and combines them into a single, optimized file that can be efficiently loaded by the browser. This can improve performance by reducing the number of HTTP requests needed to load a page. For example, when working with complex, third-party libraries or custom components, a bundler can help ensure that all dependencies are properly resolved and loaded before the application is ready.

That's where [Vite](https://vite.dev) comes in – an excellent alternative to traditional bundlers like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/). Vite offers blazing-fast development performance, automatic code splitting, and significantly reduces the amount of specialized knowledge you need so that you can focus on your immersive experiences instead of tooling. Its low-config setup make it a great choice for modern web projects, including A-Frame applications.

## 4. Getting Started

### 4.1. Prerequisites

You will need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your development device.

> [!TIP]
> A code editor like [Visual Studio Code](https://code.visualstudio.com/) is also recommended.

### 4.2. Installation

1. Copy the **aframe-vite-template** folder from GitHub to your local device.

1. Rename the folder to a project name of your choosing, e.g., `my-aframe-project`.

1. Open the **package.json** file and set the **name** property to your project name, and update the version number needed:

    ```json
    {
        "name": "my-aframe-project"

        "version": "0.0.1"
    }
    ```

1. Open Terminal and ensure you are in the project directory, e.g., **my-aframe-project**.

1. Install Node packages via npm:

    ```shell
    npm install
    ```

> [!NOTE]
> Depending on your connection speed, it could take several minutes to download all the necessary dependencies.

## 5. Development Server

### 5.1. Launch Development Server

1. Start the development server:

    ```shell
    npm run dev
    ```

1. A successful launch will produce links to launch the default experience in your web browser and provide a similar output:

    ```shell
    VITE v6.1.0  ready in 303 ms

    ➜  Local:   https://localhost:5173/
    ➜  Local:   https://localhost.localdomain:5173/
    ➜  Local:   https://lvh.me:5173/
    ➜  Local:   https://vite.lvh.me:5173/
    ➜  Network: https://127.0.0.1:5173/
    ➜  Network: https://192.168.0.1:5173/
    ➜  press h + enter to show help
    ```

### 5.2. Testing in the Browser

1. Open your A-Frame experience in your web browser by navigating to the listed URI starting with `https://192.168`. Be certain to include the `:5173` port number as well.

> [!NOTE]
> Your local IP address may be different than shown, be sure to use the exact URI indicated in your Terminal.

### 5.3. Testing on Other Devices on Your Local Network

This template differs slightly from a default Vite configuration in assuming that you will want to test your immersive experience with other devices on your local network – such as an Meta Quest, Apple Vision Pro, or other head mounted display (HMD).

The template provides two additional configuration options to help make that possible.

- It is pre-configured to serve the experience using the [HTTPS](https://en.wikipedia.org/wiki/HTTPS) – which is required for WebXR immersive experiences.

- It is pre-configured to make the experience available on your local network.

> [!TIP]
> You may need to approve firewall requests from your operating system in order to make the experience visible to other devices on your local network.

Though unlikely, if you wish to change either of these configurations for any reason, you may do so in the **vite.config.js** file.

1. As before, open your web browser and navigate to the listed URI starting with `https://192.168`. Be certain to include the `:5173` port number as well.

### 5.4. Rapid Development

In most cases the Vite you may leave the Vite server running while you develop in your code editor.

Code changes are generally detected when files are saved, and the Vite development server will force an update on your page.

Look for changes in your browser or on your headset to be nearly immediate.

### 5.5. Stopping the Development Server

1. Select **Ctrl**+**C** in the Terminal to stop the Development Server.

## 6. Creating a Production Build

1. Use the following command to create a packaged production build.

    ```shell
    npm run build
    ```

> [!NOTE]
> The build process takes noticeably longer than starting the development server; but should still be quite fast.

1. A successful build will produce a similar output:

    ```shell
    > my-aframe-project@0.0.1 build
    > vite build

    vite v6.1.0 building for production...
    ✓ 7 modules transformed.
    dist/index.html                    0.70 kB │ gzip:   0.34 kB
    dist/assets/index-DcM_wdQA.js  1,408.81 kB │ gzip: 392.02 kB

    (!) Some chunks are larger than 500 kB after minification. Consider:
    - Using dynamic import() to code-split the application
    - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
    - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
    ✓ built in 3.91s
    ```

Under the hood Vite has used Rollup to optimize and hash your production code and assets with sensible default settings and organized in the **dist** directory. This new directory contains the code that you will want to host on a public web server in order to share your project.

Files located in the project's **public** directory are also imported into the **dist** folder. They are unaltered and unoptimized during the build process. This is great for files that do not change often and require a very specific file name, like **favicon.ico**.

## 7. Testing Your Production Build

Once you've created a production build and generated the **dist** directory you can test it with the production Preview Server:

1. Open the Terminal and run the following command:

    ```shell
    npm run preview
    ```

1. As before, you will end up with a very similar output, but note that the port for the Preview Server has changed to **4173**.

    ```shell
    > my-aframe-project@0.0.1 preview
    > vite preview --host

    ➜  Local:   https://localhost:4173/
    ➜  Local:   https://localhost.localdomain:4173/
    ➜  Local:   https://lvh.me:4173/
    ➜  Local:   https://vite.lvh.me:4173/
    ➜  Network: https://127.0.0.1:4173/
    ➜  Network: https://192.168.0.1:4173/
    ➜  press h + enter to show help
    ```

> [!IMPORTANT]
> The Preview Server port is now 4173.

## 8. Project Template

### 8.1. Folder Structure

Sometimes when setting up a project from scratch it's unclear what the best way to organize files are. The template suggests a reasonable folder structure that works well, but you may change it as needed.

### 8.2. Sample Component

This project includes a very basic sample component (**random-color.js**) to demonstrate how a custom component can be included in the project, and how to reference in the **index.html** file.

The component simply sets a random color onto the material property of the `<a-sphere>` element every two (2) seconds. It can easily be removed by *deleting* the `random-color` attribute from the sphere, and *removing* the following line from **index.html**:

```html
<script type="module" src="./src/components/random-color.js"></script>
```

## 9. References

- [A-Frame](https://aframe.io)
- [Vite](https://vite.dev)
- [Rollup](https://rollupjs.org/)
