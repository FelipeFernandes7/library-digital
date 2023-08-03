import { PaymentCard } from "../../components/paymentCard";
import { Background } from "../../components/background";
import { Container } from "../../components/container";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { BsCreditCard } from "react-icons/bs";
import { FaPix } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";

import { ButtonBox, Center, Content } from "./styles";

import bookImg from "../../assets/undraw_reading_time_re_phf7.svg";

export function Home() {
  return (
    <>
      <Background>
        <Header />
        <Container>
          <Content>
            <div>
              <h1>
                Variedades e Livros você encontra aqui <br />
                <span>Não Fique de Fora</span>
              </h1>

              <ButtonBox>
                <button className="btn1">Obter Meu Livro</button>
                <button className="btn2">Mais Informações</button>
              </ButtonBox>
            </div>

            <img src={bookImg} alt="illustration" />
          </Content>
        </Container>
      </Background>
      <Footer>
        <Center>
          <PaymentCard text={"Aceitamos Pix"} icon={<FaPix />} />
          <PaymentCard
            text={"Parcelamos em até 10X sem juros"}
            icon={<BsCreditCard />}
          />
          <PaymentCard text={"Aceitamos Boleto"} icon={<MdOutlinePayments />} />
        </Center>
      </Footer>
    </>
  );
}
