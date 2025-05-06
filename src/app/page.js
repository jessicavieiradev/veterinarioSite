import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Infobar from "@/components/Infobar";
import Main from "@/components/Main";
import QuemSomos from "@/components/QuemSomos";
import Servicos from "@/components/Servicos";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";

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
