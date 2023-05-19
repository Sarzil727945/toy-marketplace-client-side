import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Tab3 = ({data}) => {
     const {_id, photoURL, name, price, rating } = data;
     const { user } = useContext(AuthContext)

     const handelToast = () => {
          (user?.email) || Swal.fire('Please Login your Account!!')
     }
     return (
          <div className='col-lg-4 mb-3'>
               <div class="card p-2">
                    <img src={photoURL} class="card-img-top tabImg" alt="..." />
                    <div class="card-body">
                         <h5 class="card-title">{name}</h5>
                         <div className=' d-flex justify-content-between'>
                              <p class="card-text">Price: ${price}</p>
                              <p class="card-text">Rating: {rating}</p>
                         </div>
                         <Link to={`/tab1Details/${_id}`}>
                              <button onClick={handelToast} href="#" class="btn btn-primary">View Details</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Tab3;