import Image from "next/future/image";
import { Header } from "../components/Header";
import { BusinessNumbers, Container, PlataformPresentation, Services, Welcome } from "../styles/pages/home";

import Woman from '../assets/woman.png'
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { ServiceCard } from "../components/ServiceCard";

export default function Home() {

  const cards = [
    {
      title: 'Problemas digestivos',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
    },
    {
      title: 'Saúde Hormonal',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
    },
    {
      title: 'Bem-estar mental',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
    },
    {
      title: 'Cuidados Pediátricos',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
    },
    {
      title: 'Autoimune e Inflamação',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
    },
    {
      title: 'Saúde do Coração',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
    }
  ]

  return (
    <Container>
      <Header />

      <PlataformPresentation>
        <div className="content">
          <main>
            <span>
              <Welcome>
                BOAS-VINDAS A DOCTORCARE 👋
              </Welcome>

              <h1>
                Assistência médica simplificada para todos
              </h1>

              <p className="description">
                Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>

              <Button 
                text="AGENDAR CONSULTA"
                variant="primary"
              />
            </span>
            <Image src={Woman} alt="" />
          </main>
        </div>
        
        <BusinessNumbers>
          <div>
            <strong>+3.500</strong>
            <span>Pacientes atendidos</span>
          </div>

          <div>
            <strong>+15</strong>
            <span>Especialidades disponíveis</span>
          </div>

          <div>
            <strong>+10</strong>
            <span>Anos de mercado</span>
          </div>
        </BusinessNumbers>

        <Services>
          <Heading title="Sobre nós" subtitle="Como podemos ajudá-lo a se sentir melhor?" />

          <div className="cards">
            {cards.map(card => (
              <ServiceCard 
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

        </Services>

      </PlataformPresentation>
    </Container>
  )
}