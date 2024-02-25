import {
    Box,
    chakra,
    SimpleGrid,
} from '@chakra-ui/react'
import { StatsCard } from '../components/core/StatsCard'

export default function BasicStatistics() {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
                Tus estadisticas
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'We serve'} stat={'50,000 people'} />
                <StatsCard title={'In'} stat={'30 different countries'} />
                <StatsCard title={'Who speak'} stat={'100 different languages'} />
            </SimpleGrid>
        </Box>
    )
}