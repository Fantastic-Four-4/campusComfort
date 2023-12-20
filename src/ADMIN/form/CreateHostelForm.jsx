import {
    Button,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Space,
    Switch,
    message,
  } from "antd";
  import FormItem from "antd/es/form/FormItem";
  import FormList from "antd/es/form/FormList";
  import { Option } from "antd/es/mentions";
  import React, { useEffect, useState } from "react";
  import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
  import AnimatedFileInput from "../../atoms/AnimatedFileInput";
  import { useNavigate } from "react-router-dom";
  import { color_array, fabricStyles_array, genderArray, occassion_array, sareeStyles_array } from "../../atoms/State";
  import { url } from "./../../store/mutation/url";
  import MultiImgUpload from "../../atoms/MultiImgUpload";
  import { FaAngleDown, FaAngleUp, FaCross } from "react-icons/fa";
  import { MdClose } from "react-icons/md";
  import { useDispatch, useSelector } from "react-redux";
import { useCreateHostelMutation, useCreateUserMutation, useUpdateHostelMutation } from "../../store/store";
import TextArea from "antd/es/input/TextArea";
  
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 15 },
  };
  const onFinish = (data, Submitimg, setLoa) => {
    setLoa(true);
    console.log(data);
    if(data.product_star>5){
      message.error("Check Your Product Rating")
      setLoa(false);
  
    }else{
  
      Submitimg(data);
    }
  };
  const onUpdate = (data,Submitimg,setLoa) => {
    setLoa(true);
    console.log(data);
    if(data.product_star>5){
      message.error("Check Your Product Rating")
      setLoa(false);
  
    }else{
  
      Submitimg(data);
    }
  };
  const CreateHostlForm = ({product}) => {
    const size = ["X", "L", "M"];
    const colorOptions = [
      'Red',
      'Blue',
      'Green',
      'Yellow',
      'Black',
      'White',
      'Orange',
      'Purple',
      'Pink',
      'Gray',
    ];
    const navigate = useNavigate();
    const { user, adminToken, loading, admin_user } = useSelector(
        (state) => state.user
      );
    const [loa, setLoa] = useState(false);
    const [image, setImage] = useState(null);
  const [multifilePreviews, setMultiFilePreviews] = useState([]);
  
    const handleFileSelect = (file) => {
      console.log("Selected file:", file);
      setImage(file);
    };
    const dispatch=useDispatch()
    const [images, setImages] = useState([]);
  
    const handleMultiFileSelect = (file) => {
      console.log("Selected files:", file);
      // console.log(images => [...images, ...file])
      setImages(images => [...images, ...file]);
    };
    console.log("imagea",images)
    console.log("imagea",multifilePreviews)
  const [isReviewVisible, setIsReviewVisible] = useState(false);
    const [createProduct, creatProductResponseInfo] = useCreateHostelMutation();
    const [updateProduct, updateProductResponseInfo] = useUpdateHostelMutation();
  const [filePreviews, setFilePreviews] = useState();
    useEffect(() => {
      if (creatProductResponseInfo.isLoading === false) {
        setLoa(false);
      }
  
      if (creatProductResponseInfo.isSuccess) {
        message.success("Product Created");
        navigate("/admin/products");
      }
    }, [creatProductResponseInfo]);
    useEffect(() => {
      if (updateProductResponseInfo.isLoading === false) {
        setLoa(false);
      }
  
      if (updateProductResponseInfo.isSuccess) {
        message.success("Product Updated");
        navigate("/admin/products");
      }
    }, [updateProductResponseInfo]);
  
  
 
    // const Submitimg = (data1) => {
    //   if(image){
  
    //     const data = new FormData();
    //     data.append("file", image);
    //     data.append("upload_preset", "usdw3wzg");
    //     data.append("cloud_name", "djathks89");
  
    //     fetch("https://api.cloudinary.com/v1_1/djathks89/image/upload", {
    //     method: "POST",
    //     body: data,
    //   })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     data1.product_img = data.url;
    //     // console.log(data.url);
    //     console.log("lion",data1);
    //     if(product){
    //       // updateProduct(data1)
    //     }else{
  
    //       // createProduct(data1);
    //     }
    //   })
    //   .catch((err) => {
    //     setLoa(false);
        
    //     console.log(err);
    //   });
    // }else{
    //   if(product){
    //     updateProduct(data1)
    //   }else{
  
    //     createProduct(data1);
    //   }
    // }
    // };
    const [productIn, setProductIn] = useState([]);
    useEffect(() => {
      if(product){
  
        setFilePreviews(product.hostel_img)
        setMultiFilePreviews(product.multi_img)
        setProductIn(product.multi_img)
      }
    }, [product]);
    const Submitimg = async (data1) => {
      const img=null
      const imgs=null
      if (images) {
        const formData = new FormData();
      
        for (let i = 0; i < images.length; i++) {
          formData.append(`image`, images[i]);
        }
      
        try {
          const response = await fetch(`${url}/aws/multiple`, {
            method: 'POST',
            body: formData,
          });
      
          const data = await response.json();
          console.log('Images uploaded successfully!', data.map(item => item.location));
          data1.multi_img = [...productIn,...data.map(item => item.location)]
        } catch (error) {
          console.error('Error uploading images:', error);
        }
      }else{
        data1.multi_img = [...productIn]
  
      }
      
      if (image) {
        const formData = new FormData();
        formData.append('image', image);
      
        try {
          const response = await fetch(`${url}/aws/upload`, {
            method: 'POST',
            body: formData,
          });
      
          const data = await response.json();
          console.log('Image uploaded successfully!', data.location);
          data1.hostel_img = data.location;
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
      
      data1.created_by=admin_user._id
        if(product){
          updateProduct(data1)
        } else{
          createProduct(data1)
        }
      // }
    };
    
    
    const [form] = Form.useForm();
  
    const data = {};
    const labelCol = 8;
    const wrapperCol = 10;
    const unit = [];
    const PullIt=(item,index)=>{
      setImages(images => images.filter((_, ind) => ind !== index-productIn.length));
      setMultiFilePreviews(prevImageUrls => prevImageUrls.filter(url => url !== item));
      setProductIn(productIn.filter((it)=>it!==item));
    }
  
    return (
      <div
        style={{ marginTop: "40px", textAlign: "center" }}
        className="body-width-admin"
      >
        <h2 style={{ marginBottom: "30px" }}>Create Product</h2>
        <Form
          form={form}
          name="dynamic_form_nest_item"
          onFinish={(data) => {
            if(product){
  onUpdate(data,Submitimg,setLoa)
            }else{
  
              onFinish(data, Submitimg, setLoa);
            }
          }}
          style={{
            maxWidth: "100%",
          }}
          // autoComplete="off"
          {...layout}
          initialValues={product}
          // initialValues={thisone}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "85%",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
              <FormItem
                labelCol={labelCol}
                label="Owner Name"
                name="owner_name"
              >
                <Input
                  className="create-product-input-from"
                  placeholder="Enter Owner Name"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel Name"
                name="hostel_name"
              >
                <Input
                  className="create-product-input-from"
                  placeholder="Enter Hostel Name"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel Description"
                name="hostel_description"
              >
                <Input
                  className="create-product-input-from"
                  placeholder="Enter Hostel Description"
                />
              </FormItem>
  
             
              <FormItem
                labelCol={labelCol}
                label="Hostel Phone"
                name="hostel_phone"
              >
                <Input
                type="number"
                  className="create-product-input-from"
                  placeholder="Enter Phone"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel Rating"
                name="hostel_rating"
              >
                <Input
                type="number"
                  className="create-product-input-from"
                  placeholder="Enter Rating"
                />
              </FormItem>
              
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
            
              <FormItem
                labelCol={labelCol}
                label="Hostel Email"
                name="hostel_email"
              >
                <Input
                  className="create-product-input-from"
                  placeholder="Enter Hostel Email"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel Address"
                name="hostel_address"
              >
                <Input
                  className="create-product-input-from"
                  placeholder="Enter Hostel Address"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel State"
                name="hostel_state"
              >
                <Input
                  className="create-product-input-from"
                  placeholder="Enter Hostel State"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel City"
                name="hostel_city"
              >
                <Input
                  className="create-product-input-from"
                  placeholder="Enter Hostel City"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel Zip Code"
                name="hostel_zip_code"
              >
                <Input
                type="number"
                  className="create-product-input-from"
                  placeholder="Enter Zip Code"
                />
              </FormItem>
            </div>
          </div>
       
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "85%",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
              <FormItem valuePropName="checked" labelCol={labelCol} label="Single Bed"  name={['hostel_features', 'single_bed']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem valuePropName="checked" labelCol={labelCol} label="Double Bed"  name={['hostel_features', 'double_bed']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem valuePropName="checked" labelCol={labelCol} label="Three Bed"  name={['hostel_features', 'three_bed']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem valuePropName="checked" labelCol={labelCol} label="Four Bed"  name={['hostel_features', 'four_bed']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem valuePropName="checked" labelCol={labelCol} label="Attach Washroom"  name={['hostel_features', 'attach_washroom']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Hostel Monthly Price"
                name="hostel_monthly_price"
              >
                <Input
                type="number"
                  className="create-product-input-from"
                  placeholder="Hostel Price"
                />
              </FormItem>
              <FormItem
                labelCol={labelCol}
                label="Distance"
                name="distance_from_college"
              >
                <Input
                type="number"
                  className="create-product-input-from"
                  placeholder="Hostel Distance From College in Meters"
                />
              </FormItem>
             
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
               <FormItem valuePropName="checked" labelCol={labelCol} label="Study Table"  name={['hostel_features', 'study_table']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem valuePropName="checked" labelCol={labelCol} label="Hot Water"  name={['hostel_features', 'hot_water']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem valuePropName="checked" labelCol={labelCol} label="Drinking Water"  name={['hostel_features', 'drinking_water']}  span={10}>
               <Switch/>
              </FormItem>
              <FormItem labelCol={labelCol} label="Allowed For" name="allowed_for" span={10}>
              <Select
              
                className="create-product-select-from"
                placeholder="Allowed For"
                
              >
                {genderArray.map((item) => (
                  <Option  value={item}>{item}</Option>
                ))}
              </Select>
            </FormItem>
          
            </div>
      
          </div>
          <FormItem name="hostel_other_feature">

            <TextArea style={{width:"100%"}}/>
          </FormItem>
          <FormItem name="hostel_img"></FormItem>
  <div>
    {filePreviews?<img style={{width:"200px"}} src={filePreviews} alt="" />:null
  
    }
  </div>
          <AnimatedFileInput onFileSelect={handleFileSelect} setFilePreviews={setFilePreviews}/>
  <FormItem name="_id"></FormItem>
  
  <div style={{display:"flex",justifyContent:"center"}}>
    {multifilePreviews?
    <>{
  
      multifilePreviews.map((item,index)=><div style={{position:"relative",width:"200px"}}>
  
        <MdClose onClick={()=>PullIt(item,index)} style={{cursor:"pointer",background:"white",borderRadius:"360px",position:"absolute",right:"25px",top:"25px",verticalAlign:"middle"}}/>
        <img  style={{width:"100%",padding:"20px"}} src={item} alt="" />
        </div>
        )
    }
    </>
    :null
  
    }
  </div>
  <MultiImgUpload onFileSelect={handleMultiFileSelect} setMultiFilePreviews={setMultiFilePreviews} multifilePreviews={multifilePreviews}/>
  
  
  <div className="additional-info-section" >
                <div className="additional-info-header" style={{display:"flex",width:"100px",justifyContent:"space-between",alignItems:"center",margin:"auto"}}>
                  <div>
  
                  <h2>Review</h2>
                  </div>
                  <div onClick={() => setIsReviewVisible(!isReviewVisible)} style={{cursor:"pointer"}}>
                  {isReviewVisible?
                    <FaAngleUp style={{verticalAlign:"middle"}}/>
                    :
                    <FaAngleDown style={{verticalAlign:"middle"}}/>
                  }
                  </div>
                </div>
               
              </div>
          {/* <Button onClick={Submitimg}>Upload</Button> */}
          <FormItem>
            <Button
              // loading={true}
              // style={{ height: "100%", background: "var(--pr-color) " }}
              loading={loa}
              type="primary"
              htmlType="submit"
            >
              SUBMIT
            </Button>
          </FormItem>
  
        </Form>
      </div>
    );
  };
  
  export default CreateHostlForm;
  