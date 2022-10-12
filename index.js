const PORT = 8000
const axios = require("axios");
const cheerio = require("cheerio");
const { append } = require("domutils");
const express = require("express");

const app = express();

append.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));