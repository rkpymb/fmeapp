const ImageComponent = () => {
    const imageBaseUrl = 'https://fmenew.sgp1.cdn.digitaloceanspaces.com/';
    const imageFileName = 'poster2im.jpg';


    const imageQualities = [
        { quality: 50, label: 'Low' },
        { quality: 70, label: 'Medium' },
        { quality: 90, label: 'High' },
    ];

    return (
        <div>
            {imageQualities.map(({ quality, label }) => (
                <div key={quality}>
                    <h4>{label} Quality</h4>
                    <img
                        src={`${imageBaseUrl}/${imageFileName}?quality=${quality}`}
                        alt="Example Image"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageComponent;
