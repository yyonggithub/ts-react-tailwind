import React, { FC, useState } from "react";
import DocGroup from "../../components/doc-group";
import Modal from "../../components/modal";
import ModalHeader from "../../components/modal/modal-header";
import ModalBody from "../../components/modal/modal-body";

const ModalModule: FC = () => {
  const [toggle, setToggle] = useState(false);
  const cancel = ()=>{
    console.log('cancel');

  }
  const confirm = ()=>{
    console.log('confirm')
  }
  return (
    <>
      <DocGroup name="default">
        <button type="button" onClick={() => setToggle(!toggle)}>
          切换
        </button>
        <Modal toggle={toggle} setToggle={setToggle} onCancel={cancel} onConfirm={confirm}>
          <ModalHeader>I am a header</ModalHeader>
          <ModalBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ducimus eius tempora corrupti blanditiis quos perspiciatis sit sint placeat non velit ullam libero nemo tenetur consequatur illo ab id cupiditate.</ModalBody>
        </Modal>
      </DocGroup>
    </>
  );
};

export default ModalModule