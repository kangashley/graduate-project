import {
  Banner,
  Checkbox,
  Container,
  Disclosure,
  IconInfo32,
  render,
  Text
} from '@create-figma-plugin/ui'
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

function Widget() {
  const templates = [{
    topic: "User",
    description: "Consider their age, identities, role and responsibilities, and communities they are a part of. Who are they and what do they want to protect?"
  },
  {
    topic: "Technology usage and behaviors",
    description: "Consider what tech they use. What devices, apps, social media, and digital security tools do they use? How often?"
  },
  {
    topic: "Needs",
    description: "Consider what they use tech for. What are their goals?"
  },
  {
    topic: "Technology expertise",
    description: "Consider their familiarity with the tech. What do they know well? What do they find confusing or challenging?"
  },
  {
    topic: "Location",
    description: "Consider where they are accessing the tech. Are they in a public or private space? Who is in those spaces?"
  },
  {
    topic: "Threats",
    description: "Consider what threats they face. What kind of potential harm could they encounter online and offline?"
  }
  ]

  const [isOpen, setIsOpen] = useState(false)
  function handleClick() {
    setIsOpen(!(isOpen === true))
  }

  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Container>
      <Container space="large">
        <Banner icon={<IconInfo32 />}> Use this checklist to help you create user personas that are security- and privacy-aware.</Banner>
        {templates.map(template =>
          <Disclosure isOpen={isOpen} onClick={handleClick} title={template.topic}>
            <Checkbox onChange={handleChange} value={value}>
              <Text>
                {template.description}
              </Text>
            </Checkbox>
          </Disclosure>
        )}
      </Container>
    </Container>
  )
}

export default render(Widget)
