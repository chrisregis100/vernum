# Convertisseur de Numéros VCF  
**Convertisseur de numéros béninois à 8 chiffres vers le format à 10 chiffres avec un préfixe "01".**

## 📝 Description  
Cette application web permet aux utilisateurs de charger leurs fichiers VCF contenant des contacts, de convertir automatiquement les numéros béninois à 8 chiffres en ajoutant "01" après le préfixe +229, et de télécharger un fichier mis à jour.

### Fonctionnalités principales :  
- Chargement de fichiers **VCF**.
- Conversion automatique des numéros béninois au format valide à 10 chiffres.  
- Téléchargement du fichier VCF mis à jour.  
- Traitement rapide et sécurisé, sans stockage des données.

## 🔒 Sécurité et Confidentialité  

### **1. Traitement local des données**  
L'application est conçue pour garantir la sécurité et la confidentialité de vos données. Tous les fichiers VCF que vous chargez sont traités **localement sur votre appareil** via votre navigateur. Cela signifie que :  
- Aucun fichier ni information personnelle n'est transmis ou stocké sur un serveur.  
- Vos données restent entièrement sous votre contrôle.  

### **2. Absence de stockage**  
L'application ne conserve aucune copie des fichiers que vous chargez ou générez. Une fois que vous avez téléchargé votre fichier VCF mis à jour, toutes les données sont automatiquement supprimées de la mémoire active du navigateur.


## 🛠️ Outils et API Utilisés  

### **1. Langages et technologies principales**  
- **HTML** : Structure de la page et des éléments interactifs.  
- **CSS avec Tailwind CSS** : Conception responsive et design élégant, avec une personnalisation facile.  
- **JavaScript** : Logique métier pour le traitement des fichiers VCF.  

### **2. APIs Web Utilisées**  
- **FileReader API** :Pour la lecture du contenu des fichiers VCF chargés par l'utilisateur. 

- **Blob API** :  Utilisée pour créer un fichier mis à jour (au format VCF) que l'utilisateur peut télécharger. 

### **3. Frameworks et bibliothèques**  
- **Tailwind CSS** :

- 
## 🚀 Installation  

### **1. Pré-requis**  
- Un navigateur moderne (Google Chrome, Firefox, ou Edge recommandé).  
- Un éditeur de texte (comme **VS Code**) si vous souhaitez modifier le code.  
- Node.js (optionnel, si vous voulez utiliser un serveur local).  

### **2. Téléchargement du projet**  
1- Cloner le dépôt github
     ```bash
     git clone https://github.com/chrisregis100/vernum.git
     ```  
2- cd vernum
3- Lancer live server

##📌 Limitations
-Seuls les fichiers VCF au format Version 2.1 sont pris en charge.
-Les numéros non béninois ou déjà au format à 10 chiffres ne sont pas modifiés.
-Aucun stockage des données n'est effectué : tout le traitement est local.
