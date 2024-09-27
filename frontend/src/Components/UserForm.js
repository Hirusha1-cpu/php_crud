import React from 'react';

const UserForm = ({ user }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Edit User</div>
        {/* Replace this with your error handling logic */}
        {false && <span className="alert alert-danger p-2">Error message here</span>}
        <div className="card-body">
          <form action="/your-route-to-edit-user" method="post">
            {/* Use a proper method for handling CSRF tokens in React */}
            <input type="hidden" name="user_id" value={user.id} />
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" name="full_name" value={user.name} className="form-control" id="fullName" placeholder="Enter Full Name" />
              {/* Error message handling */}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={user.email} id="email" placeholder="Enter Email" />
              {/* Error message handling */}
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="number" name="phone_number" value={user.phone_number} className="form-control" id="phoneNumber" placeholder="Enter Phone Number" />
              {/* Error message handling */}
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;