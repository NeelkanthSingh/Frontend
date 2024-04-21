import React from 'react'

const AddDocumentComponent = () => {
  return (
    <div>
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">File upload!</h2>
                <br />
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
        </div>
    </div>
  )
}

export default AddDocumentComponent;