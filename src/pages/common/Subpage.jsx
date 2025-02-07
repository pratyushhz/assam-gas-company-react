import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Banner from "../../components/common/Banner";

const Subpage = () => {
    const { section, slug } = useParams(); // Get dynamic values
    console.log(section, slug)
    const [subPageInfo, setSubPageInfo] = useState(null);

    useEffect(() => {
        const fetchSubpageData = async () => {
            try {
                const response = await fetch(`http://167.71.235.8/agcl/public/api/pages/${section}/${slug}`);
                const json = await response.json();
                console.log("API Response:", json);
                setSubPageInfo(json?.content);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchSubpageData();
    }, [section, slug]); // Re-fetch when route changes

    return subPageInfo === null ? <h4>Fetching Data...</h4> : (
        <section className="pt-60 who-we-are">
            <div className="container">
                <div className="row">
                    <div dangerouslySetInnerHTML={{ __html: subPageInfo }} />
                </div>
            </div>
        </section>
    );
};

export default Subpage;
