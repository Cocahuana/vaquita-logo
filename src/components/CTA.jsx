import {
	Box,
	Button,
	Container,
	Heading,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

const colorLogo = "#5ac4c2";
export const CTA = () => (
	<Box as='section' bg='bg-surface' fontFamily='Kitsch'>
		<Container>
			<Stack>
				<Stack align='center'>
					<Heading
						size={useBreakpointValue({
							base: "sm",
							md: "md",
							lg: "lg",
							xl: "2xl",
						})}
						fontFamily='Kitsch'
						fontWeight='bold'
					>
						TE ANIMAS A PROBAR?
					</Heading>
				</Stack>
				<Stack
					spacing='3'
					direction={{
						base: "column",
						sm: "row",
					}}
					justify='center'
				>
					<Button
						border='2px solid white'
						variant='outline'
						size='lg'
						transition='ease 1s'
						_hover={{
							bg: "white",
							color: colorLogo,
						}}
					>
						En otro momento
					</Button>
					<Button
						as='a'
						href='https://www.instagram.com/breathe.mendoza/'
						target='_blank'
						border='2px solid white'
						variant='outline'
						size='lg'
						transition='ease 1s'
						_hover={{
							bg: "white",
							color: colorLogo,
						}}
					>
						Conocer más!
					</Button>
				</Stack>
			</Stack>
		</Container>
	</Box>
);
