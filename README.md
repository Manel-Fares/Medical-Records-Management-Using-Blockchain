# Medical-Records-Management-Using-Blockchain
 This project aims to exploit the blockchain technology in the health sector to create a decentralized and secure application that allows the management of medical data of patients while ensuring integrity, confidentiality and transparency.


### Instructions for installing the development environment 


*	For the following instructions Login as a normal user, rather than root.
*	Do not su to root
*	Use cURL to install pre-requisites

### Step 1 : Installing the prerequisites

The following are prerequisites for installing the required development tools:
*	Operating Systems : Ubuntu Linux 64-bits
*	Docker : v17.03 or higher
*	Docker-compose : v1.13.0 or higher
*	Npm : v5.x
*	node.js : v8.9.1 or higher 
*	Python : 2.7x
*	A code editor 

### You can download the prerequisites using the following commands:
```
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
```

### To install the tools run:
```
./prereqs-ubuntu.sh
```
### Once it’s completed without any error, you will get a message similar to this:

![image](https://user-images.githubusercontent.com/60549368/134246999-b3610ed7-8f1c-41fb-aa91-fe8076cb95b6.png)

**Important** : You will need to logout and login again before continuing

### Step 2 : Installing the development environment

**Hyperledger Composer command line application :**
Used to perform multiple administrative, operational, and development tasks.
```
npm install -g composer-cli@0.20
```
**Hyperledger Composer REST Server :**
Used to generate a REST API from a deployed blockchain business network that can be easily consumed by HTTP or REST client
```
npm install -g composer-rest-server@0.20
```
**Hyperledger composer generator :**
Used to create pro-forma templates for using with the Hyperledger Composer

```
npm install -g generator-hyperledger-composer@0.20
```
**Yeoman :**
A tool for generating applications, which utilises generator-hyperledger-composer:
```
npm install -g yo
```

![image](https://user-images.githubusercontent.com/60549368/134247962-00c67b0f-ffc5-4ab8-9828-e7687e37d1e4.png)

