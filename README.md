# Automation Canva Post

<!---These are examples. See https://shields.io for other options or to customize this set of badges. You may want to include dependencies, project status, and license information here--->

![GitHub repo size](https://img.shields.io/github/repo-size/Paulo-2048/automation-canva-post?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Paulo-2048/automation-canva-post?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Paulo-2048/automation-canva-post?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/Paulo-2048/automation-canva-post?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Paulo-2048/automation-canva-post?style=for-the-badge)

<img src="example-image.png" alt="Created Design">

> The project essentially involves creating a #scraper with Puppeteer on the website https://lnkd.in/drhxDe3 using #nodejs and extracting the trending topics to a #google spreadsheet. Later, retrieve this information and use it to create a graphic art on #canva, followed by uploading it to Google Drive.

> Note: Many selectors and links may need to be changed, removed, or added according to your needs, as they tend to change, for example, the class name. (But if you have any questions, feel free to contact me on LinkedIn, and I'll be happy to help: https://www.linkedin.com/in/paulo-vitor-92174b148/)

### Adjustments and improvements

The project is not yet finalized but is open to future contributions:

- [x] Scrape data from https://explodingtopics.com/ (Via Puppeteer)
- [x] Place data in the Google spreadsheet (Via API)
- [x] Retrieve data from the spreadsheet (Via API)
- [x] Create a post on Canva (Via Puppeteer)
- [x] Save the created post in a Google Drive folder

## 💻 Prerequisites

Before you begin, make sure you have met the following requirements:
<!---These are just example requirements. Add, duplicate, or remove as necessary--->
* You have installed the latest version of `Node.js`
* Dependencies:
  * `dotenv: ^9.0.2,`
  * `google-spreadsheet: ^3.1.15,`
  * `puppeteer: ^9.1.1,`
  * `puppeteer-extra: ^3.1.18,`
  * `puppeteer-extra-plugin-stealth: ^2.7.8`

## 🚀 Installing Automation Canva Post

To install and run the project, follow these steps:

* Download and install `Node.js`
* Clone this repository and open it in Vs Code (or your preferred IDE)
* Run `npm init` to initialize a Node instance and create the package.json files
* Install dependencies via `npm` in the terminal
* Go to https://console.cloud.google.com/apis/credentials?project=instagram-automation-sheets to create a service account (Required for the Google Sheets API)
* Create the `.env` file and configure the environment variables with the information from the service account "credentials" and the Canva login:
  * `GOOGLE_SERVICE_ACCOUNT_EMAIL=`
  * `GOOGLE_PRIVATE_KEY=`
  * `CANVA_LOGIN`
  * `CANVA_PASSWORD=`
* Link your Canva account to your Google account (Login with Google)
* To export the art from Canva to Drive or download the file, you'll need to uncomment the relevant section in `scraper.js`.

## ☕ Using the Project

* The program performs automatic actions, so after setting up the environment and running `index.js`, just wait and check the Drive*.

## 📫 Contributing to Automation Canva Post
<!---If your README is long or if you have any specific processes or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to the project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b "Your Name"`.
3. Make your changes and commit them: `git commit -m "Correction/Feature Name"`
4. Push to the original branch.
5. Create a pull request.
6. Send me a message on LinkedIn (https://www.linkedin.com/in/paulo-vitor-92174b148/)

[⬆ Back to top](#automation-canva-post)<br>
