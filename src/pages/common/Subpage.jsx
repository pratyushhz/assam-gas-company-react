import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Banner from "../../components/common/Banner";
import { Link } from "react-router-dom";

const Subpage = () => {
    const { section, slug } = useParams();

    console.log(section, slug)
    const [subPageInfo, setSubPageInfo] = useState(null);
    const [bannerImage, setBannerImage] = useState("");
    const [pageTitle, setPageTitle] = useState("");

    

    useEffect(() => {
        const fetchSubpageData = async () => {
            try {
                const response = await fetch(`http://167.71.235.8/agcl/public/api/pages/${section}/${slug}`);
                const json = await response.json();
                console.log("API Response:", json);
                setSubPageInfo(json?.content);
                setBannerImage(json?.banner_image || "default-banner.jpg")
                setPageTitle(json?.title || formatText(slug));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchSubpageData();
    }, [section, slug]); // Re-fetch when route changes

    const formatText = (text) => text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    return subPageInfo === null ? <h4>Fetching Data...</h4> : (
        <>
            <section className="page-title page-title-layout2 bg-overlay bg-overlay-2 bg-parallax" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h1 className="pagetitle__heading mb-0">{slug.replace(/-/g, " ")}</h1>
                        <div className="d-flex align-items-center mt-30">
                        <a href="#" className="btn btn__white">
                            Call Us
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper bg-white">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to={`/${section}`}>{formatText(section)}</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {pageTitle}
                                </li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="pt-60 who-we-are">
                <div className="container">
                    <div className="row">
                        <div dangerouslySetInnerHTML={{ __html: subPageInfo }} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Subpage;
