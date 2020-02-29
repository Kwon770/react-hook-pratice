# @skooks/use-before-leave

React Hook to execute function when the mouse leaves the page.

## Installation

#### yarn

`yarn add @skooks/use-before-leave`

#### npm

`npm i @skooks/use-before-leave`

## Usage

```js
import React from "react";
import useBeforeLeave from "@skooks/use-before-leave";

function App() {
  const beforeLeave = () => console.log("User is leaving...");
  useBeforeLeave(beforeLeave);
  return <h1>Hello Kooks</h1>;
}
```

### Arguments

| Argument      | Type     | Description                                              | Required |
| ------------- | -------- | -------------------------------------------------------- | -------- |
| onBeforeLeave | function | Function to be called when the mouse leaves the document | yes      |
