import "./App.css";
import { ChakraProvider, Heading, Image, Flex, Button } from "@chakra-ui/react";
import vaquitaLogo from "./vaquita.jpeg";
import Footer from "./components/Footer";
import { CTA } from "./components/CTA";
function App() {
	const colorLogo = "#5ac4c2";
	return (
		<ChakraProvider>
			<div className='App'>
				<Flex
					fontFamily='Kitsch'
					align='center'
					justifyContent='center'
					w='full'
					h='90vh'
					bg={colorLogo}
					color='white'
				>
					<Flex
						align='center'
						justifyContent='center'
						flexDirection='column'
						w={{ base: "100%", lg: "75%" }}
						h={{ base: "100vh", lg: "100vh" }}
					>
						<Heading
							as='h1'
							size={{ base: "md", lg: "2xl" }}
							fontFamily='Kitsch'
						>
							Bienvenidos
						</Heading>
						<Flex align='center' justifyContent='space-around'>
							<Flex>
								<Image src={vaquitaLogo} />
							</Flex>
							<Flex>
								<CTA />
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</div>
			<Footer />
		</ChakraProvider>
	);
}

export default App;
