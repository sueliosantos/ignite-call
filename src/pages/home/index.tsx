import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'
import ClienteUserNameForm from './components/ClienteUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conect seu calendário e permita que as pessoas marquem os agendamentos
        </Text>
        <ClienteUserNameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a aplicação"
        />
      </Preview>
    </Container>
  )
}
