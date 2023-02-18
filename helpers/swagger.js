const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const route = require("../routes/Assessment")

const options = {
  definition:{
    openapi: "3.0.0",
    info:{
      title: "HealGratefully.com api docs."
    },
    components:{
      securitySchemes:{
        bearerAuth:{
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        }
      }
    },
    security: [
      {
        bearerAuth: [],
      }
    ]
  },
  apis: ['../routes/*.js'],
}

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app, port){
  //swagger page
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  //docs in json format
  app.get("/docs-json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  })

  console.log(`Api-docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;