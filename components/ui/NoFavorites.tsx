import { Container,Text,Image } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
        display:'flex',
        flexDirection: 'column',
        height:'cal(100vh-100px)',
        justifyContent:'center',
        alignSelf:'center'
      }}>
        <Text h1> No hay favortitos</Text>
        <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
        width={250}
        height={250}
        css={{
          opacity:0.5}}
        />

      </Container>
  )
}
