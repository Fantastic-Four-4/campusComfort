import { Button, Popconfirm, message } from "antd";
import React, { useEffect } from "react";
import {
  useDeleteHostelMutation,
  useFetchHostelQuery,
} from "../../../store/store";
import { useSelector } from "react-redux";
import ETable from "./Etable";
import { useNavigate } from "react-router-dom";

const Hostel = () => {
  const {
    distance,
    user,
    adminToken,
    loading,
    admin,
    hostel_page,
    hostel_name,
    filter_obj,
    allowed_for,
  } = useSelector((state) => state.user);

  const {
    data: data,
    isLoading: hostel_loading,
    isFetching: fetch,
    error: error,
  } = useFetchHostelQuery({
    distance: distance,
    hostel_page,
    hostel_name,
    limit: 9,
    filter:"",
    filter_obj: filter_obj,
    allowed_for,
  });
  const navigate=useNavigate()
  const visit = (record) => {
    console.log(record);
    navigate(`/createHostel/${record._id}`);
  };
  const [deleteProduct, deleteProductResponseInfo] = useDeleteHostelMutation();
  useEffect(() => {
    if (deleteProductResponseInfo.isSuccess) {
      message.success("Delete SuccessFull");
    }
  }, [deleteProductResponseInfo]);
  const deletefun = (e, record) => {
    e.stopPropagation();
    deleteProduct(record);
  };

  const columns = [
    {
      title: "Serial No",
      key: "serialNo",
      width: 100,
      render: (text, record, index) => <span>{hostel_page * 9 - 9 + index + 1}</span>,
    },
    {
      title: "Hostel ID",
      dataIndex: "_id",
      key: "_id",
      width: 150,
    },
    {
      title: "Hostel Name",
      dataIndex: "hostel_name",
      key: "_id",
      width: 150,
    },
    {
      title: "Owner name",
      dataIndex: "owner_name",
      key: "_id",
      width: 150,
    },
    {
      title: "Hostel Phone",
      dataIndex: "hostel_phone",
      key: "_id",
      width: 150,
    },

    {
      title: "Action",
      key: "_id",
      fixed: "right",
      width: 100,

      render: (record) => (
        <Popconfirm
          title="Sure to delete?"
          onCancel={(e) => {
            e.stopPropagation();
          }}
          onConfirm={(e) => deletefun(e, record)}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ color: "red" }}
          >
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];
  return (
    <div>
      <h2 style={{color:"white",background:"teal",padding:"10px",margin:"10px 0px"}}>HOSTEL LIST</h2>
      <ETable
        columns={columns}
        data={data}
        loading={hostel_loading}
        product_page={hostel_page}
        visit={visit}
        page100={"hostel"}
      />
    </div>
  );
};

export default Hostel;
