import React from 'react'
import { useState } from 'react'

const AddMovie = ({ onAdd }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [posterURL, setURL] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({ description, title, rating, posterURL })

        setDescription('')
        setTitle('')
        setURL('')
        setRating('')



    }

    return (
        <>




            {/* Button trigger modal  */}
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add new movie
            </button>

            {/* Modal  */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">

                            {/* Form starts */}
                            <div className="movie-card">
                                <form onSubmit={onSubmit} className='form-control'>
                                    <div className="m-2 p-2">
                                        <h4>Add a new movie</h4>
                                        <input type="text" required className="form-control mt-0 " placeholder='Movie title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                        <input type="text" required className="form-control mt-0 " placeholder='Movie description' value={description} onChange={(e) => setDescription(e.target.value)} />
                                        <input type="text" required className="form-control mt-0 pt-0" placeholder='Movie rating' value={rating} onChange={(e) => setRating(e.target.value)} />
                                        <input type="text" required className="form-control mt-0 pt-0" placeholder='PosterURL' value={posterURL} onChange={(e) => setURL(e.target.value)} />
                                        <input type="submit" required value="Save movie" className='btn btn-info' />
                                    </div>
                                </form>
                            </div>

                            {/* Form Ends */}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddMovie
