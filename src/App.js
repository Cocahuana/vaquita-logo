import "./App.css";
import { ChakraProvider, Heading, Image, Flex } from "@chakra-ui/react";
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
					h={{ base: "85vh", md: "90vh" }}
					p={{ base: "40px", lg: 0 }}
					bg={colorLogo}
					color='white'
				>
					<Flex
						align='center'
						justifyContent='center'
						flexDirection='column'
						w={{ base: "100%", lg: "75%" }}
						h='100%'
					>
						<Heading as='h1' size='2xl' fontFamily='Kitsch'>
							BIENVENIDOS
						</Heading>
						<Flex
							align='center'
							justifyContent={{
								base: "center",
								md: "space-around",
							}}
							flexDirection={{ base: "column", md: "flex" }}
						>
							<Flex>
								<Image src={vaquitaLogo} />
							</Flex>
							<Flex>
								<CTA />
							</Flex>
						</Flex>
					</Flex>
				</Flex>

				<Footer />
			</div>
		</ChakraProvider>
	);
}

export default App;
