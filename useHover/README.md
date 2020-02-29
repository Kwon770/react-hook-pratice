# @skooks/use-hover

React Hook to detect a hover on an any React Element

## Installation

#### yarn

`yarn add @skooks/use-hover`

#### npm

`npm i @skooks/use-hover`

## Usage

```js
import React from "react";
import useHover from "@skooks/use-hover";

function App() {
  const onHover = () => console.log("Somebody hovered!");
  const markedRef = useClick(onHover);
  return <h1 ref={markedRef}>Hello Skooks</h1>;
}
```

### Arguments

| Argument | Type     | Description                                       | Required |
| -------- | -------- | ------------------------------------------------- | -------- |
| onHover  | function | Function to be called when the element is hovered | yes      |

### Return

| Return value | Type      | Description                                                     | Default value |
| ------------ | --------- | --------------------------------------------------------------- | ------------- |
| ref          | React Ref | A React Ref listening to the hover event, add it to any element | null          |
