import React from "react";
import PropTypes from "prop-types";

export const Card = (props)=>{
    // console.log(props);
    return(
        <div className="card">
        <img src={props.image} className="card-img-top" alt="..." width={400} height={230} />
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText1}</p>
            <p className="card-text"><small className="text-muted">{props.cardText2}</small></p>
        </div>
    </div>
    )
};
Card.defaultProps={ //Eğer bir değer gelmiyorsa default olarak bu atanır ve görsel bozulmayı engeller.
    cardTitle : "Super Lig Takimi",
    cardText1 : "Ameds",
};
Card.propTypes = {//Değişken veriler geldiğinde (API'den) bunun kontrolünü sağlamak amacıyla
cardText1:PropTypes.string.isRequired,
};

// export default Card;