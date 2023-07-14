import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExteralLinkIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Portfolio">
      <Container mt={{ md: 5 }}>
        <Title>
          Portfolio <Badge>2020</Badge>
        </Title>
        <P>
          My Portfolio website, which was created using HTML, CSS and
          Javascript.
        </P>
       <List ml={4} mb={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://portfolio-9cf0b.web.app/">
            https://portfolio-9cf0b.web.app/ <ExternalLinkIcon mx="2" />
          </Link>
        </ListItem>
       </List>
         <WorkImage src="/images/port.png" alt="Portfolio" />
      </Container>
    </Layout>
  )
}

export default Work
