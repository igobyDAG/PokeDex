import React from "react";

const PokemonSprite = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div className="sprite">
            <img src={src} alt={alt} height={300} width={300} />
        </div>
    );
};

export default PokemonSprite;
