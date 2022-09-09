import Image from "next/future/image";
import { Header } from "../components/Header";
import { Container, PlataformPresentation, Welcome } from "../styles/pages/home";

import Woman from '../assets/woman.png'
import { Button } from "../components/Button";

export default function Home() {
  return (
    <Container>
      <Header />

      <PlataformPresentation>
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

      </PlataformPresentation>
    </Container>
  )
}