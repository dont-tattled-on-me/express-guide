const express = require('express')
require('dotenv').config()

const Routes = require('./src/routes')
const Middleware = require('./src/middleware')
const Serve = require('./src/serve')

const app = express()

Middleware(app)
Routes(app)
Serve(app)
