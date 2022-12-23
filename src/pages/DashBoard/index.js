import React, { useEffect, useState } from "react";
import "./Styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth";
import { getPages, createPage } from "../../features/page";
import { Button, Modal, Input } from "antd";
import { auth } from "../../firebase";

import DataList from "../../components/DataList";

export default function DashBoard() {
  const dispatch = useDispatch();
  const authCurrent = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleOpenModal() {
    setOpenModal(true);
  }
  const handleCreateProject = () => {
    dispatch(
      createPage({
        title,
        describe,
      })
    );
    handleCloseModal();
    setTitle("");
    setDescribe("");
  };
  useEffect(() => {
    function handleGetPages() {
      dispatch(getPages(authCurrent.uid));
    }
    handleGetPages();

    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper flex-col p-4">
      <div className="logout">
        {`Hello! ${authCurrent.name}`}
        <Button
          onClick={() => {
            auth.signOut();
            dispatch(logout());
          }}
          className="m-2"
        >
          Logout
        </Button>
      </div>
      <Button onClick={() => handleOpenModal()} type="primary">
        Create new project
      </Button>
      <Modal
        open={openModal}
        onOk={handleCreateProject}
        onCancel={() => handleCloseModal()}
      >
        <Input
          className="mt-4"
          value={title}
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          prefix={"Title:"}
          placeholder="Type here"
        />
        <Input.TextArea
          autoSize={true}
          className="mt-4"
          defaultValue={describe}
          value={describe}
          onChange={(e) => setDescribe(e.target.value)}
          placeholder="Type describe in here"
        />
      </Modal>
      <div className="datalist mt-4">
        <DataList></DataList>
      </div>
    </div>
  );
}
