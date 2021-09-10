# Personal Website

See: [bimurto.io](https://bimurto.io).

My personal website. A simple, easily modifiable, statically-exportable [React](https://reactjs.org/)
, [Jamstack](https://jamstack.org/) application that deploys automatically for free
using [github pages](https://pages.github.com/). Built using modern javascript, based
on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/),
SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v12 and
optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/bimurto/my-homepage.git # replace [mldangelo] with your github username if you fork first.
cd my-homepage
yarn install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
yarn start
```

Your web browser should automatically open to `<ip>:<port>:<path>`
default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

1. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a
   custom domain name, it should look
   like `https://[your-gh-username].github.io/[repository-name - default:my-homepage]/`
2. Run `yarn deploy`

## Acknowledgements

* Forked from [https://github.com/mldangelo/personal-site](https://github.com/mldangelo/personal-site).
  Thanks [@mldangelo](https://github.com/mldangelo)
