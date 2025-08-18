import g1 from "../../assets/imgs/galery1.png";
import g2 from "../../assets/imgs/galery2.png";
import g3 from "../../assets/imgs/galery3.png";
import g4 from "../../assets/imgs/galery4.png";

function GridGalery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-4 p-4 md:h-[590px] h-full md:px-[50px] lg:px-[100px]">
            {/* g1 tam sütunu tutur */}
            <img src={g1} alt="Gallery 1" className="w-full h-full object-cover md:row-span-2 rounded-[20px]" />

            {/* g2 */}
            <img src={g2} alt="Gallery 2" className="w-full h-full object-cover rounded-[20px]" />

            {/* g4 */}
            <img src={g4} alt="Gallery 4" className="w-full h-full object-cover md:row-span-2 rounded-[20px]" />

            {/* g3 */}
            <img src={g3} alt="Gallery 3" className="w-full h-full object-cover rounded-[20px]" />
        </div>
    );
}

export default GridGalery;
