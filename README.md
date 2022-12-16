

  # Sam Lerner's README Generator

  [![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  


## Description

This application was designed to allow the user to quickly and easily generate a high-quality, professional README for their projects. Why waste time inputing the same data multiple times when you can undertake an automated process?

## Installation

In order to use the application, it is necessary to download the repo to your machine. It is possible to quickly do so by using the `git clone` command in a terminal window and pasting in the SSH key provided through Github. 

Make sure that your computer has access to the `node.js` package. Type `npm init -y` into terminal to quickly install and set the default values on the prompts. Once this is complte, you are able to install the package dependencies: `inquirer`, `fs` and `path`. One at a time, install by typing `npm i [package name]`.

## Usage

Here is a GIF demonstrating functionality:

![Here is a video demonstrating functionality](./assets/images/readme-generator-demo.gif)

To view a higher resolution version of this video, please navigate to my [Google Drive](https://drive.google.com/file/d/1KSOFE_9OJbBNLcyXLOEleO_ae8LzjUUq/view).

To initialize the application, please open an integrated terminal window within the file location. Input `node index` to begin. The application uses `inquirer` to run the user through a series of prompts. Once you have answered all of the questions, the log will report your success or that an error occurred. If the run was successful, a new file named `README.MD` will generate in the `output` folder. This is generated using the `fs.WriteFile` package.

A sample README can be found [here](./output/README.MD).

## Contributions

Thank you to classmates Eric Kirberger Peter Lim and Azime Nail, tutor Dru Sanchez, TAs Paul Cwik Justyn Subrai and Manoli Koutouzos for their guidance with this project. 

## Tests

n/a

## License
  This project is licensed under the MIT license.
    

## Questions
See more of my work [here!](https://github.com/sam-lerner) 

I can be reached via e-mail at sam.a.lerner@gmail.com. Thank you for reading!

