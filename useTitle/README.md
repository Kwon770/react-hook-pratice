# @skooks/use-title

React Hook to update your document's title.

## Installation

#### yarn

`yarn add @skooks/use-title`

#### npm

`npm i @skooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@skooks/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
