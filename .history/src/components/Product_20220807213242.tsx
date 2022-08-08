import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
          <div className={`w-full p-6 mt-20 text-center`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              ></h3>
              <p className={`text-gray-600 mb-8 text-justify`}>
                La ciberseguridad se ha beneficiado de los avances en el
                aprendizaje automático y la IA. Hoy en día, los equipos de
                seguridad están inundados de datos sobre posibles actividades
                sospechosas, pero a menudo se quedan buscando agujas en pajares.
                La IA ayuda a los defensores a encontrar las verdaderas amenazas
                dentro de estos datos mediante el reconocimiento de patrones en
                el tráfico de la red, los indicadores de malware y las
                tendencias de comportamiento de los usuarios.
                <br></br>
                <br></br>
                Desgraciadamente, los atacantes han encontrado sus propias
                formas de utilizar estos beneficiosos avances en inteligencia
                artificial y aprendizaje automático contra nosotros. El fácil
                acceso a los entornos en la nube hace que sea sencillo empezar
                con la IA y construir modelos de aprendizaje potentes y capaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
