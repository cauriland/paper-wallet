# Cauri Paper Wallet

<p align="center">
    <img src="https://github.com/cauriland/paper-wallet/raw/main/banner.png" />
</p>

[![Build Status](https://badgen.now.sh/circleci/github/cauriland/paper-wallet)](https://circleci.com/gh/cauriland/paper-wallet)
[![Codecov](https://badgen.now.sh/codecov/c/github/cauriland/paper-wallet)](https://codecov.io/gh/cauriland/paper-wallet)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

> Lead Maintainer: [Arsel Tindo](https://github.com/tnga) <br/>
> Legacy Maintainer: [Michel Kraaijeveld](https://github.com/ItsANameToo)

## Running Locally

There are two ways you can run the Cauri Paperwallet locally:

1. Download the latest `dist.zip` release, extract the contents and open the `index.html` file in your browser.
2. Clone the repo, install the requirements and dependencies and run `yarn serve` to run a local version.

## Adding Networks

By default, the Cauri Paper Wallet uses the Cauri mainnet when generating a wallet.
However, it comes bundles with multiple network options that you can switch to, making it usable on for example devnet and bridgechains.
If you run a public bridgechain, you can have your network added by creating a PR that adds the `name`, `pubkeyHash` and `WIF` to the existing list of networks.

## Using Custom Network

If the network you want to use is not listed in the dropdown, you can switch to custom networks in the modal, fill in the `pubkeyHash` and `WIF` values of the network you want to use, and press `Save` to apply it. That's it!

## Development

### Requirements

The Cauri Paperwallet has the following requirements:

-   [Node](https://nodejs.org/)
-   [Yarn (Optional but recommended)](https://yarnpkg.com)

### Commands

<details><summary>List of commands</summary>

```bash
# Install dependencies
yarn install

# Compiles and hot-reloads for development
yarn run serve

# Compiles and minifies for production
yarn run build

# Run your tests
yarn run test:e2e
yarn run test:unit

# Lints and fixes files
yarn run lint

# Generate release zips
yarn run task:release

# Deploy on GitHub pages
yarn run task:deploy
```

</details>

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@cauri.cm. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

[MIT](LICENSE) © [Cauri Land](https://cauri.cm)
