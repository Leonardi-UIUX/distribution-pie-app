# Distribution Pie App

## Overview
The Distribution Pie App is an interactive web application built with React that simulates a distribution system using a pie chart. Users can adjust the distribution of colors represented in the pie chart by modifying the number of pins associated with each color and observing the changes in real-time.

## Features
- Interactive pie chart visualization using Chart.js.
- User-friendly control panel for adjusting color pins.
- Dynamic recalculation of bumper values with constraints.
- Responsive design for various screen sizes.

## File Structure
```
distribution-pie-app
├── src
│   ├── components
│   │   ├── PieChart.jsx         // Component for rendering the pie chart
│   │   └── ControlPanel.jsx     // Component for user controls
│   ├── utils
│   │   └── logic.js             // Utility functions for logic handling
│   ├── App.jsx                  // Main application layout
│   └── index.js                 // Entry point of the application
├── package.json                  // Project metadata and dependencies
└── README.md                     // Documentation for the project
```

## Installation
To get started with the Distribution Pie App, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/distribution-pie-app.git
   ```

2. Navigate to the project directory:
   ```
   cd distribution-pie-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the application locally, use the following command:
```
npm start
```
This will start the development server and open the app in your default web browser.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Chart.js](https://www.chartjs.org/) - A simple yet flexible JavaScript charting library.