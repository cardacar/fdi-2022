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
              >
                {"Otro Text"}
              </h3>
              <p className={`text-gray-600 mb-8`}>
                Con el incremento en la cantidad de información que se maneja en
                la red en especial a nivel empresarial, se ve la necesidad de
                gestionar y controlar la seguridad de toda esta, velando por la
                automatización de muchos de estos procesos, para asi no agobiar
                y mantener al personal concentrado en los casos mas importante.
                Aqui es donde entra la inteligencia artificial,siendo una
                herramienta que permite la constante actualización de su uso,
                permite asumir una gran cantidad de tareas a la hora de mantener
                la seguridad de la información./n En cuanto a generar las fallas
                de seguridad, las mismas características que hacen a las IA una
                de las mejores herramientas para proteger información, las
                vuelven a su vez las más óptimas para penetrar en los sistemas
                de seguridad, además de que estas tienen una ventaja, la cual es
                que tú como defensor no puedes fallar nunca, pero como atacante
                no importa cuantas veces falles, dado que con solo una victoria,
                es la derrota total para la seguridad del sistema. Al ser las IA
                capaz de evolucionar con cada intento, las que tendrían más
                capacidad de desarrollo a lo largo del tiempo será la del
                atacante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
