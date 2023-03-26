import React, { useEffect, useState } from "react";

const Svg = (prop) => {
    const [svg, setSvg] = useState("");
    useEffect(() => {
        fetch(prop.Url)
            .then(res => res.text())
            .then(text => setSvg(text));
    })

    return (
        <span className={prop.ClassName} dangerouslySetInnerHTML={{ __html: svg }} />
    )
}
export default Svg;