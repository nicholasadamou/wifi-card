# WiFi Card [![Build Status](https://travis-ci.org/nicholasadamou/wifi-card.svg?branch=master)](https://travis-ci.org/nicholasadamou/wifi-card) [![CircleCI](https://circleci.com/gh/nicholasadamou/wifi-card.svg?style=svg)](https://circleci.com/gh/nicholasadamou/wifi-card)

![preview](preview.png)

Print a neat little card with your WiFi info and stick it on the fridge.

## Development

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/) (recommended)

### Steps

Run the latest Docker image on <http://localhost:8080>

```bash
docker run --rm -p 8080:80 nicholasadamou/wifi-card:latest
```

Or run the live-reload server on <http://localhost:3000>

```bash
make dev
```

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

- [**React.js**](https://reactjs.org/) - For building the interface along with:
  - [**Styled-Components**](https://www.styled-components.com/) - for styling.
  - [**instant.page**](https://instant.page/) - Make your site's pages instant in 1 minute and improve your conversion rate by 1%.

## ⛓️ CI/CD Pipeline

This project uses the following CI/CD Pipeline:

1. [**Travis CI**](https://travis-ci.org/nicholasadamou/wifi-card) - Travis is used to test whether or not this project builds successfully.

## License

© Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
