import ALink from "../features/custom-link";

export default function Breadcrumb(props) {
    return (
        <div className="page-header"
            style={{
                backgroundImage: 'url(https://d-themes.com/wordpress/riode/elements/wp-content/uploads/sites/3/2020/10/page-title-bar1.jpg)',
                backgroundColor: "#3C63A4",
                marginBottom: '2%'
            }}>
            <h3 className="page-subtitle text-dark">{props.subTitle}</h3>
            <h1 className="page-title text-dark">{props.title}</h1>
            <ul className="breadcrumb text-dark">
                <li className="text-dark" >
                    <ALink href="/" >
                        <i className="d-icon-home"></i>
                    </ALink>
                </li>

                <li className="delimiter text-dark">/</li>
                {
                    props.parentUrl ?
                        <>
                            <li><ALink href={props.parentUrl} className="text-dark">{props.subTitle}</ALink></li>
                            <li className="delimiter text-dark">/</li>
                        </>
                        : ""
                }
                <li className="text-dark">{props.title}</li>
            </ul>
        </div>
    )
}