/** @jsx figma.widget.h */

import { showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const { AutoLayout } = widget

export default function () {
  const options = {
    width: 240, height: 144
  }

  showUI(options)

  widget.register(Checklist)
}

function Checklist() {
  return (
    <AutoLayout
      direction='horizontal'
      horizontalAlignItems='center'
      verticalAlignItems='center'
      height='hug-contents'
      padding={8}
      fill='#FFFFFF'
      spacing={12}
      effect={{
        type: 'drop-shadow',
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        offset: { x: 0, y: 0 },
        blur: 2,
        spread: 2
      }}
    >
      <AutoLayout
        direction='vertical'
        horizontalAlignItems='start'
        verticalAlignItems='start'
      >
        ✅ Security Checklist
      </AutoLayout>
    </AutoLayout>
  )
}