# MetaMask-Snap
MetaMask Snaps is a feature of the MetaMask wallet that enables developers to build and integrate custom plugins, known as "snaps," which enhance the wallet's functionality. These snaps allow for personalized features, additional blockchain interactions, and custom user interfaces while maintaining a secure environment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [How to run MetaMask Snap](#how-to-run-metamask-snap)
  - [Create a Snap to calculate gas fee percentages](#create-a-snap-to-calculate-gas-fee-percentages)
  - [Create a Snap to estimate gas fees](#create-a-snap-to-estimate-gas-fees) 

## Features

- Creating a Snap that calculates the percentage of gas fees they would pay for their transaction.
- Creating a Snap that estimates gas fees. The Snap uses the fetch API to request information from the internet, and displays IN  MetaMask's transaction confirmation window.


## Prerequisites
- Install [MetaMask Flask](https://docs.metamask.io/snaps/get-started/install-flask/)
- You can use Infura's Sepolia faucet to get Sepolia ETH.
- A text editor (for example, VS Code)
- Node version 20.11 or later
- Yarn

Note: Install Flask in a new browser profile, or disable any existing installed versions of MetaMask before installing Flask. Running multiple instances of MetaMask in the same browser profile can break dapp interactions.



## How to run MetaMask Snap

### Create a Snap to calculate gas fee percentages

1. Open a new terminal window and navigate to the transaction-insights-snap directory:
    ```bash
    cd Metamask__GasEstimator__GasPercentange__Snap/transaction-insights-snap
    ```
2. Install dependencies:
    ```bash
    yarn install
    ```
3. build and test your Snap
    ```bash
    yarn start
    ```
You can now view site in the browser at http://localhost:8000/
Open localhost:8000 in your browser (with MetaMask Flask installed)


### Create a Snap to estimate gas fees

1. Install dependencies:
    ```bash
    cd MetaMask-Snap/gas-estimation-snap
    yarn install
    ```

2. build and test your Snap
    ```bash
    yarn start
    ```

You can now view site in the browser at http://localhost:8000/
Open localhost:8000 in your browser (with MetaMask Flask installed)





## Contributing

We love contributions! Here's how you can help make the AI-powered FinanceGuru even better:

1. Fork the project (`gh repo fork https://github.com/0xmetaschool/Metamask__GasEstimator__GasPercentange__Snap.git`)
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License
This project is licensed under the MIT License - see the [LICENSE file](./LICENSE) for details.


## Acknowledgments

- Uniswap for powering the flashcard generation
- Clerk for login and authentication

## Contact

Please open an issue in the GitHub repository for any queries or support.


