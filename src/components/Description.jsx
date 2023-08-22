/* eslint-disable react/prop-types */
const Description = (props) => {
    const { desc, website, released, genres, publisher, platforms } = props.info;
    return (
        <div className="">
            <div>
                <h1>Description</h1>
                <p>{desc}</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Description