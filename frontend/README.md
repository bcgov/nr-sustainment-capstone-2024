# Welcome to QuackStack 'Better Berries' Frontend 🚀

## About the Frontend

Our frontend is a Vite React project written in TypeScript. This is a mobile first, intuitive and modern interface where users can easily manage their farm nutrient calculations on the go.

## Project Description

The 'Better Berries' is a Progressive Web Application that helps farmers to calculate accurate and precise nutrients needed for their crops.
This is an excerpt of the original workflow of the Sustainment's team Nutrient Management Program. ([NMP](https://nmp.apps.nrs.gov.bc.ca/))

## Frameworks / Library

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Design Tokens](https://www.npmjs.com/package/@bcgov/design-tokens?activeTab=readme)
- [Emotion](https://emotion.sh/docs/introduction)

## Run Locally

Clone the project

```bash
  git clone https://github.com/bcgov/nr-sustainment-capstone-2024.git
```

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start docker compose

```bash
  docker-compose up
```

You can also add --build to build docker-compose.yml and --watch in order to control CLI

For deleting volumes of docker

```bash
    docker-compose down -v
```

## Running Tests

Test are using [Vitest](https://vitest.dev/) which is a Vite-native testing framework that is based from [Jest](https://jestjs.io/). More information about testing will be in the [Wiki](https://github.com/bcgov/nr-sustainment-capstone-2024/blob/main/README.md)

```bash
  npm run test
```

## Usage/Examples

### Component Imports

ESlint will enforce component imports to be at the bottom of other imports.

```javascript
import axios from 'axios' // Needs to be at top of Component, or ESlint will complain.
import Component from 'my-project'

const function = () => {block of code} // ESlint enforces ES6, because author loves ES6.
```

### Testing imports

Frontend Testing is testing what a block of code displays in the Web Application. Therefore, we need **jest-dom** to assert state of the DOM.

```javascript
import '@testing-library/jest-dom'; // Asserts state of DOM, toBeInTheDocument

 developers.forEach((developer:DeveloperInterface) => {
        expect(screen.getByText(developer.first_name)).toBeInTheDocument();
        expect(screen.getByText(developer.last_name)).toBeInTheDocument();
      });
```

### Interface Imports

To ensure clarity and understandability with other developers, interface/types can be created since we are using TypeScript.

```javascript
export interface DeveloperInterface {
  id: number;
  first_name: string;
  last_name: string;
}
```

This is where you import it and use it as a type/interface.

```javascript
    const developers: Array<DeveloperInterface> = [
      { id: 1, first_name: 'G', last_name: 'Damaso' },
      { id: 2, first_name: 'K', last_name: 'Caparas' },
      { id: 3, first_name: 'S', last_name: 'Spy' },
    ];
```

### Design tokens and Emotion Styled components

We need to follow BC's Styling guide, for this purpose, we're using BC Design Tokens.
To get some more flexibility and provide a fresh and modern design, we will also use Emotion.
The are imported in a `*.style.tsx` file, then Design tokens are used whenever possible, and emotion on should add some flare on top of it.

Here's a simple example of design tokens being used:

```TypeScript
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  color: ${tokens.typographyColorPlaceholder};
  font-size: ${tokens.typographyRegularLabel};
  margin-bottom: 36px;
  p {
    margin: 0;
  }
  a {
    color: ${tokens.typographyColorLink};
  }
`;

export default StyledFooter;
```

<!-- Here's a simple example using emotion: -->
<!-- ```TypeScript -->

<!-- ``` -->
