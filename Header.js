import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<Flex
			as='header'
			justify='space-between'
			wrap='wrap'
			py='6'
			px='6'
			bgColor='gray.800'
			w='100%'
			top='0'
			pos='fixed'
			zIndex='2'>
			<Heading
				as='h1'
				color='whiteAlpha.800'
				size='md'
				letterSpacing='md'
				fontWeight='bold'>
				<Link
					as={RouterLink}
					to='/'
					_hover={{ color: 'gray.500', textDecor: 'none' }}>
					RST Store
				</Link>
			</Heading>

			<Box
				display={{ base: 'block', md: 'none', sm: 'block' }}
				onClick={() => setShow(!show)}>
				<Icon as={HiOutlineMenuAlt3} color='white' w='6' h='6' />
			</Box>

			<Box
				display={{ base: show ? 'block' : 'none', md: 'flex' }}
				width={{ base: 'full', md: 'auto' }}>
				<Link
					as={RouterLink}
					to='/cart'
					fontSize='sm'
					letterSpacing='wide'
					color='whiteAlpha.600'
					fontWeight='bold'
					textTransform='uppercase'
					mr='5'
					display='flex'
					alignItems='center'
					mt={{ base: 4, md: 0 }}
					_hover={{ color: 'whiteAlpha.800' }}>
					<Icon as={HiShoppingBag} mr='1' w='4' h='4' />
					Cart
				</Link>
				<Link
					as={RouterLink}
					to='/login'
					fontSize='sm'
					letterSpacing='wide'
					color='whiteAlpha.600'
					fontWeight='bold'
					textTransform='uppercase'
					mr='5'
					display='flex'
					alignItems='center'
					mt={{ base: 4, md: 0 }}
					_hover={{ color: 'whiteAlpha.800' }}>
					<Icon as={HiUser} mr='1' w='4' h='4' />
					Login
				</Link>
			</Box>
		</Flex>
	);
};

export default Header;
