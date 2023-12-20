import { Table } from 'antd'
import React from 'react'

const Staff_Table = ({columns,data,loading,get_data}) => {

  return (
    <div>
      <Table loading={loading} dataSource={data} columns={columns}
      style={{cursor:"pointer"}}
       onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
        // console.log(event)
        // console.log(record)
        get_data(record)
          },
        };
      }}
      />

    </div>
  )
}

export default Staff_Table
