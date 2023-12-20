import React, { useEffect, useState } from "react";
import { useCreateStaffMutation, useDeleteStaffMutation, useFetchStaffQuery, useUpdateStaffMutation } from "../../store/store";
import Staff_Table from "./Staff_Table";
import { Button, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./staff.css";
import Staff_form_parents from "./Staff_form_parents";

const Staff = () => {
    const [createStaff, creatStaffResponseInfo] = useCreateStaffMutation();
    const [updateStaff, updateStaffResponseInfo] = useUpdateStaffMutation();
    useEffect(() => {
        if (creatStaffResponseInfo.status === "fulfilled") {
          message.success("Staff Created");
          Perform_cancel();
        }
        if (creatStaffResponseInfo.isError) {
          message.error("You Dont Have Clearence");
        }
      }, [creatStaffResponseInfo]);
      useEffect(() => {
      console.log(updateStaffResponseInfo)
    
        if (updateStaffResponseInfo.status === "fulfilled") {
          message.success("Staff Updated");
          Perform_cancel();
        }
    
        if (updateStaffResponseInfo.isError) {
          message.error("You Dont Have Clearence");
        }
      }, [updateStaffResponseInfo]);
    
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const Perform_cancel = () => {
    setShow(false);
    setUserData(null);
  };

  const [deleteStaff, deleteStaffResponseInfo] =
  useDeleteStaffMutation();
  useEffect(() => {
if(deleteStaffResponseInfo.isSuccess){
    message.success("Delete Success")
}
  }, [deleteStaffResponseInfo]);
  const Model = () => {
    return (
      <div className="model-con">
        <div className="model-box">
          <Staff_form_parents updateStaff={updateStaff} createStaff={createStaff} Perform_cancel={Perform_cancel} userData={userData} />

     

          
        </div>
      </div>
    );
  };
  const navigate = useNavigate();
  const {
    data: staff,
    isLoading: loading,
    error: error,
  } = useFetchStaffQuery();
  useEffect(() => {
    if (staff) {
      console.log(staff);
    }
  }, [staff]);
  const editfun = (e) => {
    e.stopPropagation();
  };
  const deletefun = (e,data) => {
    e.stopPropagation();
console.log(data)
deleteStaff(data)
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "_id",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "_id",
      width: "20%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "_id",
      width: "20%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "_id",
      width: "10%",
    },

    {
      title: "Action",
      key: "_id",
      fixed: "right",
      width: "10%",

      render: (record) => (
        <Button
          className="edit-link"
          type="primary"
          onClick={(e) => editfun(e, record)}
        >
          Edit
        </Button>
      ),
    },
    {
      title: "Action",
      key: "_id",
      fixed: "right",
      width: "10%",

      render: (record) => (
        <Popconfirm title="Sure to delete?" onCancel={(e)=>{e.stopPropagation()}} onConfirm={(e) => deletefun(e,record)}>

        <Button onClick={(e)=>{e.stopPropagation()}} style={{color:"red"}}>Delete</Button>
            </Popconfirm>
      ),
    },
  ];

  const get_data = (data) => {
    console.log(data);

    setUserData(data);
    setShow(true);
  };
  const handlecreate = () => {
    // navigate("/admin/staff/form");
    setShow(true);
  };
  return (
    <div className="body-width-admin">
      <h1
        style={{ textAlign: "center", paddingTop: "50px", marginBottom: "20px" }}
      >
        Staff User Table
      </h1>
<div>

      <Button
        onClick={() => handlecreate()}
        style={{ marginBottom: "20px" }}
        className="universal-button-atom"
        >
        CREATE STAFF USER
      </Button>
        </div>

      <Staff_Table
        columns={columns}
        data={staff}
        loading={loading}
        get_data={get_data}
      />
      
      {show ? <Model /> : null}
    </div>
  );
};

export default Staff;
