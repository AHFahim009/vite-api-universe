import React from "react";

const Modal = (props) => {
  const { image_link, description, features, integrations, accuracy } =
    props.singleData;

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ss">
            <div className="card-body  w-full h-full border-2 border-error mr-2">
              <h2 className="card-title">
                {description ? description : "NO Data Found"}
              </h2>
              <div className="flex my-3  ">
                <div>
                  <h1 className="text-2xl">Features</h1>
                  {Object.values(features || {}).map((value) => (
                    <p>{value.feature_name}</p>
                  ))}
                </div>
                <div className="px-24">
                  <h1 className="text-2xl">Intregretion</h1>
                  {integrations &&
                    integrations.map((integration) => (
                      <p>{integration ? integration : "No Data Found"}</p>
                    ))}
                </div>
              </div>
              <div className="card-actions justify-end"></div>
            </div>
            <div>
              <figure className="w-full ">
                <img src={image_link && image_link[0]} />
              </figure>

              <h1 className="mt-16">{accuracy && accuracy.description}</h1>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
