## Overview

The `playwright-bankOfIndia` repository is a project that utilizes Playwright, a powerful automation library, to perform end-to-end testing on the Bank of India website. This project aims to ensure the functionality and reliability of the web application through automated tests.

## Features

- **Cross-Browser Testing**: Supports testing across multiple browsers including Chromium, Firefox, and WebKit.
- **Automated Test Scripts**: Provides a set of automated test scripts to validate the core functionalities of the Bank of India website.
- **Easy Setup**: Simple installation and setup process to get started quickly.
- **Detailed Reporting**: Generates detailed reports of test results for easy analysis.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 12 or later)
- npm (Node package manager)

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/hasanazeerkhan/playwright-bankOfIndia.git
   ```

2. Navigate to the project directory:
   ```bash
   cd playwright-bankOfIndia
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the tests, use the following command:

```bash
npx playwright test
```

You can also specify a particular test file to run:

```bash
npx playwright test path/to/test-file.spec.js
```