import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../../component/table/CommonTable";
import CommonTableColumn from "../../component/table/CommonTableColumn";
import CommonTableRow from "../../component/table/CommonTableRow";
import { postList } from "../../Data";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
const PostList = (props) => {
  const [dataList, setDataList] = useState([]);
  // const [inputs, setInputs] = useState({
  //   no: 1,
  //   title: "",
  //   createDate: "2023-11-20",
  //   readCount: 6,
  // });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setInput] = useState({
    no: "11",
    name: "",
    desc: "",
    title: "",
    createDate: "2023-11-20",
    readCount: 6,
  });
  useEffect(() => {
    setDataList(postList);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput((values) => ({
      ...values,
      no: dataList.length + 1,
    }));
    dataList.push(input);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    gap: 5,
    display: "flex",
    flexDirection: "col",
    p: 2,
  };
  return (
    <>
      <div>
        <Button
          style={{
            backgroundColor: "silver",
            color: "black",
            left: "1200px",
          }}
          onClick={handleOpen}
        >
          글쓰기
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Box sx={{ display: "flex", gap: "89.5px" }}>
                주제:
                <input
                  type="text"
                  name="title"
                  onChange={(event) => {
                    setInput((values) => ({
                      ...values,
                      title: event.target.value,
                    }));
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: 10 }}>
                이름:
                <input
                  type="text"
                  name="name"
                  onChange={(event) => {
                    setInput((values) => ({
                      ...values,
                      name: event.target.value,
                    }));
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "43.5px" }}>
                내용:
                <textarea
                  type="text"
                  name="desc"
                  onChange={(event) => {
                    setInput((values) => ({
                      ...values,
                      desc: event.target.value,
                    }));
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "75px" }}>
                사진:
                <input
                  type="file"
                  name="image"
                  onChange={(event) => {
                    setInput((values) => ({
                      ...values,
                      name: event.target.value,
                    }));
                  }}
                />
              </Box>
              <input
                onClick={handleSubmit}
                type="submit"
                width="400px"
                sx={{ bgcolor: "blue" }}
              />
            </Box>
          </Box>
        </Modal>
      </div>
      <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/postView/${item.no}`}>{item.title}</Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  <CommonTableColumn>{item.readCount}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
};

export default PostList;