import React from 'react';
import './styles/variables.css'
import './styles/app.css'
import Button from './components/button';
import LoadingDot from './components/loading/dot';

const btn1 = {
  text: "Custom shadow",
  color: "border text-primary-dark bg-body hover:text-primary shadow",
  ifFocusedColor: "shadow-outline border-primary-opacity-4",
  elseFocusedColor: "border-transparent",
}

const btn2 = {
  text: "Custom purple color",
  color: "border text-white bg-info hover:bg-info-bright active:bg-info-dark",
  ifFocusedColor: "shadow-outline-info border-info-dark",
  elseFocusedColor: "border-transparent",
}

const btn3 = {
  text: "Custom dark color",
  color: "text-white bg-gray-9 hover:bg-gray-8 active:bg-black",
  ifFocusedColor: "shadow-outline-gray",
}

function App() {
  return (
    <div>
      <Button
        text={btn1.text}
        color={btn1.color}
        ifFocusedColor={btn1.ifFocusedColor}
        elseFocusedColor={btn1.elseFocusedColor}
      />
      <Button
        text={btn2.text}
        color={btn2.color}
        ifFocusedColor={btn2.ifFocusedColor}
        elseFocusedColor={btn2.elseFocusedColor}
      />
      <Button
        text={btn3.text}
        color={btn3.color}
        ifFocusedColor={btn3.ifFocusedColor}
      />
      <Button text={'Default'} />
      <Button text={'Primary'} preset={"primary"} />
      <Button text="Secondary" preset="secondary" />
      <Button text="Danger" preset="danger" />
      <Button text="Text" preset="text" />
      <Button icon={'zoom'} />
      <Button icon={'brush'} />
      <Button icon={'brush'} extendIcon={'app'} />
      <div>
        <LoadingDot size={'12px'} />
        <Button icon={'brush'} extendIcon={'app'} loading={true}/>
      </div>
    </div>
  );
}

export default App;
