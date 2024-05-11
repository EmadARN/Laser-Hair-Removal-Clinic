import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function CaptionSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(true)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({base: '90%', md: '50%'});
    const side = useBreakpointValue({base: '30%', md: '40px'});

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Design Projects 1',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://www.soorban.com/images/news/2022/03/1648435252_O5wA0.jpg',
        },
        {
            title: 'Design Projects 2',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://dl.bahalmag.ir/images/%D8%B9%DA%A9%D8%B3_%D8%B3%D9%87_%D9%86%D9%81%D8%B1%D9%87_%D8%AF%D8%AE%D8%AA%D8%B1%D8%A7%D9%86%D9%87_%D8%A8%D8%B1%D8%A7%DB%8C_%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84/%D8%B9%DA%A9%D8%B3-%D8%B3%D9%87-%D9%86%D9%81%D8%B1%D9%87-%D8%AF%D8%AE%D8%AA%D8%B1%D9%88%D9%86%D9%87-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84.jpg',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://i1.delgarm.com/i/798/0011/04/61eec04ae7d13.jpeg',
        },
    ];
    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>

            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/*Left Icon*/}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px"/>
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px"/>
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${card.image})`}>
                        {/* This is the block you need to change, to customize the caption */}
                        <Container size="container.lg" height="600px" position="relative">
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)">
                                <Heading fontSize={{base: '3xl', md: '4xl', lg: '5xl'}}>
                                    {card.title}
                                </Heading>
                                <Text fontSize={{base: 'md', lg: 'lg'}} color="GrayText">
                                    {card.text}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default CaptionSlider