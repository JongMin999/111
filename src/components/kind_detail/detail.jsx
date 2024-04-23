import styles from "./detail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [kind, setKind] = useState({
    title: '',
    food: [],
    image: [],
    provider: [],
    Vaccination:[],
    information : []
    // other properties
  });

  useEffect(() => {
    axios.get("/data/dog.json").then((data) => {
      const kindObject = data.data.dog.find((kind) => kind.id === parseInt(id));

      if (kindObject) {
        setKind(kindObject);
      } else {
        console.error(`Cannot find kind corresponding to ${id}.`);
      }
    });
  }, [id]);

  return (
    <div>
      {id === "1" && (
        <div>
          {kind.image.map((image, index) => (
            <img key={index} src={image} alt={`Dog Image ${index + 1}`} />
          ))}
          <div className={styles.abc}>
          <p>품종: {kind.provider.join(" - ")}</p>
          <p>
          {kind.information.map((vaccine, index) => (
            <span key={index}>
              {vaccine}
              {index < kind.information.length - 1 && <br />}
            </span>
          ))}
        </p>
          <p>※먹으면 안되는 음식: {kind.food.join(", ")}</p>
          <p>※예방접종: {kind.Vaccination.join(", ")}</p>
        </div>
      </div>
      )}
      {id === "2" && (
        <div>
        {kind.image.map((image, index) => (
          <img key={index} src={image} alt={`Dog Image ${index + 1}`} />
        ))}
        <div className={styles.abc}>
        <p>품종: {kind.provider.join(" - ")}</p>
        <p>
        {kind.information.map((vaccine, index) => (
          <span key={index}>
            {vaccine}
            {index < kind.information.length - 1 && <br />}
          </span>
        ))}
      </p>
        <p>※먹으면 안되는 음식: {kind.food.join(", ")}</p>
        <p>※예방접종: {kind.Vaccination.join(", ")}</p>
      </div>
    </div>
      )}
      {id === "3" && (
        <div>
        {kind.image.map((image, index) => (
          <img key={index} src={image} alt={`Dog Image ${index + 1}`} />
        ))}
        <div className={styles.abc}>
        <p>품종: {kind.provider.join(" - ")}</p>
        <p>
        {kind.information.map((vaccine, index) => (
          <span key={index}>
            {vaccine}
            {index < kind.information.length - 1 && <br />}
          </span>
        ))}
      </p>
        <p>※먹으면 안되는 음식: {kind.food.join(", ")}</p>
        <p>※예방접종: {kind.Vaccination.join(", ")}</p>
      </div>
    </div>
      )}
      {id === "4" && (
        <div>
        {kind.image.map((image, index) => (
          <img key={index} src={image} alt={`Dog Image ${index + 1}`} />
        ))}
        <div className={styles.abc}>
        <p>품종: {kind.provider.join(" - ")}</p>
        <p>
        {kind.information.map((vaccine, index) => (
          <span key={index}>
            {vaccine}
            {index < kind.information.length - 1 && <br />}
          </span>
        ))}
      </p>
        <p>※먹으면 안되는 음식: {kind.food.join(", ")}</p>
        <p>※예방접종: {kind.Vaccination.join(", ")}</p>
      </div>
    </div>
      )}
      {id === "5" && (
        <div>
        {kind.image.map((image, index) => (
          <img key={index} src={image} alt={`Dog Image ${index + 1}`} />
        ))}
        <div className={styles.abc}>
        <p>품종: {kind.provider.join(" - ")}</p>
        <p>
        {kind.information.map((vaccine, index) => (
          <span key={index}>
            {vaccine}
            {index < kind.information.length - 1 && <br />}
          </span>
        ))}
      </p>
        <p>※먹으면 안되는 음식: {kind.food.join(", ")}</p>
        <p>※예방접종: {kind.Vaccination.join(", ")}</p>
      </div>
    </div>
      )}
    </div>
  );
};

export default Detail;