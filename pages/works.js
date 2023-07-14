import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbTest from '../public/images/port.png'
import thumbTest1 from '../public/images/portitem1.jpeg'
import thumbTest2 from '../public/images/pnano.png'

const Works = () => {
  return (
    <Layout>
      <Container mt={{ md: 2 }}>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="portfolio"
              title="Portfolio Website"
              thumbnail={thumbTest}
            >
              Website created with HTML, CSS and Javascript
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="tetris" title="Tetris" thumbnail={thumbTest1}>
              Tetris Game created with Javascript and React
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="nano" title="Nanobots" thumbnail={thumbTest2}>
              University Group Project
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
