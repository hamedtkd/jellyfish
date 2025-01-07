import SectionTitle from "@/components/ui/SectionTitle";
import { featuresData } from "./data";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    return (
        <section>
            <SectionTitle className="text-center">Our Features</SectionTitle>
            <div className="mt-20 gap-4 gap-y-[75px] flex flex-wrap justify-center items">
                {featuresData.map((card, key) => (
                    <FeaturesCard {...card} key={key} />
                ))}
            </div>
        </section>
    );
};

export default Features;
