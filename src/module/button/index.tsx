import * as React from 'react';
import Button from '../../components/button'
import Icon from '../../components/icon';

type Props = {
  name: string;
  children: React.ReactNode;
}


const Group: React.SFC<Props> = ({ name, children }) => {
  return (
    <div className="docs-rounded docs-border docs-border-grey-lighter docs-my-8">
      <p>{name}</p>
      <div className="docs-p-4 flex items-center space-x-4">
        {children}
      </div>
    </div>
  )
}

class ButtonModule extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Group name="default">
          <Button text="Default" />
          <Button text="Primary" preset="primary" />
          <Button text="Secondary" preset="secondary" />
          <Button text="Danger" preset="danger" />
          <Button text="Text" preset="text" />
        </Group>
        <Group name="size">
          <Button text="Small" size={'h-6'} />
          <Button text="Medium" />
          <Button text="Large" size={'h-10'} />
          <Button text="X Large" size={'h-12'} />
        </Group>
        <Group name="icon&button">
          <Button text="Default" icon="drop-15" />
          <Button text="Secondary" icon="duplicate" preset="secondary" />
          <Button text="Primary" icon="app-store" preset="primary" />
          <Button text="Danger" icon="c-warning" preset="danger" />
          <Button text="Text" icon="edit-levels" preset="text" />
          <Button preset="primary" >
            <span>Block</span>
            <Icon class="ml-2 -mr-1" icon="c-question" />
          </Button>
        </Group>
        <Group name="icon">
          <Button icon="brush" />
          <Button icon="pen-23" preset="secondary" />
          <Button icon="marker" preset="primary" />
          <Button icon="s-info" preset="text" />
          <Button icon="paint-bucket-39" radius="rounded-full" />
          <Button icon="measure-17" preset="secondary" radius="rounded-full" />
          <Button icon="patch-34" preset="primary" radius="rounded-full" />
          <Button icon="ruler-pencil" preset="text" radius="rounded-full" />
        </Group>
        <Group name="disabled">
          <Button disabled={true} text="Default" />
          <Button disabled={true} text="Primary" preset="primary" />
          <Button disabled={true} text="Secondary" preset="secondary" />
          <Button
            disabled={true}
            disabledColor="bg-danger-opacity-3 text-danger-brighter"
            text="Danger"
            preset="danger"
          ></Button>
        </Group>
        <Group name="loading">
          <Button loading={true} text="Default" />
          <Button loading={true} text="Secondary" preset="secondary" />
          <Button loading={true} text="Primary" preset="primary" />
        </Group>
        <Group name="other props">
          <div className="flex items-center space-x-4">
            <Button text="Display" display="flex flex-grow" />
          </div>
          <div className="flex items-center space-x-4">
            <Button text="Align" display="flex flex-grow" align="text-left" />
            <Button text="Align" display="flex flex-grow" align="text-right" />
          </div>
          <div className="flex items-center space-x-4">
            <Button text="Font" font="text-xs" />
            <Button text="Font" font="text-md font-mono" />
            <Button text="Font" font="text-lg font-bold" />
          </div>
          <div className="flex items-center space-x-4">
            <Button text="Padding" padding="px-2" />
            <Button text="Padding" padding="px-6" />
            <Button text="Padding" padding="px-8" />
          </div>
          <div className="flex items-center space-x-4">
            <Button text="Radius" radius="rounded-none" />
            <Button text="Radius" radius="rounded-sm" />
            <Button text="Radius" radius="rounded-full" />
          </div>
        </Group>
        <Group name="custom">
          <Button
            text="Custom shadow"
            color="border text-primary-dark bg-body hover:text-primary shadow"
            ifFocusedColor="shadow-outline border-primary-opacity-4"
            elseFocusedColor="border-transparent"
          />
          <Button
            text="Custom purple color"
            color="border text-white bg-info hover:bg-info-bright active:bg-info-dark"
            ifFocusedColor="shadow-outline-info border-info-dark"
            elseFocusedColor="border-transparent"
          />
          <Button
            text="Custom dark color"
            color="text-white bg-gray-9 hover:bg-gray-8 active:bg-black"
            ifFocusedColor="shadow-outline-gray"
          />
        </Group>
        <Group name="file upload">
          <Button>
            <label htmlFor="upload" className="flex items-center">
              File Upload
              <Icon class="-mr-1 ml-2" icon="#app" />
            </label>
            <input id="upload" type="file" className="appearance-none hidden" />
          </Button>
        </Group>
      </React.Fragment>
    )
  }
}

export default ButtonModule;

