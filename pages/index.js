import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  SimpleGrid,
  List,
  ListItem,
  chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'



const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          mb={10}
          mt={5}
          align="center"
        >
          Hello, I&apos;m a growing software developer in Germany!
        </Box>

        <Box dislpay={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Long Kaestner
            </Heading>
            <p>Student(Electro Engineering, Computer Science)</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/h.png"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Paragraph>
            Im Laufe meines Elektrotechnik-Studiums, mit der Vertiefung
            Elektronik und Nachrichtentechnik, lernte ich in den Bereichen
            Kommunikationstechnologien, Machine Learning sowie Algorithmen und
            Datenstrukturen. Auf der beruflichen Ebene sammelte ich bereits
            Erfahrungen im Bereich Datenbanken, Front-End sowie Back-End
            Entwicklung. Ich bin offen, meine praktischen Erfahrungen zu
            erweitern, mein fachliches Hintergrundwissen weiter zu verbessern
            und zu vertiefen. Weiterhin besitze ich eine gute und effiziente
            Problemlösefähigkeit sowie Geduld, Durchhaltevermögen und eine
            starke Teamfähigkeit. Neue Aufgaben sehe ich als lehrreiche
            Herausforderung und bin daher sehr gut geeignet für Ihre Stelle.
          </Paragraph>
		  

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work Experience
          </Heading>
          <BioSection>
            <BioYear>2019-2020</BioYear>
            AG-Leiter von Robotik sowie Programmieren fuer Maedchen
          </BioSection>
          <BioSection>
            <BioYear>2019-2020</BioYear>
            Werkstudent in der IT-Abteilung
          </BioSection>
          <BioSection>
            <BioYear>2020-heute</BioYear>
            Tutor fuer die Module: "Einfuehrung in die Informatik I und II",
            "Grundlagen der Regelungstechnik"
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/longdoank8" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  leftIcon={<IoLogoGithub />}
                >
                  MyGithub
                </Button>
              </Link>
            </ListItem>
			<ListItem>
				<Link href="https://github.com/longdoank8" target="_blank">
					<Button variant="ghost" colorscheme="gray" leftIcon={<IoLogoInstagram />}>
						My Instagram
					</Button>
				</Link>
			</ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
