import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Hostel_page } from "../../../store/mutation/userSlice";
import './admin_component.css'

const ETable = ({ editfun,data, loading, columns ,product_page,visit,user_page,page100}) => {
    const dispatch=useDispatch()
  const [total_item, setTotal_item] = useState(1);
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    if (data) {
      setTotal_item(data.totalItems);
      setDatas(data.data)
    }
  }, [data]);
  const [currentPage, setCurrentPage] = useState(1);
useEffect(() => {
  if(product_page){

    setCurrentPage(product_page)
  }
}, [product_page]);
useEffect(() => {
  if(user_page){

    setCurrentPage(user_page)
  }
}, [user_page]);
  return (<>
 

        <div>
        <Table
        style={{ cursor: "pointer" }}
        className="custom-table-ant"
        columns={columns}
        loading={loading}
        dataSource={datas}
        
        pagination={{
          total: total_item,
          pageSize: 9,
         
          current: currentPage,
          onChange: (page) => {
            if(page100==="hostel"){

              dispatch(Hostel_page(page))
            }
        
          },
        }}
        onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
            // console.log(event)
            // console.log(record)
            visit(record)
              },
            };
          }}
      
      ></Table>
      </div>
    </>
      );
    };

export default ETable;
