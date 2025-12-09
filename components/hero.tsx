import React from 'react'
import Container from './container'
import Heading from './heading'
import Subheading from './subheading'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <Container>
        <Heading as="h1">
            Agents that do the work <br /> Approvals that keep you safe.
        </Heading>
        <Subheading as="p" className='py-8'>
          Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.
        </Subheading>
        <div className='flex items-center gap-2'>
          <Button className='shadow-brand'>Start your free trial</Button>
          <Button variant={"outline"} >View role vase demos</Button>
        </div>
    </Container>
  )
}
