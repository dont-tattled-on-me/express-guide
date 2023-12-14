# Guide to Start (without this repo)

1. Init your node.js project

```zsh
mkdir <Folder Name>
cd <Folder Name>
npm init -y
```

2. Install package that need on your project (if having more you can install it later)

```zsh
npm i express dotenv nodemon
```

3. Setting up Startup Script

```json
{
  ...,
  "scripts": {
    "start": "node app.js",
    "dev": "npx nodemon app.js"
  },
  ...
}
```
