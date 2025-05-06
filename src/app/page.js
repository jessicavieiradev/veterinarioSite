import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Infobar from "@/components/Infobar";
import Main from "@/components/Main";
import QuemSomos from "@/components/QuemSomos";
import Servicos from "@/components/Servicos";

export default function Home() {
  return (
    <div className="font-poppins">
      <Infobar/>
      <Header />
      <Main />
      <QuemSomos />
      <Servicos />
      <Contato />
      <Footer/>
    </div>
  );
}
