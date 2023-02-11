import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Container, Form, Header, FormError } from './styles'

const registerFormShema = z.object({
  username: z
    .string()
    .min(3, { message: 'Miníno de 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Usuário pode ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),

  nome: z.string().min(3, { message: 'Miníno de 3 letras' }),
})

type RegisterFormData = z.infer<typeof registerFormShema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormShema),
  })

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }
  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">Bem vindo ao Ignite Call!</Heading>
          <Text>Precisamos de algumas informações para criar seu perfil!</Text>

          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Nome do usuário</Text>
            <TextInput
              prefix="ingite.com/"
              placeholder="seu-usuario"
              {...register('username')}
            ></TextInput>
            {errors.username && (
              <FormError size="sm">{errors.username?.message}</FormError>
            )}
          </label>
          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="Seu nome" {...register('nome')} />
            {errors.username && (
              <FormError size="sm">{errors.nome?.message}</FormError>
            )}
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}