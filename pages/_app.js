import { ChakraProvider }  from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
//import Navbar from '../components/navbar'


const Navbar = dynamic(() => import("../components/navbar"), { ssr: false });


const Website = ({ Component , pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Navbar />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}> 
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website    