import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import FavColor from "./components/favColor";
import "./vania-style.css";

export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan/>
      <FavColor />
    </section>
  );

}