import { Button, Form, Input, Radio, Switch, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect, useState } from "react";
import {
  useCreateStaffMutation,
  useUpdateStaffMutation,
} from "../../store/store";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 15 },
};
const onFinish = (data, createStaff) => {
  if (data.password === data.cpassword) {
    console.log("create", data);

    createStaff(data);
  } else {
    message.error("Password Doesn't Match");
  }
};
const onUpdate = (data, updateStaff) => {
  console.log("update", data);
  updateStaff(data)
};

const Staff_form = ({ createStaff,updateStaff,Perform_cancel, userData }) => {
  const labelCol = 8;
  const wrapperCol = 10;
  const product = false;
  const [form] = Form.useForm();


  const [create, setCreate] = useState(false);
  const [upadte, setUpadte] = useState(false);
  const [delete1, setDelete1] = useState(false);
  const [user_view, setUser_view] = useState(false);
  const [user_edit, setUser_edit] = useState(false);
  const [user_delete, setUser_delete] = useState(false);
  useEffect(() => {
    if (userData) {
      setCreate(userData.product_create);
      setUpadte(userData.product_edit);
      setDelete1(userData.product_delete);
      setUser_view(userData.user_view);
      setUser_edit(userData.user_edit);
      setUser_delete(userData.user_delete);
    }
  }, [userData]);

  return (
    <div>
      <Form
        form={form}
        name="dynamic_form_nest_item"
        onFinish={(data) => {
          if (userData) {
            onUpdate(data, updateStaff);
          } else {
            onFinish(data, createStaff);
          }
        }}
        style={{
          maxWidth: "100%",
        }}
        // autoComplete="off"
        {...layout}
        initialValues={userData}
        // initialValues={thisone}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "85%",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <FormItem name="_id"></FormItem>
            <FormItem
              labelCol={labelCol}
              label="Name"
              name="name"
              className="formitem-staff"
            >
              <Input
                className="create-product-input-from"
                placeholder="Enter Product Name"
              />
            </FormItem>
            <FormItem
              labelCol={labelCol}
              label="Email"
              name="email"
              className="formitem-staff"
            >
              <Input
                className="create-product-input-from"
                placeholder="Enter Product Sku"
              />
            </FormItem>

            <FormItem
              labelCol={labelCol}
              label="Phone"
              name="phone"
              className="formitem-staff"
            >
              <Input
                className="create-product-input-from"
                placeholder="Enter Product Type"
              />
            </FormItem>
            <b>PRODUCT :</b>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <FormItem labelCol={labelCol} label="Create" name="product_create">
                  <Switch
                    checked={create}
                    onClick={(data) =>{ 
                      setCreate(data)}}
                  />
              </FormItem>
              <FormItem labelCol={labelCol} label="Edit" name="product_edit">
                <Switch checked={upadte} onClick={(data) => setUpadte(data)} />
              </FormItem>
              <FormItem labelCol={labelCol} label="Delete" name="product_delete">
                <Switch
                  checked={delete1}
                  onClick={(data) => setDelete1(data)}
                />
              </FormItem>
            </div>
            <b>USER :</b>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <FormItem labelCol={labelCol} label="View" name="user_view">
                  <Switch
                    checked={user_view}
                    onClick={(data) => setUser_view(data)}
                  />
              </FormItem>
              <FormItem labelCol={labelCol} label="Edit" name="user_edit">
                <Switch
                  checked={user_edit}
                  onClick={(data) => setUser_edit(data)}
                />
              </FormItem>
              <FormItem labelCol={labelCol} label="Delete" name="user_delete">
                <Switch
                  checked={user_delete}
                  onClick={(data) => setUser_delete(data)}
                />
              </FormItem>
            </div>
            {!userData ? (
              <>
                <FormItem
                  labelCol={labelCol}
                  label="Password"
                  name="password"

                  className="formitem-staff"
                >
                  <Input
                    required
                  type="password"

                    className="create-product-input-from"
                    placeholder="Enter Product Shipping Details"
                  />
                </FormItem>
                <FormItem
                  labelCol={labelCol}
                  label="Confirm Password"
                  name="cpassword"
                  className="formitem-staff"
                >
                  <Input
                    required
                    type="password"
                    className="create-product-input-from"
                    placeholder="Enter Product Shipping Details"
                  />
                </FormItem>
              </>
            ) : null}
          </div>
        </div>

        <div></div>

        <FormItem>
          <Button
            // loading={loa}
            type="primary"
            htmlType="submit"
          >
            {userData ? <span>UPDATE</span> : <span>CREATE</span>}
          </Button>
          <Button
            // loading={loa}
            style={{ marginLeft: "20px" }}
            danger
            type="primary"
            onClick={() => Perform_cancel()}
          >
            CANCEL
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Staff_form;
