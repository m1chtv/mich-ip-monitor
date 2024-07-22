# mich IP Monitor

![Screenshot (1)](https://github.com/user-attachments/assets/ad330931-9170-46ce-be94-63c07ae8fc32)


IP Monitor is a Node.js application for monitoring the status of specified IP addresses in real-time. It displays detailed information such as response time, average response time, and uptime percentage, all within a stylish dark mode interface.

## Features

- Real-time monitoring of multiple IP addresses.
- Displays the status (up or down) of each IP address.
- Shows response time, average response time, and uptime percentage.
- Sleek and responsive user interface designed for dark mode.
- Custom-styled scrollbar for a modern look.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- npm (Node Package Manager) installed.
- A VPS or local environment to run the application.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/m1chtv/mich-ip-monitor.git
   cd ip-monitor
   ```

2. **Install Dependencies:**
   ```bash
    npm install
   ```

## Configuration

1. **Add Your IP Addresses:**

- Open the `server.js` file and add the IP addresses you want to monitor to the `ips` array.
```bash
const ips = [
    '8.8.8.8',   // Example IP
    'google.com'   // Example Domain
];
```

## Running the Application

1. **Start the Server:**
```bash
node server.js
```

2. **Access the Application:**

- Open your browser and go to http://localhost:3000

## Contributing

- Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please contact:

- **Author:** mich
- **Website:** [m1ch.ir](http://m1ch.ir)

Thank you for visiting the mich-ip-monitor repository!
