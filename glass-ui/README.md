# @glass/ui

Reusable React component library built on top of [liquid-glass-react](https://github.com/rdev/liquid-glass-react). It provides common UI primitives such as buttons, cards, inputs and modals with a frosted glassmorphism effect.

## Installation

```bash
npm install @glass/ui liquid-glass-react
```

`@glass/ui` requires `react`, `react-dom` and `liquid-glass-react` as peer dependencies.

## Usage

```tsx
import { Button, Card, Input, Modal } from '@glass/ui'

function Example() {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Card>
          <h2 className="text-xl font-semibold mb-2">Hello Glass!</h2>
          <Input placeholder="Type here" />
        </Card>
      </Modal>
    </div>
  )
}
```

Each component accepts all the props from `liquid-glass-react` like `blurAmount`, `saturation`, `cornerRadius` etc., allowing full control over the glass effect.

## Components

- **Button** – clickable button.
- **Card** – basic container for content.
- **Input** – text input field.
- **Modal** – centered dialog overlay.

## Development

The package ships with ESM and CommonJS builds. Run `npm run build` to generate the `dist` folder.


