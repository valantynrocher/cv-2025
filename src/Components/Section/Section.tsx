import { Element } from "react-scroll";
import SectionProps from "./SectionProps";

const Section = (props: SectionProps) => {
  const { id, title, className } = props;

  return (
    <Element
      name={id}
      id={id}
      className={`${className} element flex flex-col w-full items-center justify-center pt-12 pb-12 `}
    >
      <h2 className="text-3xl text-secondary-light dark:text-secondary-dark font-bold">
        {title}
      </h2>
      <div className="pt-5 pb-5">
        <p className="text-black">
          Quid enim tam absurdum quam delectari multis inanimis rebus, ut
          honore, ut gloria, ut aedificio, ut vestitu cultuque corporis,
          animante virtute praedito, eo qui vel amare vel, ut ita dicam,
          redamare possit, non admodum delectari? Nihil est enim remuneratione
          benevolentiae, nihil vicissitudine studiorum officiorumque iucundius.
          Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro
          citroque discursantes quicquid inveniri poterat momento temporis parvi
          vastabant milvorum rapacium similes, qui si praedam dispexerint
          celsius, volatu rapiunt celeri, aut nisi impetraverint, non
          inmorantur. Constituendi autem sunt qui sint in amicitia fines et
          quasi termini diligendi. De quibus tres video sententias ferri, quarum
          nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga
          nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga
          nos benevolentiae pariter aequaliterque respondeat, tertiam, ut,
          quanti quisque se ipse facit, tanti fiat ab amicis.
        </p>
      </div>
    </Element>
  );
};

export default Section;
