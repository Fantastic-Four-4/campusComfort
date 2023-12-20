import React from 'react'
import CreateHostelForm from './form/CreateHostelForm'
import { useGetMyHostelQuery } from '../store/store';
import { useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { useParams } from 'react-router-dom';

const CreateHostel = () => {
    const { user, adminToken, loading, admin_user } = useSelector(
        (state) => state.user
      );
      const {id}=useParams()
    const {
        data: data,
        isLoading: hostel_loading,
        isFetching: fetch,
        error: error,
      } = useGetMyHostelQuery({ id});
      console.log("lion",data)
  return (
    <div>
        {hostel_loading?<LoadingButton/>:

<CreateHostelForm product={data}/>
}
    </div>
  )
}

export default CreateHostel
