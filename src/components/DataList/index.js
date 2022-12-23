import React, { useEffect, useState } from "react";

import moment from "moment/moment";

import { deletePage, updatePage } from "../../features/page";

import { Table, Space, Modal, Input } from "antd";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

export default function DataList() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [describe, setDescribe] = useState("");
  const navigate = useNavigate();
  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleOpenModal() {
    setOpenModal(true);
  }
  const handleSavePage = () => {
    handleCloseModal();
    dispatch(
      updatePage({
        pageInfo: {
          title,
          describe,
        },
        id: id,
      })
    );
    setDescribe("");
    setTitle("");
    setId("");
  };
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Describe",
      dataIndex: "describe",
      key: "describe",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (data) => moment(data).format("DD/MM/YYYY hh:mm:ss"),
      sorter: (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Update at",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (data) => moment(data).format("DD/MM/YYYY hh:mm:ss"),
      sorter: (a, b) =>
        new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    },
    {
      title: "Action",
      key: "action",
      render: (dataRow) => (
        <Space size="middle">
          <h4
            onClick={() => {
              handleOpenModal();
              setTitle(dataRow.title);
              setDescribe(dataRow.describe);
              setId(dataRow._id);
            }}
            className="pointer"
          >
            Info
          </h4>
          <h4
            onClick={() => dispatch(deletePage(dataRow._id))}
            className="pointer"
          >
            Delete
          </h4>
          <h4
            onClick={() => navigate(`/design/${dataRow._id}`)}
            className="pointer"
          >
            Edit
          </h4>
        </Space>
      ),
    },
  ];
  const page = useSelector((state) => state.page.current);
  const loading = useSelector((state) => state.page.loading);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(page);
    return () => {};
  }, [page]);

  return (
    <>
      <Modal
        open={openModal}
        onOk={handleSavePage}
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
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={columns}
      ></Table>
    </>
  );
}
