import g1 from "../../assets/imgs/galery1.png";
import g2 from "../../assets/imgs/galery2.png";
import g3 from "../../assets/imgs/galery3.png";
import g4 from "../../assets/imgs/galery4.png";

function GridGalery() {
    return (
        <div className="py-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 grid-rows-4 gap-4 md:px-[50px] lg:px-[100px]">
                <div className="w-full md:h-[99%] h-[250px] md:row-span-2 rounded-[20px] overflow-hidden">
                    <img src={g1} alt="Gallery 1" className="w-full h-full object-cover" />
                </div>

                <div className="w-full h-[250px] rounded-[20px] overflow-hidden">
                    <img src={g2} alt="Gallery 2" className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:h-[99%] h-[250px] md:row-span-2 rounded-[20px] overflow-hidden">
                    <img src={g4} alt="Gallery 4" className="w-full h-full object-cover" />
                </div>

                <div className="w-full h-[250px] md:row-span-1 rounded-[20px] overflow-hidden">
                    <img src={g3} alt="Gallery 3" className="w-full h-full object-cover" />
                </div>

            </div>
        </div>

    );
}

export default GridGalery;
