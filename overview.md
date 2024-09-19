## Azure DevOps Web Extension Development Guide

**Getting Started**

* **Develop a web extension:**
    * Learn the fundamentals of web extension development in Azure DevOps from Microsoft's official documentation: [https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?view=azure-devops](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?view=azure-devops)

**Packaging and Publishing**

* **Package and Publish your extension:**
    * Follow the step-by-step process to package and publish your web extension: [https://learn.microsoft.com/en-us/azure/devops/extend/publish/integration?view=azure-devops](https://learn.microsoft.com/en-us/azure/devops/extend/publish/integration?view=azure-devops)

**Data Storage**

* **Extensions data storage (for advanced users):**
    * Explore options for storing data within your extension using Microsoft's documentation: [https://learn.microsoft.com/en-us/azure/devops/extend/develop/data-storage?view=azure-devops](https://learn.microsoft.com/en-us/azure/devops/extend/develop/data-storage?view=azure-devops)

**VSIX Generation**

These commands are helpful for generating the VSIX file (Visual Studio Extension Installer) if you're familiar with the Node Package Manager (npm) and the tfx CLI:

```cmd
npm install azure-devops-extension-sdk --save
npm install -g tfx-cli
npx tfx-cli extension create