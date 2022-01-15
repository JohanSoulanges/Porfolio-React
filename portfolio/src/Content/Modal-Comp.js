import React from "react";
import { GrClose } from "react-icons/gr";
import { useGlobalContext } from "../Context/AppContext";

const CompModal = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div className={showModal ? "modal show-modal" : "modal"}>
      <div className="modal-container">
        <button
          className="close-modal-btn"
          onClick={() => setShowModal(!showModal)}
        >
          <GrClose />
        </button>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sint eius explicabo, excepturi recusandae repellat. Eveniet reiciendis
          quas hic tempore optio dolorem cum minus, temporibus, vel dolore
          adipisci corporis modi nesciunt accusantium odit nisi, aperiam
          distinctio ex error nulla animi pariatur? Illo atque nam aut ex culpa
          nisi, praesentium ab assumenda officiis sed inventore repudiandae
          earum quas porro natus! Ipsum tenetur maiores praesentium
          consequuntur, qui nobis accusamus delectus labore voluptates fuga
          veritatis ducimus quas minus at reiciendis nostrum voluptatum
          necessitatibus magni dignissimos vitae ea iure. Voluptatem repudiandae
          velit nulla repellendus saepe libero totam beatae veritatis ipsa
          consectetur! Veritatis dicta necessitatibus fuga perferendis ut
          cupiditate? Blanditiis, soluta adipisci aut pariatur doloremque,
          repudiandae quidem dignissimos voluptas rem, optio neque aliquam! Aut
          facilis porro illum aspernatur illo odio repellendus dolores
          voluptatem eaque voluptates corrupti velit possimus rerum nihil ipsam
          quam, aliquam culpa? Mollitia non vitae, modi repellendus amet aperiam
          totam voluptates numquam inventore in maxime at sint necessitatibus,
          reprehenderit quam ea minima impedit deserunt labore dolorum hic. Odit
          enim reiciendis nihil tempora quia et voluptatum maiores, unde
          perferendis iste fugit dignissimos quam debitis quasi praesentium
          architecto eveniet voluptatem iure dolorum facilis cumque soluta sunt
          deleniti. Non repudiandae reprehenderit facilis architecto obcaecati
          vel quae?
        </h3>
      </div>
    </div>
  );
};

export default CompModal;
