import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Todo</h1>
            <form onSubmit={onSubmitForm}>
                <div className="col-lg-12">
                    <div className="col-lg-10">
                        <input type="text" className="form-control" value={description} onChange={ e=> setDescription(e.target.value) } placeholder="Enter Todo" />
                    </div>
                        <button className="btn btn-success">Add</button>
                </div>
            </form>
        </Fragment>
    ) 
}

export default InputTodo;